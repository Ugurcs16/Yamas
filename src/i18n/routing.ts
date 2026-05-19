import { defineRouting } from "next-intl/routing";

export const locales = ["de", "en", "el"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "de",
  localePrefix: "always",
});
