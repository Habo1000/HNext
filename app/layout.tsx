import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hnext-dev.com"),

  title: "HNext, Sites web sur-mesure pour indépendants et entreprises",

  description:
    "Développement de sites web modernes et performants : sites vitrines, réservation en ligne, paiement Stripe. Basé en Alsace, projets sur-mesure.",

  keywords: [
    "développeur web",
    "site web sur-mesure",
    "Next.js",
    "développeur freelance Alsace",
    "site réservation en ligne",
  ],

  openGraph: {
    title: "HNext, Sites web sur-mesure",
    description:
      "Développement de sites web modernes et performants pour indépendants et entreprises.",
    url: "https://hnext-dev.com",
    siteName: "HNext",
    images: [
      {
        url: "/logo/logo_h_navbar.png",
        width: 1200,
        height: 630,
        alt: "HNext, Sites web sur-mesure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HNext — Sites web sur-mesure",
    description: "Développement de sites web modernes et performants.",
    images: ["/logo/logo_h_navbar.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://hnext-dev.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        sora.variable,
        manrope.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
