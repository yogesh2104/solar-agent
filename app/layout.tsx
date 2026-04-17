import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SessionProvider from "@/components/providers/SessionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import B2BNavbar from "@/components/landing/B2BNavbar";
import B2BFooter from "@/components/landing/B2BFooter";
import WhatsAppCTA from "@/components/landing/WhatsAppCTA";
import siteConfig from "@/lib/siteConfig";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.seo.home.title,
  description: siteConfig.seo.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ELIZ ENERGY",
    "image": "https://elizenergy.in/logo.png", // Recommended URL
    "telephone": "+917700908508",
    "email": "energyeliz@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "areaServed": ["Mumbai", "Thane", "Navi Mumbai"],
    "url": "https://elizenergy.in"
  };

  return (
    <html
      lang="en"
      className={`${fontSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans text-foreground">
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
