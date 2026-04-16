import B2BHero from "@/components/landing/B2BHero";
import B2BAbout from "@/components/landing/B2BAbout";
import B2BProjects from "@/components/landing/B2BProjects";
import B2BTestimonials from "@/components/landing/B2BTestimonials";

export const metadata = {
  title: "Ecoray — B2B Industrial & Commercial Solar Solutions",
  description:
    "Industrial-scale solar integration for modern enterprises. High-yield PV systems, commercial energy storage, and smart power solutions.",
};

export default async function Home() {
  return (
    <>
      <B2BHero />
      <B2BAbout />
      <B2BProjects />
      <B2BTestimonials />
    </>
  );
}
