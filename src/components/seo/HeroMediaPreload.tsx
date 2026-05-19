import { IMAGES } from "@/lib/images";

/** Preload LCP hero poster for instant first paint */
export function HeroMediaPreload() {
  return (
    <link
      rel="preload"
      as="image"
      href={IMAGES.heroPoster}
      type="image/webp"
      fetchPriority="high"
    />
  );
}
