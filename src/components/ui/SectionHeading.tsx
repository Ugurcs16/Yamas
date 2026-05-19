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
    <FadeIn className={cn("mb-10 sm:mb-14 md:mb-20", align === "center" && "text-center")}>
      {eyebrow && (
        <p className="text-champagne text-[11px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] mb-3 sm:mb-4 font-medium">
          {eyebrow}
        </p>
      )}
      <div className={cn("gold-line mb-6 sm:mb-8", align === "center" && "mx-auto")} aria-hidden />
      <h2
        id={id}
        className="font-display text-[clamp(1.75rem,6vw,2.5rem)] sm:text-5xl lg:text-6xl font-medium text-ivory tracking-tight leading-[1.12] text-balance px-1"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 sm:mt-5 text-[15px] sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light text-ivory-muted px-1",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
