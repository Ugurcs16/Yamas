"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { FoodImage, PremiumImageOverlays } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SIGNATURE_DISH_IMAGES, SIGNATURE_DISH_KEYS } from "@/lib/constants";
import { IMAGE_SIZES, type ImageKey } from "@/lib/images";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export function SignatureDishes() {
  const t = useTranslations("signature");

  const dishes = useMemo(
    () =>
      SIGNATURE_DISH_KEYS.map((key) => ({
        key: key as ImageKey,
        image: SIGNATURE_DISH_IMAGES[key].image,
        objectPosition: SIGNATURE_DISH_IMAGES[key].objectPosition,
        title: t(`dishes.${key}.title`),
        description: t(`dishes.${key}.description`),
        alt: t(`dishes.${key}.alt`),
      })),
    [t]
  );

  const [featured, ...rest] = dishes;

  return (
    <section className="luxury-section py-16 sm:py-24 md:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(111,125,69,0.08),transparent)] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-14 min-w-0">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <FadeIn className="lg:col-span-7 lg:row-span-2">
            <motion.article
              className="group relative h-full min-h-[420px] lg:min-h-[560px] rounded-sm overflow-hidden border border-champagne/15 food-card-glow bg-midnight-light"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5 }}
            >
              <FoodImage
                src={featured.image}
                alt={featured.alt}
                imageKey={featured.key}
                objectPosition={featured.objectPosition}
                className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                sizes={IMAGE_SIZES.half}
                priority
              />
              <PremiumImageOverlays />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10">
                <p className="text-champagne text-[10px] uppercase tracking-[0.4em] mb-3">
                  {t("badge")}
                </p>
                <h3 className="font-display text-3xl sm:text-4xl text-ivory-warm font-light italic">
                  {featured.title}
                </h3>
                <p className="mt-3 text-ivory-muted font-light max-w-md">{featured.description}</p>
              </div>
            </motion.article>
          </FadeIn>

          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
            {rest.map((dish, index) => (
              <FadeIn key={dish.key} delay={index * 0.1}>
                <motion.article
                  className="group relative aspect-[16/11] lg:aspect-[16/10] rounded-sm overflow-hidden border border-champagne/10 bg-midnight-light"
                  whileHover={{ y: -4, borderColor: "rgba(201,164,92,0.3)" }}
                  transition={{ duration: 0.45 }}
                >
                  <FoodImage
                    src={dish.image}
                    alt={dish.alt}
                    imageKey={dish.key}
                    objectPosition={dish.objectPosition}
                    className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 1024px) 50vw, 35vw"
                  />
                  <PremiumImageOverlays />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <div className="gold-line w-8 mb-3 opacity-60 group-hover:w-14 group-hover:opacity-100 transition-all duration-500" />
                    <h3 className="font-display text-xl text-ivory-warm">{dish.title}</h3>
                    <p className="mt-1 text-ivory-dim text-sm font-light">{dish.description}</p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
