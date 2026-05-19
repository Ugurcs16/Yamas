"use client";

import { HeroAtmosphere } from "@/components/ui/Atmosphere";
import { Button } from "@/components/ui/Button";
import { FoodImage, PremiumImageOverlays } from "@/components/ui/FoodImage";
import { SITE, TRUST_BADGE_KEYS } from "@/lib/constants";
import {
  getImageBlur,
  HERO_VIDEO,
  IMAGES,
  IMAGE_SIZES,
} from "@/lib/images";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/use-media";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

const MOBILE_VIDEO_DELAY_MS = 1400;
const HERO_BLUR = getImageBlur("heroPoster");

export function Hero() {
  const t = useTranslations("hero");
  const trust = useTranslations("trust");
  const site = useTranslations("site");
  const signature = useTranslations("signature.dishes");
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const videoSrc = isMobile ? HERO_VIDEO.mobile : HERO_VIDEO.desktop;

  useEffect(() => {
    if (reducedMotion) return;
    const delay = isMobile ? MOBILE_VIDEO_DELAY_MS : 500;
    const timer = window.setTimeout(() => setShouldLoadVideo(true), delay);
    return () => window.clearTimeout(timer);
  }, [reducedMotion, isMobile]);

  const handleVideoReady = useCallback(() => {
    setVideoReady(true);
    videoRef.current?.play().catch(() => {
      /* autoplay may be blocked until user gesture */
    });
  }, []);

  return (
    <section
      id="start"
      className="relative min-h-[92svh] sm:min-h-[100svh] flex flex-col justify-end lg:justify-center overflow-hidden"
      aria-label={t("ariaLabel")}
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0c0a]">
        {/* LCP poster — instant with blur placeholder */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          aria-hidden
        >
          <Image
            src={IMAGES.heroPoster}
            alt=""
            fill
            className="object-cover object-[center_35%] sm:object-center"
            quality={80}
            priority
            fetchPriority="high"
            sizes={IMAGE_SIZES.hero}
            placeholder={HERO_BLUR ? "blur" : "empty"}
            blurDataURL={HERO_BLUR}
          />
        </div>

        {shouldLoadVideo && !reducedMotion && (
          <video
            ref={videoRef}
            key={videoSrc}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-[center_35%] sm:object-center transition-opacity duration-1000 ease-out",
              videoReady ? "opacity-100" : "opacity-0"
            )}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={IMAGES.heroPosterJpg}
            onLoadedData={handleVideoReady}
            onCanPlay={handleVideoReady}
            aria-hidden
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/70 to-[#0a0c0a]/30 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(6,17,31,0.58),rgba(0,0,0,0.88))]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,164,92,0.2),transparent_45%)]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-transparent to-[rgba(10,8,6,0.25)]" />
      </div>

      <HeroAtmosphere />

      <div className="relative z-10 w-full mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-14 pb-24 sm:pb-28 lg:pb-16 pt-20 sm:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-6 lg:gap-12 items-end lg:items-center">
          <div className="text-center lg:text-left order-1 lg:order-1 min-w-0">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 sm:gap-3 text-champagne/90 text-[11px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-8 border border-champagne/25 bg-ivory/[0.06] backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-sm max-w-full"
            >
              <span className="w-1 h-1 rounded-full bg-champagne shrink-0 animate-pulse motion-reduce:animate-none" aria-hidden />
              <span className="truncate">{t("badge")}</span>
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="gold-line-wide mb-4 sm:mb-8 lg:max-w-md mx-auto lg:mx-0" aria-hidden />
              <h1 className="editorial-headline text-balance text-[clamp(2rem,8.5vw,2.75rem)] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.5rem] text-ivory-warm leading-[1.02] sm:leading-[0.95]">
                {t("titleLine1")}
                <br />
                <span className="italic text-gradient-gold font-light">{t("titleLine2")}</span>
                <br />
                <span className="text-ivory-muted font-light text-[0.6em] sm:text-[0.5em] tracking-[0.02em] not-italic block mt-1.5 sm:mt-3">
                  {t("titleLine3")}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-4 sm:mt-8 text-[15px] sm:text-lg md:text-xl text-ivory-muted font-light leading-[1.65] max-w-xl mx-auto lg:mx-0 px-1"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-6 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              <Button
                href={SITE.phoneHref}
                size="lg"
                ariaLabel={t("ctaCall")}
                className="w-full sm:w-auto min-h-[52px] text-[12px] sm:text-xs"
              >
                {t("ctaCall")}
              </Button>
              <Button
                href="#speisekarte"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] text-[12px] sm:text-xs"
              >
                {t("ctaMenu")}
              </Button>
            </motion.div>

            <motion.ul
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-5 sm:mt-10 flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start"
              aria-label={t("trustAria")}
            >
              {TRUST_BADGE_KEYS.map((key) => (
                <li
                  key={key}
                  className="text-[10px] sm:text-xs text-ivory-dim uppercase tracking-[0.15em] sm:tracking-[0.2em] border border-ivory/10 bg-ivory/[0.05] backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-sm"
                >
                  {trust(key)}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 hidden lg:flex lg:order-2 justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <motion.div
                className="group relative aspect-[4/5] w-full max-w-[420px] ml-auto rounded-sm overflow-hidden food-card-glow border border-champagne/20 animate-float motion-reduce:animate-none bg-midnight-light"
                whileHover={reducedMotion ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <FoodImage
                  src={IMAGES.gyros}
                  alt={signature("gyros.alt")}
                  imageKey="gyros"
                  objectPosition="center 40%"
                  className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.08]"
                  priority
                  sizes={IMAGE_SIZES.card}
                />
                <PremiumImageOverlays variant="hero" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-champagne text-[10px] uppercase tracking-[0.35em] mb-1">
                    {t("grillLabel")}
                  </p>
                  <p className="font-display text-3xl text-ivory-warm italic">{t("grillTitle")}</p>
                </div>
              </motion.div>

              <motion.div
                className="group absolute -left-12 bottom-[18%] w-[38%] max-w-[140px] aspect-square rounded-sm overflow-hidden border border-champagne/30 shadow-editorial bg-midnight-light"
                animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FoodImage
                  src={IMAGES.souvlaki}
                  alt={signature("souvlaki.alt")}
                  imageKey="souvlaki"
                  objectPosition="center 35%"
                  sizes={IMAGE_SIZES.small}
                />
                <PremiumImageOverlays variant="subtle" />
                <p className="absolute bottom-2 left-2 z-10 text-[9px] uppercase tracking-widest text-champagne">
                  {t("souvlakiLabel")}
                </p>
              </motion.div>

              <motion.aside
                initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.85 }}
                className="absolute -right-6 top-[8%] glass-panel-gold rounded-sm p-6 w-56 shadow-editorial"
                aria-label={t("openLabel")}
              >
                <p className="text-champagne text-[10px] uppercase tracking-[0.3em] mb-4">
                  {t("hospitality")}
                </p>
                <p className="text-ivory-dim text-[10px] uppercase tracking-wider mb-1">
                  {t("openLabel")}
                </p>
                <p className="text-ivory text-sm font-light leading-snug">{site("hours")}</p>
                <div className="my-4 h-px bg-champagne/20" />
                <p className="text-olive-light text-xs font-light leading-relaxed">{t("halalNote")}</p>
              </motion.aside>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-5 lg:hidden glass-panel-gold rounded-sm px-4 py-3.5 flex justify-between items-center gap-3"
        >
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-champagne mb-0.5">
              {t("mobileOpen")}
            </p>
            <p className="text-ivory text-sm font-light">11:30 – 22:30</p>
          </div>
          <p className="text-olive-light text-xs text-right shrink-0">{t("mobileHalal")}</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 pointer-events-none"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden
      >
        <span className="text-ivory-dim text-[9px] uppercase tracking-[0.35em]">{t("discover")}</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-champagne/70 to-transparent motion-reduce:hidden"
          animate={reducedMotion ? undefined : { scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
