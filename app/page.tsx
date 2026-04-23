import B2BAbout from "@/components/landing/B2BAbout";
import B2BCTA from "@/components/landing/B2BCTA";
import B2BHero from "@/components/landing/B2BHero";
import B2BProjects from "@/components/landing/B2BProjects";
import PartnerMarquee from "@/components/landing/PartnerMarquee";
// import B2BSolutions from "@/components/landing/B2BSolutions";
import B2BTestimonials from "@/components/landing/B2BTestimonials";
import B2BWhyUs from "@/components/landing/B2BWhyUs";
import HomeFAQ from "@/components/landing/HomeFAQ";
import siteConfig from "@/lib/siteConfig";
import FAQSchema from "@/components/FAQSchema";

export const metadata = {
  title: siteConfig.seo.home.title,
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
  openGraph: {
    type: "website",
    url: "https://elizenergy.in",
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY - Solar equipment supply and support across India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in" },
  robots: { index: true, follow: true },
};

export default function Home() {
  const faqs = siteConfig.faqs.slice(0, 5);

  return (
    <div className="overflow-x-clip">
      <FAQSchema faqs={faqs} />
      <B2BHero />
      <PartnerMarquee />
      <B2BAbout />
      {/* <B2BSolutions initialServices={services} /> */}
      <B2BWhyUs />
      <B2BProjects />
      {/* <B2BTestimonials /> */}
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
