"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-16 md:mb-20", align === "center" && "text-center")}>
      {eyebrow && (
        <p className="text-champagne text-xs uppercase tracking-[0.35em] mb-4 font-medium">
          {eyebrow}
        </p>
      )}
      <div className={cn("gold-line mb-8", align === "center" && "mx-auto")} aria-hidden />
      <h2
        id={id}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-ivory tracking-tight leading-[1.1]"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-ivory-muted text-lg md:text-xl max-w-2xl leading-relaxed font-light",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
