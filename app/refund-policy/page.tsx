import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Refund & Cancellation Policy | ELIZ ENERGY - B2B Solar",
  description: "Official refund and cancellation policy for ELIZ ENERGY. Transparent terms for commercial solar project engagements and equipment procurement.",
  alternates: { canonical: "https://elizenergy.in/refund-policy" },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <>
      <StaticPageHeader
        title="Refund and"
        highlight="Cancellation"
        breadcrumb="Refund Policy"
        description="This page outlines how cancellation requests and refund considerations are generally handled for commercial solar engagements."
        lastUpdated="April 19, 2026"
      />

      <LegalContent>
        <h2>1. Project cancellation</h2>
        <p>
          Cancellation terms depend on the stage of the commercial engagement and the specific agreement signed between ELIZ ENERGY and the customer. Early-stage cancellations may be treated differently from cancellations after engineering, procurement, or installation activity has begun.
        </p>

        <h2>2. Refund eligibility</h2>
        <p>
          Refund decisions are reviewed based on work already completed, third-party costs incurred, and materials or services committed for the project. Broadly:
        </p>
        <ul>
          <li><strong>Before engineering begins:</strong> Refunds may be possible after administrative deductions where applicable.</li>
          <li><strong>After engineering or permitting begins:</strong> Costs related to design, review, or approvals may be non-refundable.</li>
          <li><strong>After procurement starts:</strong> Ordered equipment, logistics, or vendor commitments may reduce or eliminate refund eligibility.</li>
          <li><strong>After installation or commissioning:</strong> Refunds are generally not available, though warranty and service obligations may still apply.</li>
        </ul>

        <h2>3. Non-refundable items</h2>
        <p>
          Government fees, permit charges, site surveys, engineering outputs, and third-party costs already incurred on your behalf are generally non-refundable once performed or committed.
        </p>

        <h2>4. Refund process</h2>
        <p>
          Refund requests should be submitted in writing to the relevant ELIZ ENERGY contact handling your engagement. Approved refunds, if any, will be processed according to the commercial agreement and operational timelines applicable to that engagement.
        </p>

        <h2>5. Service quality concerns</h2>
        <p>
          If the issue relates to workmanship, system performance, or service delivery after installation, we encourage customers to use the support and warranty channels defined in their commercial agreement so corrective action can be taken promptly.
        </p>

        <h2>6. Contact</h2>
        <p>
          For refund or cancellation questions, email energyeliz@gmail.com or call +91 7700908508.
        </p>
      </LegalContent>
    </>
  );
}
