"use client";

import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function MobileCTA() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pt-6 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-[#0a0c0a] via-[#0a0c0a]/95 to-transparent"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 160 }}
    >
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-3 w-full rounded-sm btn-gold-gradient text-midnight-dark font-medium text-xs uppercase tracking-[0.2em] py-4 border border-champagne-light/30"
        aria-label="Jetzt anrufen"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Jetzt anrufen
      </a>
    </motion.div>
  );
}
