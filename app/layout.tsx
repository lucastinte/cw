import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Rock_Salt, Space_Grotesk } from "next/font/google";

import { siteData } from "@/lib/siteData";

import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const accent = Rock_Salt({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const title = siteData.meta.title;
const description = siteData.meta.description;
const siteUrl = `https://${siteData.meta.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | CW Life",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    siteName: "CW Life",
    description,
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "CW Life",
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
      jobTitle: "Coach y fundador CW Life",
      url: siteUrl,
      telephone: siteData.contact.phone,
      image: `${siteUrl}/og-default.svg`,
      sameAs: [siteUrl],
    },
    {
      "@type": "LocalBusiness",
      name: "CW Life",
      url: siteUrl,
      image: `${siteUrl}/og-default.svg`,
      telephone: siteData.contact.phone,
      email: siteData.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteData.contact.address,
        addressCountry: "AR",
      },
      description: siteData.meta.description,
      priceRange: "$$",
      areaServed: "Servicios online y presencial en Buenos Aires",
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
      <body
        className={`${body.variable} ${heading.variable} ${accent.variable} bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
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
