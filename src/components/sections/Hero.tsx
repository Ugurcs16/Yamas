"use client";

import { HeroAtmosphere } from "@/components/ui/Atmosphere";
import { Button } from "@/components/ui/Button";
import { FoodImage } from "@/components/ui/FoodImage";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [posterVisible, setPosterVisible] = useState(true);

  return (
    <section
      id="start"
      className="relative min-h-[100svh] flex flex-col justify-end lg:justify-center overflow-hidden"
      aria-label="Willkommen bei Yamas"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/yamas-hero-poster.jpg"
          onPlay={() => setPosterVisible(false)}
        >
          <source src="/videos/yamas-hero.mp4" type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${posterVisible ? "opacity-100" : "opacity-40"}`}
        >
          <Image
            src="/images/yamas-hero-poster.jpg"
            alt=""
            fill
            className="object-cover scale-105"
            priority
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,8,6,0.88)_0%,rgba(20,16,12,0.72)_38%,rgba(8,10,8,0.55)_62%,rgba(0,0,0,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(201,164,92,0.28),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_85%_50%,rgba(184,92,56,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-transparent to-[rgba(10,8,6,0.4)]" />
      </div>

      <HeroAtmosphere />

      <div className="relative z-10 w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-14 pb-28 sm:pb-32 lg:pb-16 pt-24 sm:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-6 xl:gap-12 items-end lg:items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="inline-flex items-center gap-3 text-champagne/90 text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-6 sm:mb-8 border border-champagne/25 bg-ivory/[0.05] backdrop-blur-md px-4 py-2.5 rounded-sm"
            >
              <span className="w-1 h-1 rounded-full bg-champagne animate-pulse" aria-hidden />
              Yamas Clausthal-Zellerfeld
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="gold-line-wide mb-6 sm:mb-8 lg:max-w-md" aria-hidden />
              <h1 className="editorial-headline text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.5rem] text-ivory-warm">
                Griechischer
                <br />
                <span className="italic text-gradient-gold font-light">Genuss.</span>
                <br />
                <span className="text-ivory-muted font-light text-[0.55em] sm:text-[0.5em] tracking-[0.02em] not-italic block mt-2 sm:mt-3">
                  Elegant serviert.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.5 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-ivory-muted font-light leading-[1.7] max-w-xl mx-auto lg:mx-0"
            >
              Yamas bringt mediterrane Wärme, frische Küche und authentische
              griechische Spezialitäten nach Clausthal-Zellerfeld.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button href={SITE.phoneHref} size="lg" ariaLabel="Jetzt anrufen">
                Jetzt anrufen
              </Button>
              <Button href="#speisekarte" variant="secondary" size="lg">
                Speisekarte entdecken
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-8 sm:mt-10 flex flex-wrap gap-2 justify-center lg:justify-start"
              aria-label="Unsere Vorteile"
            >
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="text-[10px] sm:text-xs text-ivory-dim uppercase tracking-[0.2em] border border-ivory/10 bg-ivory/[0.04] backdrop-blur-sm px-3 py-2 rounded-sm"
                >
                  {badge}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <motion.div
                className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto lg:mr-0 lg:ml-auto rounded-sm overflow-hidden food-card-glow border border-champagne/20 animate-float"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <FoodImage
                  src="/images/gyros-premium.jpg"
                  alt="Gyros vom Grill bei Yamas"
                  priority
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/20 to-transparent opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-transparent to-terracotta/10 mix-blend-soft-light" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-champagne text-[10px] uppercase tracking-[0.35em] mb-1">
                    Vom Grill
                  </p>
                  <p className="font-display text-2xl sm:text-3xl text-ivory-warm italic">
                    Gyros & Souvlaki
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 sm:-left-8 lg:-left-12 bottom-[18%] w-[38%] max-w-[140px] aspect-square rounded-sm overflow-hidden border border-champagne/30 shadow-editorial hidden sm:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FoodImage src="/images/souvlaki-premium.jpg" alt="Souvlaki" sizes="140px" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                <p className="absolute bottom-2 left-2 text-[9px] uppercase tracking-widest text-champagne">
                  Souvlaki
                </p>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.85 }}
                className="absolute -right-2 sm:right-0 lg:-right-6 top-[8%] glass-panel-gold rounded-sm p-5 sm:p-6 w-52 sm:w-56 shadow-editorial hidden md:block"
                aria-label="Öffnungszeiten"
              >
                <p className="text-champagne text-[10px] uppercase tracking-[0.3em] mb-4">
                  Gastfreundschaft
                </p>
                <p className="text-ivory-dim text-[10px] uppercase tracking-wider mb-1">
                  Geöffnet
                </p>
                <p className="text-ivory text-sm font-light leading-snug">{SITE.hours}</p>
                <div className="my-4 h-px bg-champagne/20" />
                <p className="text-olive-light text-xs font-light leading-relaxed">
                  Alle Hähnchengerichte sind halal.
                </p>
              </motion.aside>

              <motion.div
                className="absolute -top-4 right-[20%] w-24 h-24 rounded-full blur-3xl bg-ivory/5 pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                aria-hidden
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 md:hidden glass-panel-gold rounded-sm px-5 py-4 flex justify-between items-center gap-4"
        >
          <div>
            <p className="text-[10px] uppercase tracking-widest text-champagne mb-0.5">
              Heute geöffnet
            </p>
            <p className="text-ivory text-sm font-light">11:30 – 22:30</p>
          </div>
          <p className="text-olive-light text-xs text-right">Halal Hähnchen</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-hidden
      >
        <span className="text-ivory-dim text-[9px] uppercase tracking-[0.35em]">
          Entdecken
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-champagne/70 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
