import ContactForm from "@/components/landing/ContactForm";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: siteConfig.seo.contact.title,
  description: siteConfig.seo.contact.description,
  keywords: [
    "contact ELIZ ENERGY",
    "solar equipment India",
    "solar support India",
    "Waaree",
    "Citizen",
    "GoodWe",
    "Surya Ghar Yojana contact",
    "solar equipment supply",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/contact",
    title: siteConfig.seo.contact.title,
    description: siteConfig.seo.contact.description,
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
    title: siteConfig.seo.contact.title,
    description: siteConfig.seo.contact.description,
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7faf9] pb-20">
      <StaticPageHeader
        title="Contact"
        highlight="ELIZ ENERGY"
        breadcrumb="Contact"
        description="Call between 11am and 5pm for solar equipment, supply, and support across India."
      />
      <ContactForm />
    </div>
  );
}
