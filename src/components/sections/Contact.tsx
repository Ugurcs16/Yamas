"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { FoodImage } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { IMAGES, IMAGE_SIZES } from "@/lib/images";
import { usePrefersReducedMotion } from "@/lib/use-media";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("contact");
  const site = useTranslations("site");
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="kontakt" className="luxury-section py-16 sm:py-24 md:py-36 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 sm:opacity-35">
          <FoodImage
            src={IMAGES.gyros}
            alt=""
            imageKey="gyros"
            objectPosition="center 40%"
            className="scale-110"
            sizes={IMAGE_SIZES.hero}
            quality={75}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,10,0.94)_0%,rgba(10,8,6,0.9)_50%,rgba(10,12,10,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(201,164,92,0.15),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-14 min-w-0">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Mobile-first: reservation notice */}
        <FadeIn className="mb-6 lg:hidden">
          <div className="rounded-sm border border-champagne/30 bg-champagne/10 px-4 py-3.5">
            <p className="text-[10px] uppercase tracking-wider text-champagne mb-1.5">
              {t("reservation")}
            </p>
            <p className="text-[15px] text-ivory font-light leading-relaxed">
              {site("reservationNote")}
            </p>
          </div>
        </FadeIn>

        <FadeIn className="mb-8 sm:mb-12 md:mb-16">
          <motion.div
            className="relative rounded-sm overflow-hidden border border-champagne/25 shadow-glow-warm p-6 sm:p-12 text-center"
            whileHover={reducedMotion ? undefined : { borderColor: "rgba(201,164,92,0.45)" }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-ivory/[0.03] to-terracotta/5" />
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative">
              <p className="font-display text-xl sm:text-3xl md:text-4xl text-ivory-warm font-light italic mb-2 sm:mb-3">
                {t("ctaTitle")}
              </p>
              <p className="text-[15px] sm:text-base text-ivory-muted font-light mb-6 sm:mb-8 max-w-lg mx-auto">
                {t("ctaBody")}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
                <Button
                  href={SITE.phoneHref}
                  size="lg"
                  ariaLabel={t("order")}
                  className="w-full min-h-[52px]"
                >
                  {SITE.phone}
                </Button>
                <Button
                  href={SITE.mapsUrl}
                  variant="secondary"
                  size="lg"
                  external
                  ariaLabel={t("route")}
                  className="w-full min-h-[52px]"
                >
                  {t("route")}
                </Button>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <FadeIn>
            <div className="glass-panel-gold rounded-sm p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 h-full border-champagne/20">
              <ContactBlock title={t("address")}>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group touch-manipulation"
                >
                  <p className="text-ivory font-light text-[15px] sm:text-base group-hover:text-champagne transition-colors">
                    {site("addressStreet")}
                  </p>
                  <p className="text-ivory-muted text-[15px] sm:text-base mt-0.5">
                    {site("addressCity")}
                  </p>
                </a>
              </ContactBlock>
              <ContactBlock title={t("phone")}>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center min-h-[48px] font-display text-2xl sm:text-3xl text-champagne hover:text-champagne-light transition-colors touch-manipulation"
                >
                  {SITE.phone}
                </a>
              </ContactBlock>
              <ContactBlock title={t("hours")}>
                <p className="text-ivory font-light text-[15px] sm:text-base">{site("hours")}</p>
                <p className="text-ivory-muted mt-1 text-[15px] sm:text-base">{site("breakfastHours")}</p>
              </ContactBlock>
              <div className="hidden lg:block pt-4 border-t border-champagne/15">
                <p className="text-ivory-dim text-[10px] uppercase tracking-wider mb-2">
                  {t("reservation")}
                </p>
                <p className="text-ivory-muted text-sm font-light leading-relaxed">
                  {site("reservationNote")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="right">
            <motion.div
              className="rounded-sm overflow-hidden border border-champagne/20 shadow-luxury h-[min(50vw,280px)] sm:h-[320px] lg:h-full lg:min-h-[380px]"
              whileHover={reducedMotion ? undefined : { borderColor: "rgba(201,164,92,0.4)" }}
            >
              <iframe
                title={t("mapsTitle")}
                src={SITE.mapsEmbed}
                className="w-full h-full border-0 opacity-85 grayscale-[30%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-champagne text-[10px] uppercase tracking-[0.3em] mb-2 sm:mb-3">{title}</p>
      <div className="text-ivory-muted font-light leading-relaxed">{children}</div>
    </div>
  );
}
