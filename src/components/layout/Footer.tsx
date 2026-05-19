import { SITE } from "@/lib/constants";
import { GreekDivider } from "@/components/ui/GreekDivider";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal border-t border-champagne/15">
      <div className="absolute inset-0 bg-mediterranean-pattern opacity-[0.03]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 md:py-20">
        <GreekDivider className="mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <p className="font-display text-3xl text-ivory font-medium mb-1">{SITE.name}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory-dim mb-4">
              {SITE.subtitle}
            </p>
            <p className="text-ivory-muted text-sm font-light leading-relaxed">
              {SITE.tagline}
            </p>
          </div>
          <address className="not-italic text-sm font-light leading-relaxed space-y-2 text-ivory-muted">
            <p className="text-champagne text-xs uppercase tracking-[0.25em] mb-3">Adresse</p>
            <p className="text-ivory">{SITE.addressStreet}</p>
            <p>{SITE.addressCity}</p>
            <p className="pt-3">
              <a
                href={SITE.phoneHref}
                className="text-champagne hover:text-champagne-light transition-colors font-display text-lg"
              >
                {SITE.phone}
              </a>
            </p>
          </address>
          <div className="text-sm font-light leading-relaxed space-y-2 text-ivory-muted">
            <p className="text-champagne text-xs uppercase tracking-[0.25em] mb-3">
              Öffnungszeiten
            </p>
            <p className="text-ivory">{SITE.hours}</p>
            <p>{SITE.breakfastHours}</p>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory-dim tracking-wide">
          <p>© {year} {SITE.name}. Alle Rechte vorbehalten.</p>
          <nav className="flex gap-8" aria-label="Rechtliches">
            <Link href="/impressum" className="hover:text-champagne transition-colors uppercase tracking-wider">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-champagne transition-colors uppercase tracking-wider">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
