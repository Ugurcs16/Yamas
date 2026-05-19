import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
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
    title: `${t("privacyTitle")} | Yamas`,
    description: `${t("privacyTitle")} — Yamas Clausthal-Zellerfeld`,
  };
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const p = await getTranslations("privacy");

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen luxury-section">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-champagne text-xs uppercase tracking-[0.35em] mb-4">
            {t("legalEyebrow")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory font-medium mb-12">
            {t("privacyTitle")}
          </h1>

          <div className="space-y-8 text-ivory-muted font-light leading-relaxed">
            <p>{p("intro")}</p>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                {p("controllerTitle")}
              </h2>
              <p className="text-ivory whitespace-pre-line">{p("controllerBody")}</p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                {p("collectionTitle")}
              </h2>
              <p>{p("collectionBody")}</p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                {p("externalTitle")}
              </h2>
              <p>{p("externalBody")}</p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                {p("rightsTitle")}
              </h2>
              <p>{p("rightsBody")}</p>
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
