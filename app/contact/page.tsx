import ContactForm from "@/components/landing/ContactForm";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

export const metadata = {
  title: "Contact ELIZ ENERGY | Free Solar Consultation Across India",
  description:
    "Get a free solar consultation from ELIZ ENERGY. We install residential, commercial, industrial & utility solar across India. Surya Ghar Yojana subsidy assistance available. Call or WhatsApp now.",
  keywords: [
    "contact ELIZ ENERGY",
    "solar consultation India",
    "free solar quote",
    "solar company contact Mumbai",
    "Surya Ghar Yojana contact",
    "solar installation enquiry",
    "solar panel quote India",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/contact",
    title: "Contact ELIZ ENERGY | Free Solar Consultation Across India",
    description:
      "Free solar consultation. Residential, commercial, industrial & utility solar across India. Surya Ghar Yojana subsidy assistance.",
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "Contact ELIZ ENERGY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ELIZ ENERGY | Free Solar Consultation Across India",
    description: "Get your free solar consultation from ELIZ ENERGY.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Get Free"
        highlight="Solar Consultation"
        breadcrumb="Contact"
        description="Contact ELIZ ENERGY for solar panel installation in Mumbai. Get a free consultation and quotation today."
      />
      <ContactForm />
    </div>
  );
}
