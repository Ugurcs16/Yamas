import { Navbar } from "@/components/layout/Navbar";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Footer } from "@/components/layout/Footer";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuSection } from "@/components/sections/MenuSection";
import { HalalHighlight } from "@/components/sections/HalalHighlight";
import { Breakfast } from "@/components/sections/Breakfast";
import { Contact } from "@/components/sections/Contact";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";

export default function HomePage() {
  return (
    <>
      <RestaurantJsonLd />
      <Navbar />
      <main className="pb-24 lg:pb-0">
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
