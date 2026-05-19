import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: `${t("impressumTitle")} | Yamas`,
    description: `${t("impressumTitle")} — Yamas Clausthal-Zellerfeld`,
  };
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const site = await getTranslations("site");

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen luxury-section">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-champagne text-xs uppercase tracking-[0.35em] mb-4">
            {t("legalEyebrow")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory font-medium mb-12">
            {t("impressumTitle")}
          </h1>

          <div className="space-y-8 text-ivory-muted font-light leading-relaxed">
            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                {t("tmg")}
              </h2>
              <p className="text-ivory">
                <strong className="font-medium">{site("name")}</strong>
                <br />
                {site("addressStreet")}
                <br />
                {site("addressCity")}
              </p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                {t("contactLabel")}
              </h2>
              <p>
                {t("phoneLabel")}:{" "}
                <a
                  href={SITE.phoneHref}
                  className="text-champagne hover:text-champagne-light transition-colors"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          <p className="mt-16 text-sm text-ivory-dim">
            <Link
              href="/"
              className="text-champagne hover:text-champagne-light transition-colors uppercase tracking-wider text-xs"
            >
              {t("backHome")}
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
