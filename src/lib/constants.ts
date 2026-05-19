export const SITE = {
  name: "Yamas",
  subtitle: "Greek Restaurant",
  tagline: "Dein griechisches Restaurant in Clausthal-Zellerfeld",
  phone: "+49 172 4011998",
  phoneHref: "tel:+491724011998",
  address: "Adolph-Roemer-Straße 24, 38678 Clausthal-Zellerfeld",
  addressStreet: "Adolph-Roemer-Straße 24",
  addressCity: "38678 Clausthal-Zellerfeld",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Adolph-Roemer-Straße+24,+38678+Clausthal-Zellerfeld",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.0!2d10.338!3d51.805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ4JzE4LjAiTiAxMMKwMjAnMTYuOCJF!5e0!3m2!1sde!2sde!4v1",
  hours: "Montag – Sonntag: 11:30 – 22:30",
  breakfastHours: "Frühstück: 08:00 – 10:00",
  reservationNote:
    "Reservierungen werden nur telefonisch angenommen. Bitte keine Tischreservierungen per E-Mail.",
} as const;

export const NAV_LINKS = [
  { href: "#start", label: "Start" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#speisekarte", label: "Speisekarte" },
  { href: "#fruehstueck", label: "Frühstück" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const TRUST_BADGES = [
  "Täglich geöffnet",
  "Halal Hähnchengerichte",
  "Frisch zubereitet",
  "Zum Mitnehmen & Liefern",
] as const;

export const BEST_SELLER_NAMES = [
  "Gyros vom Schwein",
  "Hähnchen Gyros",
  "Pita Gyros - Hähnchen",
  "Yamas Hot Smash Burger",
  "Hähnchen Mix Teller",
] as const;

export function isBestSeller(name: string): boolean {
  return (BEST_SELLER_NAMES as readonly string[]).includes(name);
}

export const SIGNATURE_DISHES = [
  {
    title: "Gyros vom Grill",
    description: "Saftig, würzig, klassisch griechisch",
    image: "/images/gyros-premium.jpg",
    alt: "Premium Gyros",
  },
  {
    title: "Souvlaki Spezialitäten",
    description: "Vom Holzkohlegrill, perfekt gegart",
    image: "/images/souvlaki-premium.jpg",
    alt: "Premium Souvlaki",
  },
  {
    title: "Frische Salate",
    description: "Knackig, elegant, hausgemacht",
    image: "/images/salad-premium.jpg",
    alt: "Premium Salate",
  },
  {
    title: "Pita & Street Classics",
    description: "Authentisch, warm, unvergesslich",
    image: "/images/pita-premium.jpg",
    alt: "Premium Pita",
  },
] as const;
