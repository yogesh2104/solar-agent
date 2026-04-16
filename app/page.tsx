import B2BAbout from "@/components/landing/B2BAbout";
import B2BCTA from "@/components/landing/B2BCTA";
import B2BHero from "@/components/landing/B2BHero";
import B2BProjects from "@/components/landing/B2BProjects";
import B2BSolutions from "@/components/landing/B2BSolutions";
import B2BTestimonials from "@/components/landing/B2BTestimonials";
import B2BWhyUs from "@/components/landing/B2BWhyUs";

export const metadata = {
  title: "Suntrix | B2B Solar Panels and Commercial Solar Systems",
  description:
    "Suntrix supplies solar panels and delivers commercial solar systems for manufacturers, warehouses, campuses, and channel partners seeking lower energy cost and bankable B2B execution.",
};

export default async function Home() {
  return (
    <div className="overflow-x-clip">
      <B2BHero />
      <B2BAbout />
      <B2BSolutions />
      <B2BWhyUs />
      <B2BProjects />
      <B2BTestimonials />
      <B2BCTA />
    </div>
  );
}
