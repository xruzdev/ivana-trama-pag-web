// Genera variantes WebP responsive de assets/images → public/img y el manifest
// que usa el loader de next/image (src/lib/image-loader.ts).
// Uso: npm run images
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "assets/images");
const OUT_DIR = path.join(ROOT, "public/img");
const MANIFEST = path.join(ROOT, "src/lib/image-manifest.json");

// Deben coincidir con images.deviceSizes / imageSizes de next.config.mjs
const PHOTO_WIDTHS = [384, 640, 828, 1080, 1280, 1920];
const LOGO_WIDTHS = [48, 96, 128, 256, ...PHOTO_WIDTHS];
const QUALITY = 78;

// Archivos estáticos con URL fija (OG, schema.org): no pasan por el loader
const STATIC = [
  { src: "og-image.jpg", out: "public/og-image.jpg", width: 1200, format: "jpeg" },
  { src: "logo-calado-blanco.png", out: "public/logo.png", width: 600, format: "png" },
];

const isLogo = (name) => name.startsWith("logo");

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  const files = (await fs.readdir(SRC_DIR)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  const manifest = {};
  let before = 0;
  let after = 0;

  for (const file of files.sort()) {
    const name = path.parse(file).name;
    if (name === "og-image") continue;

    const input = path.join(SRC_DIR, file);
    const { width, height } = await sharp(input).rotate().metadata();
    const candidates = isLogo(name) ? LOGO_WIDTHS : PHOTO_WIDTHS;
    const widths = candidates.filter((w) => w < width && w < candidates.at(-1));
    // Siempre incluir el ancho original (sin upscaling) como tope
    const max = Math.min(width, candidates.at(-1));
    if (!widths.length || widths.at(-1) < max) widths.push(max);

    for (const w of widths) {
      const out = path.join(OUT_DIR, `${name}-${w}.webp`);
      await sharp(input)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6, alphaQuality: 90 })
        .toFile(out);
      after += (await fs.stat(out)).size;
    }
    before += (await fs.stat(input)).size;
    manifest[name] = { width, height, widths };
    console.log(`${name.padEnd(24)} ${width}x${height} → ${widths.join(", ")}`);
  }

  for (const s of STATIC) {
    const img = sharp(path.join(SRC_DIR, s.src)).resize({ width: s.width, withoutEnlargement: true });
    await (s.format === "jpeg" ? img.jpeg({ quality: 82, mozjpeg: true }) : img.png({ compressionLevel: 9, palette: true }))
      .toFile(path.join(ROOT, s.out));
    console.log(`${s.src.padEnd(24)} → ${s.out}`);
  }

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\n${Object.keys(manifest).length} imágenes · originales ${(before / 1024).toFixed(0)}KB · variantes ${(after / 1024).toFixed(0)}KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
