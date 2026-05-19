"use client";

import { getBlurForSrc, type ImageKey, getImageBlur } from "@/lib/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface FoodImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  objectPosition?: string;
  /** Manifest key for blur placeholder (optional if src is a known asset) */
  imageKey?: ImageKey;
  aspectRatio?: string;
}

export function FoodImage({
  src,
  alt,
  className,
  fill = true,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 80,
  objectPosition = "center",
  imageKey,
  aspectRatio,
}: FoodImageProps) {
  const [error, setError] = useState(false);
  const blurDataURL = imageKey ? getImageBlur(imageKey) : getBlurForSrc(src);

  if (error) {
    return (
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-charcoal via-midnight to-midnight-light flex items-center justify-center",
          className
        )}
        role="img"
        aria-label={alt || "Bild"}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <span className="font-display text-5xl text-champagne/20" aria-hidden>
          Υ
        </span>
      </div>
    );
  }

  const image = (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      quality={quality}
      className={cn("object-cover", className)}
      style={{ objectPosition }}
      sizes={sizes}
      priority={priority}
      fetchPriority={priority ? "high" : undefined}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      loading={priority ? undefined : "lazy"}
      onError={() => setError(true)}
    />
  );

  if (aspectRatio && fill) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
        <div className="absolute inset-0">{image}</div>
      </div>
    );
  }

  return image;
}

/** Cinematic overlays + gold accent for luxury image cards */
export function PremiumImageOverlays({
  variant = "card",
}: {
  variant?: "card" | "hero" | "subtle";
}) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-500",
          variant === "hero"
            ? "bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/25 to-[rgba(10,8,6,0.15)]"
            : variant === "subtle"
              ? "bg-gradient-to-t from-[#0a0c0a]/90 via-transparent to-transparent"
              : "bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/35 to-transparent"
        )}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_30%,rgba(0,0,0,0.35)_100%)] opacity-70 group-hover:opacity-90 transition-opacity duration-500"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-champagne/[0.06] via-transparent to-terracotta/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-champagne/0 group-hover:ring-champagne/25 transition-all duration-500 rounded-[inherit]"
        aria-hidden
      />
    </>
  );
}
