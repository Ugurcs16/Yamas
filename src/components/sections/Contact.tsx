"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { FoodImage } from "@/components/ui/FoodImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="kontakt" className="luxury-section py-24 md:py-36 relative overflow-hidden">
      {/* Rich CTA background with food */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          <FoodImage
            src="/images/gyros-premium.jpg"
            alt=""
            className="scale-110 blur-[2px]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,10,0.92)_0%,rgba(10,8,6,0.88)_50%,rgba(10,12,10,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(201,164,92,0.18),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="Besuch"
          title="Hunger auf griechisch?"
          subtitle="Ruf uns an, reserviere telefonisch oder finde uns in Clausthal-Zellerfeld"
        />

        {/* Premium CTA band */}
        <FadeIn className="mb-12 md:mb-16">
          <motion.div
            className="relative rounded-sm overflow-hidden border border-champagne/25 shadow-glow-warm p-8 sm:p-12 text-center"
            whileHover={{ borderColor: "rgba(201,164,92,0.45)" }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-ivory/[0.03] to-terracotta/5" />
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-ivory-warm font-light italic mb-3">
                Jetzt telefonisch bestellen
              </p>
              <p className="text-ivory-muted font-light mb-8 max-w-lg mx-auto">
                Frische griechische Küche — zum Mitnehmen, zur Lieferung oder vor Ort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={SITE.phoneHref} size="lg" ariaLabel="Jetzt bestellen">
                  {SITE.phone}
                </Button>
                <Button href={SITE.mapsUrl} variant="secondary" size="lg" external ariaLabel="Route planen">
                  Route planen
                </Button>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <FadeIn>
            <div className="glass-panel-gold rounded-sm p-8 md:p-10 space-y-8 h-full border-champagne/20">
              <ContactBlock title="Adresse">
                <p className="text-ivory font-light">{SITE.addressStreet}</p>
                <p className="text-ivory-muted">{SITE.addressCity}</p>
              </ContactBlock>
              <ContactBlock title="Telefon">
                <a
                  href={SITE.phoneHref}
                  className="font-display text-2xl sm:text-3xl text-champagne hover:text-champagne-light transition-colors"
                >
                  {SITE.phone}
                </a>
              </ContactBlock>
              <ContactBlock title="Öffnungszeiten">
                <p className="text-ivory font-light">{SITE.hours}</p>
                <p className="text-ivory-muted mt-1">{SITE.breakfastHours}</p>
              </ContactBlock>
              <div className="pt-4 border-t border-champagne/15">
                <p className="text-ivory-dim text-[10px] uppercase tracking-wider mb-2">
                  Reservierung
                </p>
                <p className="text-ivory-muted text-sm font-light leading-relaxed">
                  {SITE.reservationNote}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} direction="right">
            <motion.div
              className="rounded-sm overflow-hidden border border-champagne/20 shadow-luxury h-[380px] lg:h-full min-h-[380px]"
              whileHover={{ borderColor: "rgba(201,164,92,0.4)" }}
            >
              <iframe
                title="Yamas Standort auf Google Maps"
                src={SITE.mapsEmbed}
                className="w-full h-full border-0 opacity-85 grayscale-[30%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-champagne text-[10px] uppercase tracking-[0.3em] mb-3">{title}</p>
      <div className="text-ivory-muted font-light leading-relaxed">{children}</div>
    </div>
  );
}
