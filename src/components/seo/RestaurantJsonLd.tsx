import { SITE } from "@/lib/constants";

export function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    description: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressStreet,
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
