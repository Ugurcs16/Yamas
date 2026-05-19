import { SITE } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

export async function RestaurantJsonLd() {
  const site = await getTranslations("site");
  const meta = await getTranslations("meta");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site("name"),
    description: meta("description"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site("addressStreet"),
      addressLocality: "Clausthal-Zellerfeld",
      postalCode: "38678",
      addressCountry: "DE",
    },
    telephone: SITE.phone,
    servesCuisine: "Greek",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "22:30",
      },
    ],
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
