import B2BAbout from "@/components/landing/B2BAbout";
import B2BCTA from "@/components/landing/B2BCTA";
import B2BHero from "@/components/landing/B2BHero";
import B2BProjects from "@/components/landing/B2BProjects";
// import B2BSolutions from "@/components/landing/B2BSolutions";
import B2BTestimonials from "@/components/landing/B2BTestimonials";
import B2BWhyUs from "@/components/landing/B2BWhyUs";
import HomeFAQ from "@/components/landing/HomeFAQ";
import siteConfig from "@/lib/siteConfig";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title:
    "Solar Panel Installation Across India | Best Solar Company | ELIZ ENERGY",
  description:
    "ELIZ ENERGY – Complete solar solutions across India. Residential, commercial, industrial & utility solar. Surya Ghar Yojana subsidy projects, EV charger installation & robotic cleaning for utility plants. 4+ years of solar expertise.",
  keywords: [
    "solar panel installation India",
    "solar company Mumbai",
    "Surya Ghar Yojana",
    "residential solar India",
    "commercial solar installation",
    "industrial solar",
    "utility solar India",
    "EV charger installation",
    "ELIZ ENERGY",
    "rooftop solar India",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in",
    title: "Solar Panel Installation Across India | ELIZ ENERGY",
    description:
      "Complete solar solutions for residential, commercial, industrial & utility sectors. Surya Ghar Yojana subsidy & EV chargers.",
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
    title: "Solar Panel Installation Across India | ELIZ ENERGY",
    description:
      "Complete solar for Residential, Commercial, Industrial & Utility sectors across India.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in" },
  robots: { index: true, follow: true },
};

export default function Home() {
  // Use static FAQs from siteConfig, slice to top 5
  const faqs = siteConfig.faqs.slice(0, 5);

  return (
    <div className="overflow-x-clip">
      <FAQSchema faqs={faqs} />
      <B2BHero />
      <B2BAbout />
      {/* <B2BSolutions initialServices={services} /> */}
      <B2BWhyUs />
      <B2BProjects />
      <B2BTestimonials />
      <HomeFAQ
        faqs={faqs.map((f) => ({
          id: f.id,
          question: f.question,
          answer: f.answer,
        }))}
      />
      <B2BCTA />
    </div>
  );
}
