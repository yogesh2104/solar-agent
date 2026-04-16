import StaticPageHeader from "@/components/landing/StaticPageHeader";
import ContactForm from "@/components/landing/ContactForm";

export const metadata = {
  title: "Contact Enterprise Sales | Suntrix",
  description:
    "Talk to Suntrix about B2B solar panel sourcing, commercial rooftop systems, hybrid-ready design, or rollout planning.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Contact"
        highlight="Enterprise Sales"
        breadcrumb="Contact"
        description="Reach out for panel procurement, commercial solar feasibility, rollout planning, or long-term asset support. We will route you to the right team quickly."
      />
      <ContactForm />
    </div>
  );
}
