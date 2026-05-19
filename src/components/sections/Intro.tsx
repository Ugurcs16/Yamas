"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { FoodImage } from "@/components/ui/FoodImage";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Intro() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="ueber-uns" className="luxury-section py-24 md:py-36 -mt-16 relative z-10">
      <div className="absolute inset-0 bg-warm-glow pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0c0a] to-transparent z-[1]" aria-hidden />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <FadeIn className="lg:col-span-6 lg:pr-8">
            <p className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-5">
              Über Yamas
            </p>
            <div className="gold-line-wide max-w-xs mb-8" aria-hidden />
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-ivory-warm font-light leading-[1.15] tracking-[-0.02em]">
              Mitten im Herzen von Clausthal erwartet dich griechische Küche —{" "}
              <span className="italic text-champagne">frisch, authentisch</span> und mit
              viel Liebe zubereitet.
            </blockquote>
            <p className="mt-8 text-ivory-muted text-base sm:text-lg font-light leading-[1.75] max-w-lg">
              Ob Gyros, Souvlaki, knackige Salate, Hähnchengerichte, Pasta, Burger oder
              Schnitzel — bei Yamas findet jeder etwas Passendes. Familiengeführt,
              herzlich und mit dem Anspruch, jeden Besuch unvergesslich zu machen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={SITE.phoneHref} ariaLabel="Tisch reservieren">
                Tisch reservieren
              </Button>
              <Button href="#speisekarte" variant="outline">
                Speisekarte
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="right" className="lg:col-span-6 relative">
            {/* Overlapping composition */}
            <div className="relative lg:pl-8">
              <motion.div
                className="relative aspect-[4/5] rounded-sm overflow-hidden border border-champagne/20 shadow-luxury food-card-glow z-10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.6 }}
              >
                {!imgError ? (
                  <Image
                    src="/images/interior.jpg"
                    alt="Yamas Restaurant Interieur"
                    fill
                    className="object-cover transition-transform duration-[1.4s] hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-midnight-light to-midnight flex items-center justify-center">
                    <span className="font-display text-8xl text-champagne/15">Υ</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-champagne text-[10px] uppercase tracking-[0.35em] mb-2">
                    Atmosphäre
                  </p>
                  <p className="font-display text-2xl sm:text-3xl text-ivory-warm italic">
                    Warm. Elegant. Griechisch.
                  </p>
                </div>
              </motion.div>

              {/* Food cutout — overlaps main image */}
              <motion.div
                className="absolute -bottom-6 -left-4 sm:-left-8 w-[42%] max-w-[180px] aspect-[4/5] rounded-sm overflow-hidden border border-champagne/25 shadow-editorial z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <FoodImage src="/images/pita-premium.jpg" alt="Pita Spezialität" sizes="180px" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-80" />
                <p className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-champagne">
                  Pita frisch
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
