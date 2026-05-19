"use client";

import { GreekDivider } from "@/components/ui/GreekDivider";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/constants";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const site = useTranslations("site");
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal border-t border-champagne/15">
      <div className="absolute inset-0 bg-mediterranean-pattern opacity-[0.03]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-20">
        <GreekDivider className="mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="font-display text-3xl text-ivory font-medium mb-1">{site("name")}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory-dim mb-4">
              {site("subtitle")}
            </p>
            <p className="text-ivory-muted text-sm font-light leading-relaxed">
              {site("tagline")}
            </p>
          </div>
          <address className="not-italic text-sm font-light leading-relaxed space-y-2 text-ivory-muted">
            <p className="text-champagne text-xs uppercase tracking-[0.25em] mb-3">{t("address")}</p>
            <p className="text-ivory">{site("addressStreet")}</p>
            <p>{site("addressCity")}</p>
            <p className="pt-3">
              <a
                href={SITE.phoneHref}
                className="text-champagne hover:text-champagne-light transition-colors font-display text-lg"
              >
                {SITE.phone}
              </a>
            </p>
          </address>
          <div className="text-sm font-light leading-relaxed space-y-2 text-ivory-muted">
            <p className="text-champagne text-xs uppercase tracking-[0.25em] mb-3">
              {t("hours")}
            </p>
            <p className="text-ivory">{site("hours")}</p>
            <p>{site("breakfastHours")}</p>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory-dim tracking-wide">
          <p>
            © {year} {site("name")}. {t("rights")}
          </p>
          <nav className="flex gap-8" aria-label={t("legal")}>
            <Link
              href="/impressum"
              className="hover:text-champagne transition-colors uppercase tracking-wider"
            >
              {t("impressum")}
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-champagne transition-colors uppercase tracking-wider"
            >
              {t("privacy")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
