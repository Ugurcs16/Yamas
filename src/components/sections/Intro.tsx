"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { FoodImage, PremiumImageOverlays } from "@/components/ui/FoodImage";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Intro() {
  const t = useTranslations("intro");

  return (
    <section id="ueber-uns" className="luxury-section py-16 sm:py-24 md:py-36 -mt-12 sm:-mt-16 relative z-10 scroll-mt-20">
      <div className="absolute inset-0 bg-warm-glow pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0c0a] to-transparent z-[1]" aria-hidden />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-14 min-w-0">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          <FadeIn className="lg:col-span-6 lg:pr-8">
            <p className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-5">
              {t("eyebrow")}
            </p>
            <div className="gold-line-wide max-w-xs mb-8" aria-hidden />
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-ivory-warm font-light leading-[1.15] tracking-[-0.02em]">
              {t.rich("quote", {
                fresh: () => (
                  <span className="italic text-champagne">{t("fresh")}</span>
                ),
              })}
            </blockquote>
            <p className="mt-8 text-ivory-muted text-base sm:text-lg font-light leading-[1.75] max-w-lg">
              {t("body")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={SITE.phoneHref} ariaLabel={t("reserve")}>
                {t("reserve")}
              </Button>
              <Button href="#speisekarte" variant="outline">
                {t("menu")}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="right" className="lg:col-span-6 relative">
            <div className="relative lg:pl-8">
              <motion.div
                className="group relative aspect-[4/5] rounded-sm overflow-hidden border border-champagne/20 shadow-luxury food-card-glow z-10 bg-midnight-light"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.6 }}
              >
                <FoodImage
                  src={IMAGES.interior}
                  alt={t("interiorAlt")}
                  imageKey="interior"
                  objectPosition="center 45%"
                  className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <PremiumImageOverlays variant="hero" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                  <p className="text-champagne text-[10px] uppercase tracking-[0.35em] mb-2">
                    {t("atmosphere")}
                  </p>
                  <p className="font-display text-2xl sm:text-3xl text-ivory-warm italic">
                    {t("atmosphereTitle")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group absolute -bottom-6 -left-4 sm:-left-8 w-[42%] max-w-[180px] aspect-[4/5] rounded-sm overflow-hidden border border-champagne/25 shadow-editorial z-20 bg-midnight-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <FoodImage
                  src={IMAGES.pita}
                  alt={t("pitaFresh")}
                  imageKey="pita"
                  objectPosition="center 40%"
                  className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                  sizes="180px"
                />
                <PremiumImageOverlays variant="subtle" />
                <p className="absolute bottom-3 left-3 z-10 text-[9px] uppercase tracking-widest text-champagne">
                  {t("pitaFresh")}
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
