import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Terms & Conditions | Suntrix",
  description: "Please read these terms and conditions carefully before using Suntrix services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050a14]">
      <StaticPageHeader
        title="Terms &"
        highlight="Conditions"
        breadcrumb="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our B2B solar services."
      />

      <LegalContent>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the services provided by Suntrix Energy Pvt. Ltd., you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </p>

        <h2>2. Services Offered</h2>
        <p>
          Suntrix provides commercial and industrial solar EPC, OPEX/PPA, battery storage, and O&M services. All services are subject to availability and specific project agreements signed between Suntrix and the client.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          Users are responsible for providing accurate information for quotes and installations. You must have the legal authority to authorize work on the property or site provided for solar installation, or must have written authorization from the property owner.
        </p>

        <h2>4. Quotations and Payments</h2>
        <p>
          Quotations provided are estimates and subject to final site inspection and detailed technical assessment. Payment terms, milestone schedules, and project-specific conditions will be outlined in the individual service agreement and Letter of Intent (LOI).
        </p>

        <h2>5. Performance Guarantees</h2>
        <p>
          Where contractually agreed, Suntrix provides P90 generation yield guarantees. Underperformance claims must be substantiated with monitoring data from our SCADA system and will be resolved per the SLA defined in the O&M agreement.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, images, system designs, and technical documentation, is the property of Suntrix Energy Pvt. Ltd. and protected by intellectual property laws.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Suntrix shall not be liable for any indirect, incidental, or consequential damages arising from force majeure events, grid failures, utility curtailments, or factors outside our direct control. Specific energy savings are estimated and not guaranteed as they depend on various external factors.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.
        </p>

        <h2>9. Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or our business interests.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@suntrix.in.
        </p>
      </LegalContent>
    </main>
  );
}
