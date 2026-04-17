import B2BAbout from "@/components/landing/B2BAbout";
import B2BCTA from "@/components/landing/B2BCTA";
import B2BHero from "@/components/landing/B2BHero";
import B2BProjects from "@/components/landing/B2BProjects";
import B2BSolutions from "@/components/landing/B2BSolutions";
import B2BTestimonials from "@/components/landing/B2BTestimonials";
import B2BWhyUs from "@/components/landing/B2BWhyUs";
import HomeFAQ from "@/components/landing/HomeFAQ";
import { db } from "@/lib/db";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: "Best Solar Company in Mumbai | ELIZ ENERGY Solar Solutions",
  description:
    "ELIZ ENERGY is a leading solar company in Mumbai providing reliable, cost-effective, and sustainable solar solutions for homes and businesses.",
};

export default async function SolarCompanyMumbai() {
  const [faqs, services] = await Promise.all([
    db.fAQ.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      take: 6,
    }),
    db.service.findMany({
      orderBy: { createdAt: "asc" },
    }),
  ]);

  return (
    <div className="overflow-x-clip">
      <B2BHero />
      <B2BAbout />
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
