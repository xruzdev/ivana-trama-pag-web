// Re-encodea assets/videos → public/video: AV1 (mp4) + H.264 (mp4, fallback) + poster WebP.
// Requiere ffmpeg con libsvtav1 y libx264 en el PATH. Uso: npm run videos
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "assets/videos");
const OUT_DIR = path.join(ROOT, "public/video");

const ffmpeg = (args) => execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: "inherit" });

// Sin audio (son fondos muteados), moov al inicio para que arranquen antes
const COMMON = ["-an", "-pix_fmt", "yuv420p", "-movflags", "+faststart"];

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const files = (await fs.readdir(SRC_DIR)).filter((f) => f.endsWith(".mp4"));

  for (const file of files) {
    const name = path.parse(file).name;
    const input = path.join(SRC_DIR, file);
    const out = (suffix) => path.join(OUT_DIR, `${name}${suffix}`);

    ffmpeg(["-i", input, "-c:v", "libsvtav1", "-preset", "5", "-crf", "38", "-g", "240", ...COMMON, out(".av1.mp4")]);
    ffmpeg(["-i", input, "-c:v", "libx264", "-preset", "veryslow", "-crf", "26", "-profile:v", "high", "-tune", "film", ...COMMON, out(".mp4")]);

    const frame = path.join(OUT_DIR, `${name}.poster.png`);
    ffmpeg(["-i", input, "-frames:v", "1", frame]);
    await sharp(frame).webp({ quality: 70, effort: 6 }).toFile(out(".poster.webp"));
    await fs.rm(frame);

    const kb = async (p) => ((await fs.stat(p)).size / 1024).toFixed(0) + "KB";
    console.log(`${name}: original ${await kb(input)} · av1 ${await kb(out(".av1.mp4"))} · h264 ${await kb(out(".mp4"))} · poster ${await kb(out(".poster.webp"))}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
