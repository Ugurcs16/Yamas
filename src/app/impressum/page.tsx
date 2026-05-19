import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Yamas Clausthal-Zellerfeld",
  description: "Impressum des Restaurants Yamas in Clausthal-Zellerfeld.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen luxury-section">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-champagne text-xs uppercase tracking-[0.35em] mb-4">Rechtliches</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory font-medium mb-12">
            Impressum
          </h1>

          <div className="space-y-8 text-ivory-muted font-light leading-relaxed">
            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-ivory">
                <strong className="font-medium">{SITE.name}</strong>
                <br />
                {SITE.addressStreet}
                <br />
                {SITE.addressCity}
              </p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">Kontakt</h2>
              <p>
                Telefon:{" "}
                <a href={SITE.phoneHref} className="text-champagne hover:text-champagne-light transition-colors">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          <p className="mt-16 text-sm text-ivory-dim">
            <Link href="/" className="text-champagne hover:text-champagne-light transition-colors uppercase tracking-wider text-xs">
              ← Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
