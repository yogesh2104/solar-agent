import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Disclaimer | ELIZ ENERGY",
  description: "Important legal notices regarding the information published on the ELIZ ENERGY website.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Disclaimer"
        breadcrumb="Disclaimer"
        description="Important notes about the scope, reliability, and intended use of information shown on this website."
      />

      <LegalContent>
        <h2>1. Accuracy of information</h2>
        <p>
          Information published on the ELIZ ENERGY website is provided for general informational purposes only. While we aim to keep it current and useful, we do not guarantee that all information is complete, error-free, or suitable for every specific business context.
        </p>

        <h2>2. Savings and performance assumptions</h2>
        <p>
          Any references to energy savings, project economics, payback, or generation outcomes are illustrative unless explicitly stated otherwise in a signed commercial proposal. Actual outcomes depend on site conditions, tariff structures, grid behavior, shading, equipment choices, and operational factors.
        </p>

        <h2>3. External links</h2>
        <p>
          Our site may link to third-party resources for convenience. ELIZ ENERGY does not control those sites and is not responsible for their content, availability, or accuracy.
        </p>

        <h2>4. Not professional advice</h2>
        <p>
          Website content should not be treated as legal, tax, financial, or engineering advice for a specific project. Businesses should review project decisions with their own qualified advisors where appropriate.
        </p>

        <h2>5. Website availability</h2>
        <p>
          We do not guarantee uninterrupted access to the site and are not liable for downtime caused by technical issues, third-party services, or circumstances beyond our control.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about this disclaimer can be sent to energyeliz@gmail.com.
        </p>
      </LegalContent>
    </div>
  );
}
