"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { FoodImage } from "@/components/ui/FoodImage";
import { motion } from "framer-motion";

export function HalalHighlight() {
  return (
    <section className="luxury-section py-20 md:py-28 relative" aria-labelledby="halal-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(111,125,69,0.14),transparent)] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-14">
        <FadeIn>
          <div className="relative rounded-sm overflow-hidden border border-olive/25 shadow-luxury">
            <div className="absolute inset-0 opacity-25">
              <FoodImage src="/images/salad-premium.jpg" alt="" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0a]/95 via-[#0a0c0a]/85 to-[#0a0c0a]/90" />
            <div className="relative px-6 sm:px-12 py-12 sm:py-16 text-center">
              <p className="text-olive-light text-[10px] uppercase tracking-[0.4em] mb-5">
                Vertrauen & Qualität
              </p>
              <div className="gold-line-wide max-w-xs mx-auto mb-8" aria-hidden />
              <h2
                id="halal-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory-warm font-light leading-tight tracking-[-0.02em]"
              >
                Alle Hähnchengerichte sind{" "}
                <span className="italic text-champagne">halal.</span>
              </h2>
              <p className="mt-6 text-ivory-muted text-base sm:text-lg font-light leading-[1.75] max-w-2xl mx-auto">
                Bei Yamas legen wir Wert auf Transparenz und Qualität. Unsere
                Hähnchengerichte werden nach halal Standards zubereitet — frisch,
                vertrauenswürdig und mit mediterraner Sorgfalt serviert.
              </p>
              <motion.div
                className="mt-8 inline-flex items-center gap-3 glass-panel-gold rounded-sm px-6 py-3.5 border-olive/20"
                whileHover={{ scale: 1.02 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-olive-light shadow-[0_0_8px_rgba(138,154,90,0.6)]" aria-hidden />
                <span className="text-ivory text-sm font-light tracking-wide">
                  Halal Hähnchen · Frisch vom Grill
                </span>
              </motion.div>
              <div className="mt-10">
                <Button href="#speisekarte" variant="outline">
                  Halal Gerichte entdecken
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
