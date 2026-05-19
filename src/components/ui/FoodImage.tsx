"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FoodImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function FoodImage({
  src,
  alt,
  className,
  fill = true,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: FoodImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-charcoal via-midnight to-midnight-light flex items-center justify-center",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-5xl text-champagne/20" aria-hidden>
          Υ
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={cn("object-cover", className)}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
