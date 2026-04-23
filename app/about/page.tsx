import { Metadata } from "next";
import AboutClient from "./AboutClient";
import siteConfig from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.seo.about.title,
  description: siteConfig.seo.about.description,
  keywords: [
    "about ELIZ ENERGY",
    "solar equipment supply India",
    "solar company India",
    "Waaree",
    "Citizen",
    "GoodWe",
    "Surya Ghar Yojana",
    "pan India solar support",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/about",
    title: siteConfig.seo.about.title,
    description: siteConfig.seo.about.description,
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "About ELIZ ENERGY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.about.title,
    description: siteConfig.seo.about.description,
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/about" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return <AboutClient />;
}
