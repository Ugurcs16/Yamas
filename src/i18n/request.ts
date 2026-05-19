import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  const [messages, menu] = await Promise.all([
    import(`../../messages/${locale}.json`),
    import(`../../messages/menu/${locale}.json`),
  ]);

  return {
    locale,
    messages: {
      ...messages.default,
      menu: menu.default,
    },
  };
});
