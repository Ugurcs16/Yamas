"use client";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { NAV_ANCHORS, SITE } from "@/lib/constants";
import { usePrefersReducedMotion } from "@/lib/use-media";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const site = useTranslations("site");
  const reducedMotion = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={reducedMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || mobileOpen
            ? "bg-[rgba(10,12,10,0.92)] backdrop-blur-2xl border-b border-champagne/25 shadow-luxury py-3"
            : "bg-gradient-to-b from-[rgba(10,8,6,0.65)] to-transparent py-4 md:py-6"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 min-w-0"
          aria-label={t("mainNav")}
        >
          <a href="#start" className="group min-w-0 shrink" onClick={closeMobile}>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-ivory font-medium tracking-wide group-hover:text-champagne transition-colors duration-300 truncate">
              {site("name")}
            </p>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-ivory-dim mt-0.5 truncate">
              {site("subtitle")}
            </p>
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {NAV_ANCHORS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-ivory-muted hover:text-champagne transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <LanguageSwitcher />
            <Button href={SITE.phoneHref} size="sm" ariaLabel={t("callAria")}>
              {t("call")}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-1 sm:gap-2 shrink-0">
            <LanguageSwitcher />
            <a
              href={SITE.phoneHref}
              className="touch-target flex items-center justify-center p-2.5 text-champagne hover:text-champagne-light transition-colors rounded-sm border border-champagne/25 bg-champagne/10"
              aria-label={t("callAria")}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <button
              type="button"
              className="touch-target flex items-center justify-center p-2.5 text-ivory"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-panel"
              aria-label={mobileOpen ? t("menuClose") : t("menuOpen")}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.25 }}
              className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm lg:hidden"
              aria-label={t("menuClose")}
              onClick={closeMobile}
            />
            <motion.div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t("mainNav")}
              initial={reducedMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 top-[calc(3.75rem+env(safe-area-inset-top,0px))] z-[56] lg:hidden max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto overscroll-contain border-b border-champagne/20 bg-[rgba(10,12,10,0.97)] backdrop-blur-2xl shadow-luxury"
            >
              <ul className="flex flex-col px-4 py-5 gap-0.5">
                {NAV_ANCHORS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className="flex items-center min-h-[48px] text-sm uppercase tracking-widest text-ivory-muted hover:text-champagne px-2 transition-colors touch-manipulation"
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-5 pt-2 border-t border-champagne/10 flex flex-col gap-4">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Button href={SITE.phoneHref} className="w-full min-h-[52px]" ariaLabel={t("callAria")}>
                  {t("call")}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
