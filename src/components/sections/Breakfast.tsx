"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { FoodImage, PremiumImageOverlays } from "@/components/ui/FoodImage";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { useTranslations } from "next-intl";

export function Breakfast() {
  const t = useTranslations("breakfast");

  return (
    <section id="fruehstueck" className="luxury-section py-16 sm:py-24 md:py-36 relative scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(201,164,92,0.08),transparent)] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <FadeIn direction="left" className="lg:col-span-6 lg:-mr-8 relative z-10">
            <div className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-champagne/20 shadow-luxury food-card-glow bg-midnight-light">
              <FoodImage
                src={IMAGES.breakfast}
                alt={t("imageAlt")}
                imageKey="breakfast"
                objectPosition="center 35%"
                className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <PremiumImageOverlays />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-champagne text-[10px] uppercase tracking-[0.35em]">
                  {t("mood")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-6 lg:pl-4">
            <p className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-5">
              {t("eyebrow")}
            </p>
            <div className="gold-line-wide max-w-xs mb-8" aria-hidden />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] text-ivory-warm font-light leading-[1.1] tracking-[-0.02em]">
              {t("title")}
              <span className="block italic text-champagne mt-1">{t("titleAccent")}</span>
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-ivory-muted font-display font-light italic">
              {t("hours")}
            </p>
            <p className="mt-8 text-ivory-muted text-base sm:text-lg font-light leading-[1.75]">
              {t("body")}
            </p>
            <div className="mt-10">
              <Button href={SITE.phoneHref} ariaLabel={t("cta")}>
                {t("cta")}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
