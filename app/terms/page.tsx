import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent, {
  InfoBox,
  WarningBox,
} from "@/components/landing/LegalContent";
import B2BCTA from "@/components/landing/B2BCTA";

export const metadata = {
  title: "Terms and Conditions | ELIZ ENERGY - B2B Solar Solutions India",
  description:
    "Official terms and conditions for ELIZ ENERGY. Detailed legal framework for our commercial and industrial solar installation services across India.",
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
      />

      <LegalContent>
        {/* 1 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            1
          </span>
          Acceptance of terms
        </h2>

        <p>
          By accessing this website or using services offered by ELIZ ENERGY
          Solar Solutions, you agree to these Terms and Conditions.
        </p>

        <WarningBox>
          If you do not agree with these terms, you should not use this website
          or any related services.
        </WarningBox>

        {/* 2 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            2
          </span>
          Scope of services
        </h2>

        <p>
          ELIZ ENERGY provides commercial and industrial solar-related services,
          including:
        </p>

        <ul>
          <li>Solar panel supply</li>
          <li>EPC (Engineering, Procurement, Construction) support</li>
          <li>Hybrid system planning</li>
          <li>Monitoring and maintenance services</li>
        </ul>

        <InfoBox>
          Final scope, pricing, and deliverables are defined only through signed
          commercial agreements.
        </InfoBox>

        {/* 3 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            3
          </span>
          User responsibilities
        </h2>

        <p>You agree to:</p>

        <ul>
          <li>Provide accurate and complete information</li>
          <li>Share project details responsibly</li>
          <li>Ensure authorization for submitted project sites</li>
        </ul>

        <WarningBox>
          Providing false or unauthorized information may affect project
          evaluation and communication.
        </WarningBox>

        {/* 4 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            4
          </span>
          Quotations and proposals
        </h2>

        <p>
          Website content and initial discussions are for informational purposes
          only.
        </p>

        <ul>
          <li>Subject to technical feasibility review</li>
          <li>Dependent on site conditions</li>
          <li>Subject to final commercial approval</li>
        </ul>

        <InfoBox>
          Only signed agreements define final pricing, scope, and commitments.
        </InfoBox>

        {/* 5 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            5
          </span>
          Performance and savings
        </h2>

        <p>
          Any projected savings or system performance mentioned are estimates
          unless explicitly stated in a signed agreement.
        </p>

        <ul>
          <li>Weather conditions</li>
          <li>Site-specific factors</li>
          <li>Equipment configuration</li>
          <li>Grid behavior</li>
          <li>Operational usage</li>
        </ul>

        <WarningBox>
          Actual results may vary based on real-world conditions beyond our
          control.
        </WarningBox>

        {/* 6 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            6
          </span>
          Intellectual property
        </h2>

        <p>
          All website content including branding, text, graphics, and technical
          materials are the property of ELIZ ENERGY Solar Solutions.
        </p>

        <WarningBox>
          Unauthorized use, reproduction, or distribution is strictly
          prohibited.
        </WarningBox>

        {/* 7 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            7
          </span>
          Limitation of liability
        </h2>

        <p>ELIZ ENERGY is not liable for:</p>

        <ul>
          <li>Indirect or consequential damages</li>
          <li>Assumptions made outside signed agreements</li>
          <li>Service disruptions beyond reasonable control</li>
        </ul>

        <WarningBox>
          Use of the website and services is at your own discretion and risk.
        </WarningBox>

        {/* 8 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            8
          </span>
          Governing law
        </h2>

        <p>These terms are governed by the laws of India.</p>

        <InfoBox>
          Any disputes will fall under the jurisdiction of courts in Mumbai,
          Maharashtra.
        </InfoBox>

        {/* 9 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            9
          </span>
          Updates
        </h2>

        <p>We may revise these terms from time to time.</p>

        <InfoBox>
          Continued use of the website after updates means you accept the
          revised terms.
        </InfoBox>
      </LegalContent>
      <B2BCTA />
    </>
  );
}
