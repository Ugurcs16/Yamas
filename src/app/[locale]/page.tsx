import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Navbar } from "@/components/layout/Navbar";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { Breakfast } from "@/components/sections/Breakfast";
import { Contact } from "@/components/sections/Contact";
import { HalalHighlight } from "@/components/sections/HalalHighlight";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { MenuSection } from "@/components/sections/MenuSection";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { HeroMediaPreload } from "@/components/seo/HeroMediaPreload";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroMediaPreload />
      <RestaurantJsonLd />
      <Navbar />
      <main className="pb-mobile-cta lg:pb-0 min-w-0 overflow-x-hidden">
        <Hero />
        <Intro />
        <SectionSeparator />
        <SignatureDishes />
        <SectionSeparator />
        <MenuSection />
        <HalalHighlight />
        <SectionSeparator />
        <Breakfast />
        <SectionSeparator />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
