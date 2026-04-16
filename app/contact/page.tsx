import StaticPageHeader from "@/components/landing/StaticPageHeader";
import ContactForm from "@/components/landing/ContactForm";

export const metadata = {
  title: "Contact Enterprise Sales | Suntrix",
  description: "Get in touch with Suntrix enterprise solar consultants for B2B inquiries, project assessments, and partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050a14]">
      <StaticPageHeader
        title="Contact"
        highlight="Enterprise Sales"
        breadcrumb="Contact"
        description="Reach out to our B2B solar specialists. We'll respond within 4 business hours with a tailored proposal for your energy needs."
      />
      <ContactForm />
    </main>
  );
}
