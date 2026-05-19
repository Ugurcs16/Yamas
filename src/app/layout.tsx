import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yamas-clausthal.de"),
  title: "Yamas Clausthal-Zellerfeld | Griechisches Restaurant",
  description:
    "Frische griechische Küche in Clausthal-Zellerfeld. Gyros, Souvlaki, Pita, Salate, Burger, Pasta und halal Hähnchengerichte.",
  keywords: [
    "Yamas",
    "Griechisches Restaurant",
    "Clausthal-Zellerfeld",
    "Gyros",
    "Souvlaki",
    "Halal",
    "Luxus Restaurant",
  ],
  openGraph: {
    title: "Yamas Clausthal-Zellerfeld | Griechisches Restaurant",
    description:
      "Frische griechische Küche in Clausthal-Zellerfeld. Gyros, Souvlaki, Pita, Salate, Burger, Pasta und halal Hähnchengerichte.",
    locale: "de_DE",
    type: "website",
    siteName: "Yamas",
    images: [
      {
        url: "/images/yamas-hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Yamas – Griechisches Restaurant in Clausthal-Zellerfeld",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamas Clausthal-Zellerfeld | Griechisches Restaurant",
    description:
      "Frische griechische Küche in Clausthal-Zellerfeld. Gyros, Souvlaki, Pita, Salate, Burger, Pasta und halal Hähnchengerichte.",
    images: ["/images/yamas-hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
