import { SetHtmlLang } from "@/components/layout/SetHtmlLang";
import { routing } from "@/i18n/routing";
import { BASE_URL, OPEN_GRAPH_LOCALE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "meta" });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(BASE_URL),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(","),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ...languages,
        "x-default": `${BASE_URL}/de`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: OPEN_GRAPH_LOCALE[locale] ?? "de_DE",
      type: "website",
      siteName: "Yamas",
      url: `${BASE_URL}/${locale}`,
      images: [
        {
          url: IMAGES.heroPosterJpg,
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [IMAGES.heroPosterJpg],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SetHtmlLang />
      {children}
    </NextIntlClientProvider>
  );
}
