import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import SessionProvider from "@/components/providers/SessionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import B2BNavbar from "@/components/landing/B2BNavbar";
import B2BFooter from "@/components/landing/B2BFooter";
import WhatsAppCTA from "@/components/landing/WhatsAppCTA";
import siteConfig from "@/lib/siteConfig";
import "./globals.css";
import type { Viewport } from 'next';


const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elizenergy.in"),
  title: {
    default: siteConfig.seo.home.title,
    template: "%s | ELIZ ENERGY",
  },
  description: siteConfig.seo.home.description,
  keywords: [
    "solar equipment supply India",
    "solar panels India",
    "solar inverters",
    "solar batteries",
    "mounting structures solar",
    "BoS components",
    "cabling accessories",
    "EV charger India",
    "robotic cleaning utility solar",
    "Surya Ghar Yojana",
    "Waaree",
    "Citizen",
    "GoodWe",
  ],
  authors: [{ name: "ELIZ ENERGY", url: "https://elizenergy.in" }],
  creator: "ELIZ ENERGY",
  publisher: "ELIZ ENERGY",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://elizenergy.in",
    siteName: "ELIZ ENERGY",
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY – Solar Solutions Across India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
    images: ["/Logo1.png"],
    creator: "@elizenergy",
  },
  alternates: {
    canonical: "https://elizenergy.in",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SolarEnergyCompany"],
    name: "ELIZ ENERGY",
    alternateName: "ELIZ ENERGY Solar Solutions",
    description:
      "ELIZ ENERGY provides complete solar solutions across India – Residential, Commercial, Industrial & Utility. Specialists in Surya Ghar Yojana subsidy projects, EV charger installation, and robotic cleaning for utility solar plants.",
    logo: "https://elizenergy.in/Logo1.png",
    image: "https://elizenergy.in/Logo1.png",
    telephone: "+917208244097",
    email: "energyeliz@gmail.com",
    foundingDate: "2025",
    priceRange: "₹₹",
    openingHours: "Mo-Sa 11:00-17:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thane",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400000",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.2183",
      longitude: "72.9781",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "State", name: "Madhya Pradesh" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "State", name: "Delhi" },
      { "@type": "State", name: "Haryana" },
      { "@type": "State", name: "Punjab" },
      { "@type": "State", name: "Himachal Pradesh" },
      { "@type": "State", name: "Uttarakhand" },
      { "@type": "State", name: "Jammu & Kashmir" },
      { "@type": "State", name: "Ladakh" },
      { "@type": "State", name: "Chandigarh" },
      { "@type": "State", name: "Sikkim" },
      { "@type": "State", name: "Arunachal Pradesh" },
      { "@type": "State", name: "Assam" },
      { "@type": "State", name: "Meghalaya" },
      { "@type": "State", name: "Manipur" },
      { "@type": "State", name: "Mizoram" },
      { "@type": "State", name: "Tripura" },
      { "@type": "State", name: "Nagaland" },
      { "@type": "State", name: "West Bengal" },
      { "@type": "State", name: "Jharkhand" },
      { "@type": "State", name: "Bihar" },
      { "@type": "State", name: "Odisha" },
      { "@type": "State", name: "Chhattisgarh" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "State", name: "Kerala" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "State", name: "Goa" },
      { "@type": "State", name: "Andaman and Nicobar Islands" },
      { "@type": "State", name: "Lakshadweep" },
      { "@type": "State", name: "Puducherry" },
      { "@type": "State", name: "Daman and Diu" },
      { "@type": "State", name: "Dadra and Nagar Haveli" },
      { "@type": "State", name: "Chandigarh" },
      { "@type": "Country", name: "India" },
    ],
    founder: {
      "@type": "Person",
      name: "Ms. Falguni Rawal",
      jobTitle: "Founder & Lead Consultant",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar & Clean Energy Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Solar Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Solar Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Solar Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Utility-Scale Solar" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "EV Charger Installation" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Surya Ghar Yojana Subsidy Projects",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Robotic Cleaning for Utility Solar",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Solar AMC & Maintenance" },
        },
      ],
    },
    url: "https://elizenergy.in",
    sameAs: ["https://elizenergy.in"],
  };

  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col font-sans text-foreground"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SessionProvider>
          <SmoothScroll>
            <B2BNavbar />
            <main className="grow">{children}</main>
            <B2BFooter />
            <WhatsAppCTA />
          </SmoothScroll>
        </SessionProvider>
      </body>
    </html>
  );
}
