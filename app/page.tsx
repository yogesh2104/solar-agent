import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Projects from "@/components/landing/Projects";
import BlogHighlights from "@/components/landing/BlogHighlights";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Testimonials from "@/components/landing/Testimonials";
import Reviews from "@/components/landing/Reviews";
import ContactForm from "@/components/landing/ContactForm";
import CTA from "@/components/landing/CTA";
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
      <Stats />
      <Services />
      <Projects projects={latestProjects} />
      <BlogHighlights />
      <WhyChooseUs />
      <Testimonials />
      <Reviews />
      <ContactForm />
      <CTA />
    </>
  );
}
