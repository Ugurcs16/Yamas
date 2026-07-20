"use client";

import { SITE } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/use-media";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const navBtn =
  "flex flex-1 flex-col items-center justify-center gap-0.5 h-full px-2 py-1.5 rounded-sm text-[10px] uppercase tracking-[0.14em] font-medium transition-colors duration-300 touch-manipulation";

export function MobileCTA() {
  const t = useTranslations("mobileCta");
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      initial={reducedMotion ? false : { y: 64 }}
      animate={{ y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { delay: 0.5, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="navigation"
      aria-label={t("callAria")}
    >
      <div
        className={cn(
          "mx-3 mb-[max(0.4rem,env(safe-area-inset-bottom))] h-16 rounded-sm",
          "border border-champagne/20",
          "bg-[rgba(10,12,10,0.94)] backdrop-blur-md",
          "shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
        )}
      >
        <div className="flex items-stretch h-full divide-x divide-champagne/15 p-1">
          <a
            href={SITE.phoneHref}
            className={cn(navBtn, "text-champagne bg-champagne/10")}
            aria-label={t("callAria")}
          >
            <PhoneIcon />
            <span>{t("call")}</span>
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(navBtn, "text-ivory-muted")}
            aria-label={t("routeAria")}
          >
            <MapIcon />
            <span>{t("route")}</span>
          </a>
          <a
            href="#speisekarte"
            className={cn(navBtn, "text-ivory-muted")}
            aria-label={t("menuAria")}
          >
            <MenuIcon />
            <span>{t("menu")}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
