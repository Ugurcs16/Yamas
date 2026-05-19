import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Yamas Clausthal-Zellerfeld",
  description: "Datenschutzerklärung des Restaurants Yamas in Clausthal-Zellerfeld.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen luxury-section">
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-champagne text-xs uppercase tracking-[0.35em] mb-4">Rechtliches</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory font-medium mb-12">
            Datenschutz
          </h1>

          <div className="space-y-8 text-ivory-muted font-light leading-relaxed">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese
              Website dient der Information über unser Restaurant Yamas in
              Clausthal-Zellerfeld.
            </p>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                Verantwortliche Stelle
              </h2>
              <p className="text-ivory">
                Yamas
                <br />
                Adolph-Roemer-Straße 24
                <br />
                38678 Clausthal-Zellerfeld
              </p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                Datenerfassung auf dieser Website
              </h2>
              <p>
                Beim Besuch dieser Website werden durch den Hosting-Anbieter technisch
                notwendige Server-Logfiles erfasst (z. B. IP-Adresse, Browsertyp,
                Uhrzeit des Zugriffs). Eine darüber hinausgehende Erhebung personenbezogener
                Daten erfolgt nicht, sofern Sie uns nicht aktiv kontaktieren (z. B. per
                Telefon).
              </p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                Externe Dienste
              </h2>
              <p>
                Auf unserer Kontaktseite kann eine eingebettete Google-Maps-Karte angezeigt
                werden. Beim Laden der Karte können Daten an Google übermittelt werden.
              </p>
            </div>

            <div>
              <h2 className="text-champagne text-xs uppercase tracking-wider mb-3">
                Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung und Widerspruch gemäß der geltenden Datenschutzgesetze.
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
