import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("legal");

  return (
    <main className="min-h-screen luxury-section flex flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl text-ivory mb-4">404</h1>
      <Link
        href="/"
        className="text-champagne hover:text-champagne-light transition-colors uppercase tracking-wider text-xs"
      >
        {t("backHome")}
      </Link>
    </main>
  );
}
