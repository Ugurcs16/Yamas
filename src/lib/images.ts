import { MEDIA_MANIFEST } from "@/generated/media-manifest";

export type ImageKey = keyof typeof MEDIA_MANIFEST.images;

/** WebP-first paths — Next.js Image serves AVIF/WebP automatically */
export const IMAGES = {
  heroPoster: MEDIA_MANIFEST.images.heroPoster.webp,
  heroPosterJpg: MEDIA_MANIFEST.images.heroPoster.jpg,
  gyros: MEDIA_MANIFEST.images.gyros.webp,
  souvlaki: MEDIA_MANIFEST.images.souvlaki.webp,
  salad: MEDIA_MANIFEST.images.salad.webp,
  pita: MEDIA_MANIFEST.images.pita.webp,
  interior: MEDIA_MANIFEST.images.interior.webp,
  breakfast: MEDIA_MANIFEST.images.breakfast.webp,
  halalChicken: MEDIA_MANIFEST.images.halalChicken.webp,
} as const;

export const IMAGE_BLUR = MEDIA_MANIFEST.blur;

export const HERO_VIDEO = MEDIA_MANIFEST.videos;

/** LQIP blur placeholder for a manifest image key */
export function getImageBlur(key: ImageKey): string | undefined {
  return MEDIA_MANIFEST.blur[key];
}

/** Resolve blur from any optimized asset path */
export function getBlurForSrc(src: string): string | undefined {
  const entry = Object.entries(MEDIA_MANIFEST.images).find(
    ([, paths]) => paths.webp === src || paths.jpg === src
  );
  if (!entry) return undefined;
  return MEDIA_MANIFEST.blur[entry[0] as ImageKey];
}

/** Responsive `sizes` presets */
export const IMAGE_SIZES = {
  hero: "100vw",
  fullWidth: "(max-width: 768px) 100vw, 90vw",
  half: "(max-width: 768px) 100vw, 50vw",
  card: "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 420px",
  thumb: "180px",
  small: "140px",
} as const;
