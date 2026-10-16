// Loader de next/image: sirve las variantes WebP pre-generadas en public/img
// (scripts/optimize-images.mjs) en lugar de usar la optimización de Vercel.
// Uso: <Image src="/img/profile" ... />  (nombre del archivo en assets/images, sin extensión)
import manifest from "./image-manifest.json";

type Entry = { width: number; height: number; widths: number[] };

const images = manifest as Record<string, Entry>;
const PREFIX = "/img/";

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith(PREFIX)) return src;

  const name = src.slice(PREFIX.length);
  const entry = images[name];
  if (!entry) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[image-loader] "${name}" no está en image-manifest.json. Corré npm run images.`);
    }
    return src;
  }

  const best = entry.widths.find((w) => w >= width) ?? entry.widths[entry.widths.length - 1];
  return `${PREFIX}${name}-${best}.webp`;
}
