import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaLens — AI Fish Identifier & Aquarium Management App",
  description:
    "Identify fish, plants & algae instantly with AI. Diagnose fish health issues, scan water test kits, track water chemistry, calculate nutrient dosing, and manage your entire aquarium ecosystem. Free for Android & iOS.",
  keywords: [
    "fish identifier app",
    "aquarium app",
    "fish identification",
    "identify my fish",
    "aquarium AI",
    "plant identification",
    "fish health diagnosis",
    "aquarium water test",
    "water test app",
    "tank management",
    "aquarium journal",
    "fish tank app",
    "planted tank fertilizer calculator",
    "aquarium dosing calculator",
    "fish disease identifier",
    "ich treatment",
    "aquarium maintenance tracker",
    "reef tank app",
    "freshwater aquarium",
    "saltwater aquarium",
    "aquarium lighting calculator",
    "filter flow rate calculator",
    "aquarium cost calculator",
    "fish compatibility checker",
    "AquaLens",
  ],
  authors: [{ name: "AquaLens" }],
  alternates: {
    canonical: "https://www.aqualensapp.com",
  },
  openGraph: {
    title: "AquaLens — AI Fish Identifier & Aquarium Management App",
    description:
      "Identify fish, plants & algae instantly. Diagnose health issues, scan water tests with AI, track water chemistry, and manage your entire aquarium ecosystem.",
    url: "https://www.aqualensapp.com",
    siteName: "AquaLens",
    images: [
      {
        url: "/feature-graphic.png",
        width: 1024,
        height: 500,
        alt: "AquaLens — AI-Powered Aquarium Intelligence App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaLens — AI Fish Identifier & Aquarium App",
    description:
      "Identify fish, plants & algae instantly with AI. Diagnose health, scan water tests, calculate dosing. Your complete aquarium toolkit.",
    images: ["/feature-graphic.png"],
  },
  metadataBase: new URL("https://www.aqualensapp.com"),
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AquaLens",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android, iOS",
  description:
    "AI-powered aquarium management app. Identify fish and plants, diagnose health issues, scan water tests, calculate nutrient dosing, and track your entire ecosystem.",
  url: "https://www.aqualensapp.com",
  image: "https://www.aqualensapp.com/feature-graphic.png",
  author: {
    "@type": "Organization",
    name: "AquaLens",
    url: "https://www.aqualensapp.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free with optional Pro subscription",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="canonical" href="https://www.aqualensapp.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
