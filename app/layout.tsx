import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Donate to IRPC - Support Islamic Dawah This Ramadan | Islamic Research & Propagation Center",
  description: "Support IRPC's mission of spreading Islamic knowledge and helping communities. 13+ years of Dawah work, 6500+ Qurans distributed, 70,000+ people helped. Donate this Ramadan and multiply your rewards.",
  keywords: [
    "Islamic charity",
    "Ramadan donation",
    "Dawah support",
    "Islamic NGO",
    "Quran distribution",
    "Islamic education",
    "Laylatul Qadr",
    "IRPC",
    "Islamic Research Propagation Center",
    "charity India",
    "80G tax exemption",
  ],
  authors: [{ name: "Islamic Research & Propagation Center" }],
  creator: "Islamic Research & Propagation Center",
  publisher: "Islamic Research & Propagation Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://irpc.org",
    title: "Support Islamic Dawah This Ramadan - IRPC",
    description: "Help us continue spreading Islamic knowledge and supporting communities. 13+ years of dedicated service with 6500+ Qurans distributed and 70,000+ people benefited.",
    siteName: "Islamic Research & Propagation Center",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "IRPC - Islamic Research & Propagation Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Islamic Dawah This Ramadan - IRPC",
    description: "Help us continue spreading Islamic knowledge and supporting communities in need.",
    images: ["/logo.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.67,
  maximumScale: 5,
  themeColor: "#1E4ED8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Viewport Meta Tag - Set to 67% zoom */}
        <meta name="viewport" content="width=device-width, initial-scale=0.67, maximum-scale=5" />

        {/* Razorpay Script - Preconnect for performance */}
        <link rel="preconnect" href="https://checkout.razorpay.com" />
        <link rel="dns-prefetch" href="https://checkout.razorpay.com" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Islamic Research & Propagation Center",
              alternateName: "IRPC",
              url: "https://irpc.org",
              logo: "https://irpc.org/logo.png",
              description: "Dedicated to spreading Islamic knowledge through Dawah, Quran distribution, and community support",
              foundingDate: "2011",
              nonprofitStatus: "Nonprofit501c3",
              areaServed: "India",
              sameAs: [
                "https://facebook.com/irpc",
                "https://twitter.com/irpc",
                "https://instagram.com/irpc",
              ],
            }),
          }}
        />

        {/* Structured Data for Donation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DonateAction",
              recipient: {
                "@type": "NGO",
                name: "Islamic Research & Propagation Center",
              },
              description: "Support Islamic Dawah and community welfare programs",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
