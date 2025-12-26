import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const title = "Cristian Wosniak Fitness | CW Life";
const description =
  "Entrenamiento personalizado online o presencial para transformar tu cuerpo, tus hábitos y tu mentalidad. Planes premium listos para convertir por WhatsApp.";
const siteUrl = "https://www.cristianwosniakcoach.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Cristian Wosniak Fitness",
  },
  description,
  keywords: [
    "entrenamiento personalizado",
    "coach fitness",
    "Buenos Aires",
    "programa online",
    "cambio de habitos",
    "CW Life",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    siteName: "Cristian Wosniak Fitness",
    description,
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Cristian Wosniak Fitness",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Cristian Wosniak",
      jobTitle: "Coach y personal trainer",
      url: siteUrl,
      telephone: "+54 9 11 5555 5555",
      image: `${siteUrl}/og-default.svg`,
      sameAs: [siteUrl],
    },
    {
      "@type": "LocalBusiness",
      name: "Cristian Wosniak Fitness",
      url: siteUrl,
      image: `${siteUrl}/og-default.svg`,
      telephone: "+54 9 11 5555 5555",
      email: "hola@cristianwosniakcoach.online",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. del Libertador 1234",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      priceRange: "$$",
      areaServed: "Servicios online y presencial en Buenos Aires",
      description:
        "Entrenamiento personalizado, planes de nutrición y programa Reconstruirte.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${display.variable} min-h-screen bg-background text-foreground antialiased`}>
        {children}
        <Script
          id="schema-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
