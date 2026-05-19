"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function SectionSeparator() {
  return (
    <FadeIn className="relative py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-5 flex items-center gap-6" aria-hidden>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze/40 to-champagne/30" />
        <span className="font-display text-champagne/50 text-lg">◆</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-bronze/40 to-champagne/30" />
      </div>
    </FadeIn>
  );
}
