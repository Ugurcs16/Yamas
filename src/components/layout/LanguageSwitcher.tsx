"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

const localeLabels: Record<Locale, "de" | "en" | "el"> = {
  de: "de",
  en: "en",
  el: "el",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("lang");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t("switch")}
    >
      {routing.locales.map((code, index) => {
        const active = locale === code;
        return (
          <span key={code} className="flex items-center gap-1">
            {index > 0 && (
              <span className="text-ivory-dim/50 text-xs select-none" aria-hidden>
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => router.replace(pathname, { locale: code })}
              className={cn(
                "text-[10px] sm:text-xs uppercase tracking-[0.2em] px-2 py-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-300 touch-manipulation",
                active
                  ? "text-champagne"
                  : "text-ivory-muted hover:text-champagne"
              )}
              aria-current={active ? "true" : undefined}
              lang={code}
            >
              {t(localeLabels[code])}
            </button>
          </span>
        );
      })}
    </div>
  );
}

