import ContactForm from "@/components/landing/ContactForm";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: siteConfig.seo.contact.title,
  description: siteConfig.seo.contact.description,
};

export default function ContactPage() {
  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Get Free"
        highlight="Solar Consultation"
        breadcrumb="Contact"
        description="Contact ELIZ ENERGY for solar panel installation in Mumbai. Get a free consultation and quotation today."
      />
      <ContactForm />
    </div>
  );
}
