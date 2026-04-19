import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Terms and Conditions | ELIZ ENERGY - B2B Solar Solutions India",
  description: "Official terms and conditions for ELIZ ENERGY. Detailed legal framework for our commercial and industrial solar installation services across India.",
  alternates: { canonical: "https://elizenergy.in/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <StaticPageHeader
        title="Terms and"
        highlight="Conditions"
        breadcrumb="Terms and Conditions"
        description="Please read these terms carefully before using the ELIZ ENERGY website or engaging with our commercial solar services."
        lastUpdated="April 19, 2026"
      />

      <LegalContent>
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing this website or using services offered by ELIZ ENERGY Solar Solutions, you agree to these Terms and Conditions. If you do not agree, please do not use the website or related services.
        </p>

        <h2>2. Scope of services</h2>
        <p>
          ELIZ ENERGY provides commercial and industrial solar-related services, which may include panel supply, EPC support, hybrid system planning, monitoring, and maintenance. Specific commercial terms are defined only through signed agreements.
        </p>

        <h2>3. User responsibilities</h2>
        <p>
          You agree to provide accurate information when requesting quotes, contacting us, or entering into project discussions. If you submit information about a project site, you confirm that you are authorized to do so or are acting with the relevant approval.
        </p>

        <h2>4. Quotations and proposals</h2>
        <p>
          Website references and initial discussions are informational only. Formal quotations, feasibility assumptions, pricing, and scope are subject to technical review, site conditions, and final commercial confirmation.
        </p>

        <h2>5. Performance and savings</h2>
        <p>
          Unless expressly included in a signed contract, projected savings or system outcomes are estimates. Actual performance depends on multiple variables including weather, site condition, equipment selection, grid behavior, and operating practices.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          Website content, branding, graphics, text, and technical materials belong to ELIZ ENERGY Solar Solutions unless otherwise stated and may not be reproduced or reused without permission.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
          ELIZ ENERGY is not liable for indirect or consequential damages arising from website use, project assumptions interpreted outside signed agreements, or disruptions caused by factors beyond our reasonable control.
        </p>

        <h2>8. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes related to them will be subject to the jurisdiction of the courts of Mumbai, Maharashtra.
        </p>

        <h2>9. Updates</h2>
        <p>
          We may revise these terms from time to time. Continued use of the website after updates are posted constitutes acceptance of the revised version.
        </p>

        <h2>10. Contact information</h2>
        <p>
          Questions about these terms can be sent to energyeliz@gmail.com.
        </p>
      </LegalContent>
    </>
  );
}
