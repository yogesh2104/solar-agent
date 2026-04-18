import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About ELIZ ENERGY | Trusted Solar Company with 4+ Years Experience",
  description:
    "Learn about ELIZ ENERGY – 4+ years of solar sector expertise led by founder Ms. Falguni Rawal. Complete solar solutions for Residential, Commercial, Industrial & Utility sectors across India, including Surya Ghar Yojana subsidy projects.",
  keywords: [
    "about ELIZ ENERGY",
    "solar company India",
    "Falguni Rawal solar",
    "solar company founder",
    "trusted solar company India",
    "Surya Ghar Yojana",
    "solar company Mumbai",
    "4 years solar experience",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/about",
    title: "About ELIZ ENERGY | Trusted Solar Company with 4+ Years Experience",
    description:
      "ELIZ ENERGY – founded by Ms. Falguni Rawal with 4+ years of solar expertise. Serving Residential, Commercial, Industrial & Utility sectors across India.",
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "About ELIZ ENERGY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ELIZ ENERGY | Trusted Solar Company with 4+ Years Experience",
    description:
      "ELIZ ENERGY – 4+ years solar expertise. Complete solutions for all sectors across India.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/about" },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return <AboutClient />;
}
