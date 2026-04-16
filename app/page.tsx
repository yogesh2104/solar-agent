import BlogHighlights from "@/components/landing/BlogHighlights";
import ContactForm from "@/components/landing/ContactForm";
import CTA from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import Innovation from "@/components/landing/Innovation";
import Projects from "@/components/landing/Projects";
import Reviews from "@/components/landing/Reviews";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import { db } from "@/lib/db";

export default async function Home() {
  const latestProjects = await db.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <>
      <Hero />
      <Innovation />
      <Services />
      {/* <Projects projects={latestProjects} /> */}
      {/* <BlogHighlights /> */}
      <WhyChooseUs />
      <Testimonials />
      <Reviews />
      <ContactForm />
      <CTA />
    </>
  );
}
