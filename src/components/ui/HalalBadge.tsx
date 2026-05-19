"use client";

import { useTranslations } from "next-intl";

export function HalalBadge() {
  const t = useTranslations("menuSection");

  return (
    <span className="inline-flex items-center rounded-sm border border-olive/40 bg-olive/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-olive-light">
      {t("halal")}
    </span>
  );
}

export function BestSellerBadge() {
  const t = useTranslations("menuSection");

  return (
    <span className="inline-flex items-center rounded-sm border border-champagne/40 bg-champagne/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-champagne">
      {t("bestseller")}
    </span>
  );
}
