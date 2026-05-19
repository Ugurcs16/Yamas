"use client";

import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
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

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[rgba(10,12,10,0.88)] backdrop-blur-2xl border-b border-champagne/25 shadow-luxury py-3"
          : "bg-gradient-to-b from-[rgba(10,8,6,0.5)] to-transparent py-5 md:py-6"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Hauptnavigation"
      >
        <a href="#start" className="group">
          <p className="font-display text-2xl md:text-3xl text-ivory font-medium tracking-wide group-hover:text-champagne transition-colors duration-300">
            {SITE.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ivory-dim mt-0.5">
            {SITE.subtitle}
          </p>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-ivory-muted hover:text-champagne transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={SITE.phoneHref} size="sm" ariaLabel="Anrufen">
            Anrufen
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-ivory"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
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
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-midnight/95 backdrop-blur-xl border-t border-champagne/15"
          >
            <ul className="flex flex-col px-5 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm uppercase tracking-widest text-ivory-muted hover:text-champagne py-3 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href={SITE.phoneHref} className="w-full" ariaLabel="Anrufen">
                  Anrufen
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
