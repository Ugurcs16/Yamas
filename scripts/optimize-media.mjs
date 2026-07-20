/**
 * Optimizes images (WebP + compressed JPEG) and hero video (desktop + mobile MP4).
 * Run: npm run optimize:media
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import ffmpegStatic from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public/images");
const VIDEOS_DIR = path.join(ROOT, "public/videos");
const GENERATED = path.join(ROOT, "src/generated/media-manifest.ts");

const FFMPEG = ffmpegStatic;

const IMAGE_PROFILES = {
  "yamas-hero-poster.jpg": { maxWidth: 1280, quality: 72, blur: true, lcp: true },
  "gyros-premium.jpg": { maxWidth: 1400, quality: 80, blur: true },
  "souvlaki-premium.jpg": { maxWidth: 1400, quality: 80, blur: true },
  "salad-premium.jpg": { maxWidth: 1400, quality: 80, blur: true },
  "pita-premium.jpg": { maxWidth: 1400, quality: 80, blur: true },
  "interior.jpg": { maxWidth: 1600, quality: 80, blur: true },
  "breakfast.jpg": { maxWidth: 1600, quality: 80, blur: true },
  "halal-chicken.jpg": { maxWidth: 1600, quality: 80, blur: true },
};

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeImage(filename, profile) {
  const input = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(input)) {
    console.warn(`  skip (missing): ${filename}`);
    return null;
  }

  const base = filename.replace(/\.(jpe?g|png)$/i, "");
  const webpOut = path.join(IMAGES_DIR, `${base}.webp`);
  const jpgOut = path.join(IMAGES_DIR, filename);

  const inputStat = fs.statSync(input);
  const pipeline = sharp(input).rotate().resize({
    width: profile.maxWidth,
    withoutEnlargement: true,
    fit: "inside",
  });

  await pipeline.clone().webp({ quality: profile.quality, effort: 4 }).toFile(webpOut);
  await pipeline
    .clone()
    .jpeg({ quality: profile.quality, mozjpeg: true, progressive: true })
    .toFile(jpgOut + ".tmp");
  fs.renameSync(jpgOut + ".tmp", jpgOut);

  let blurDataURL = "";
  if (profile.blur) {
    const blurBuf = await sharp(input)
      .rotate()
      .resize(16, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 25 })
      .toBuffer();
    blurDataURL = `data:image/webp;base64,${blurBuf.toString("base64")}`;
  }

  const webpStat = fs.statSync(webpOut);
  const jpgStat = fs.statSync(jpgOut);
  console.log(
    `  ${filename}: ${formatBytes(inputStat.size)} → webp ${formatBytes(webpStat.size)}, jpg ${formatBytes(jpgStat.size)}`
  );

  return { key: base.replace(/-/g, "_").replace(/yamas_hero_poster/, "heroPoster").replace(/gyros_premium/, "gyros").replace(/souvlaki_premium/, "souvlaki").replace(/salad_premium/, "salad").replace(/pita_premium/, "pita").replace(/halal_chicken/, "halalChicken"), blurDataURL, webp: `/images/${base}.webp`, jpg: `/images/${filename}` };
}

function mapImageKey(base) {
  const map = {
    yamas_hero_poster: "heroPoster",
    gyros_premium: "gyros",
    souvlaki_premium: "souvlaki",
    salad_premium: "salad",
    pita_premium: "pita",
    interior: "interior",
    breakfast: "breakfast",
    halal_chicken: "halalChicken",
  };
  const normalized = base.replace(/-/g, "_");
  return map[normalized] ?? base;
}

async function optimizeImages() {
  console.log("\n📷 Images");
  const manifest = { images: {}, blur: {} };

  for (const [filename, profile] of Object.entries(IMAGE_PROFILES)) {
    const input = path.join(IMAGES_DIR, filename);
    if (!fs.existsSync(input)) continue;

    const base = filename.replace(/\.(jpe?g|png)$/i, "");
    const webpOut = path.join(IMAGES_DIR, `${base}.webp`);
    const jpgOut = path.join(IMAGES_DIR, filename);

    const inputStat = fs.statSync(input);
    const pipeline = sharp(input).rotate().resize({
      width: profile.maxWidth,
      withoutEnlargement: true,
      fit: "inside",
    });

    await pipeline.clone().webp({ quality: profile.quality, effort: 4 }).toFile(webpOut);
    await pipeline
      .clone()
      .jpeg({ quality: profile.quality, mozjpeg: true, progressive: true })
      .toFile(jpgOut + ".tmp");
    fs.renameSync(jpgOut + ".tmp", jpgOut);

    let blurDataURL = "";
    if (profile.blur) {
      const blurBuf = await sharp(jpgOut)
        .resize(16, null, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 25 })
        .toBuffer();
      blurDataURL = `data:image/webp;base64,${blurBuf.toString("base64")}`;
    }

    const key = mapImageKey(base);
    manifest.images[key] = { webp: `/images/${base}.webp`, jpg: `/images/${filename}` };
    if (blurDataURL) manifest.blur[key] = blurDataURL;

    const webpStat = fs.statSync(webpOut);
    const jpgStat = fs.statSync(jpgOut);
    console.log(
      `  ${filename}: ${formatBytes(inputStat.size)} → webp ${formatBytes(webpStat.size)}, jpg ${formatBytes(jpgStat.size)}`
    );
  }

  return manifest;
}

function encodeVideo(input, output, { width, crf, label, fps, duration }) {
  if (!FFMPEG) throw new Error("ffmpeg-static not available");
  const vf = [`scale=${width}:-2`];
  if (fps) vf.push(`fps=${fps}`);

  const args = [
    "-y",
    "-i",
    input,
    "-an",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    String(crf),
    "-profile:v",
    "main",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    "-vf",
    vf.join(","),
  ];

  if (duration) {
    args.push("-t", String(duration));
  }

  args.push(output);

  console.log(`  encoding ${label}…`);
  execFileSync(FFMPEG, args, { stdio: "inherit" });
  const stat = fs.statSync(output);
  console.log(`  ${path.basename(output)}: ${formatBytes(stat.size)}`);
  return stat.size;
}

function optimizeVideos() {
  console.log("\n🎬 Video");
  const desktopRel = "/videos/yamas-hero.mp4";
  const mobileRel = "/videos/yamas-hero-mobile.mp4";
  const desktopFile = path.join(VIDEOS_DIR, "yamas-hero.mp4");
  const mobileFile = path.join(VIDEOS_DIR, "yamas-hero-mobile.mp4");

  if (!fs.existsSync(desktopFile)) {
    console.warn("  skip: yamas-hero.mp4 not found — manifest still points to expected paths");
    return { desktop: desktopRel, mobile: mobileRel };
  }

  // Never overwrite the desktop master. Build a lightweight mobile derivative only.
  const source = desktopFile;
  const desktopSize = fs.statSync(desktopFile).size;
  console.log(`  desktop kept as-is: ${formatBytes(desktopSize)}`);

  encodeVideo(source, mobileFile, {
    width: 720,
    crf: 28,
    fps: 24,
    duration: 8,
    label: "mobile 720p / 24fps / 8s",
  });

  const mobileSize = fs.statSync(mobileFile).size;
  if (mobileSize > 8 * 1024 * 1024) {
    console.warn(
      `  warning: mobile video is ${formatBytes(mobileSize)} (target ≤ 8 MB) — consider a tighter CRF`
    );
  }

  return {
    desktop: desktopRel,
    mobile: mobileRel,
  };
}

function writeManifest(manifest, videos) {
  fs.mkdirSync(path.dirname(GENERATED), { recursive: true });
  const content = `/* eslint-disable */
/** Auto-generated by scripts/optimize-media.mjs — do not edit manually */
export const MEDIA_MANIFEST = ${JSON.stringify({ ...manifest, videos }, null, 2)} as const;
`;
  fs.writeFileSync(GENERATED, content);
  console.log(`\n✓ Wrote ${path.relative(ROOT, GENERATED)}`);
}

async function main() {
  console.log("Optimizing media for production…\n");
  const manifest = await optimizeImages();
  const videos = optimizeVideos();
  writeManifest(manifest, videos);
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
