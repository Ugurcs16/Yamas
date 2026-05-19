import { IMAGES } from "@/lib/images";

/** Locale-independent business data */
export const SITE = {
  name: "Yamas",
  phone: "+49 172 4011998",
  phoneHref: "tel:+491724011998",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Adolph-Roemer-Straße+24,+38678+Clausthal-Zellerfeld",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.0!2d10.338!3d51.805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ4JzE4LjAiTiAxMMKwMjAnMTYuOCJF!5e0!3m2!1sde!2sde!4v1",
} as const;

export const NAV_ANCHORS = [
  { href: "#start", key: "start" },
  { href: "#ueber-uns", key: "about" },
  { href: "#speisekarte", key: "menu" },
  { href: "#fruehstueck", key: "breakfast" },
  { href: "#kontakt", key: "contact" },
] as const;

export const TRUST_BADGE_KEYS = ["daily", "halal", "fresh", "takeaway"] as const;

export const SIGNATURE_DISH_KEYS = ["gyros", "souvlaki", "salad", "pita"] as const;

export const SIGNATURE_DISH_IMAGES = {
  gyros: {
    image: IMAGES.gyros,
    objectPosition: "center 40%",
  },
  souvlaki: {
    image: IMAGES.souvlaki,
    objectPosition: "center 35%",
  },
  salad: {
    image: IMAGES.salad,
    objectPosition: "center 45%",
  },
  pita: {
    image: IMAGES.pita,
    objectPosition: "center 50%",
  },
} as const;

export const BASE_URL = "https://yamas-clausthal.de";

export const OPEN_GRAPH_LOCALE: Record<string, string> = {
  de: "de_DE",
  en: "en_GB",
  el: "el_GR",
};
