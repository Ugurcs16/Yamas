"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

export function Breakfast() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="fruehstueck" className="luxury-section py-24 md:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(201,164,92,0.08),transparent)] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <FadeIn direction="left" className="lg:col-span-6 lg:-mr-8 relative z-10">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-champagne/20 shadow-luxury food-card-glow group">
              {!imgError ? (
                <Image
                  src="/images/breakfast.jpg"
                  alt="Frühstück bei Yamas"
                  fill
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta/25 via-midnight to-midnight flex items-center justify-center">
                  <span className="font-display text-7xl text-champagne/20">☀</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-transparent to-champagne/5" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-champagne text-[10px] uppercase tracking-[0.35em]">Morgenstimmung</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-6 lg:pl-4">
            <p className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-5">
              Morgens bei Yamas
            </p>
            <div className="gold-line-wide max-w-xs mb-8" aria-hidden />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] text-ivory-warm font-light leading-[1.1] tracking-[-0.02em]">
              Frühstück
              <span className="block italic text-champagne mt-1">bei Yamas</span>
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-ivory-muted font-display font-light italic">
              Täglich von 08:00 bis 10:00 Uhr
            </p>
            <p className="mt-8 text-ivory-muted text-base sm:text-lg font-light leading-[1.75]">
              Starte deinen Tag mediterran — mit frischen Zutaten, warmem Brot und
              dem typischen Yamas-Gastgebergefühl. Ein ruhiger Moment vor dem Tag
              in Clausthal.
            </p>
            <div className="mt-10">
              <Button href={SITE.phoneHref} ariaLabel="Frühstück anfragen">
                Frühstück anfragen
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
