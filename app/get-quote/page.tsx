import type { Metadata } from "next";
import GetQuoteView from "@/components/landing/GetQuoteView";

export const metadata: Metadata = {
  title: "Get Free Solar Quote | Solar Panel Installation India | ELIZ ENERGY",
  description:
    "Get a free, tailored solar quote from ELIZ ENERGY. Residential, commercial, industrial & utility solar across India. Surya Ghar Yojana subsidy calculation included. Fast 48-hour response.",
  keywords: [
    "solar quote India",
    "free solar quote",
    "solar panel price quote",
    "get solar quote Mumbai",
    "solar installation cost",
    "Surya Ghar Yojana subsidy",
    "commercial solar quote",
    "residential solar quote",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/get-quote",
    title: "Get Free Solar Quote | ELIZ ENERGY",
    description:
      "Free tailored solar quote for homes, businesses, industries & utility projects across India. Fast 48-hour response.",
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "Get Solar Quote – ELIZ ENERGY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free Solar Quote | ELIZ ENERGY",
    description: "Free tailored solar quote. Residential, commercial, industrial & utility sectors.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/get-quote" },
  robots: { index: true, follow: true },
};

export default function GetQuotePage() {
  return <GetQuoteView />;
}
