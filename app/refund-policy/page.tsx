import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent, {
  InfoBox,
  WarningBox,
} from "@/components/landing/LegalContent";
import B2BCTA from "@/components/landing/B2BCTA";

export const metadata = {
  title: "Refund & Cancellation Policy | ELIZ ENERGY - B2B Solar",
  description:
    "Official refund and cancellation policy for ELIZ ENERGY. Transparent terms for commercial solar project engagements and equipment procurement.",
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
      />

      <LegalContent>
        {/* 1 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            1
          </span>
          Project cancellation
        </h2>

        <p>
          Cancellation terms depend on the stage of the project and the specific
          agreement signed between ELIZ ENERGY and the customer.
        </p>

        <InfoBox>
          Early-stage cancellations are treated differently from cancellations
          after engineering, procurement, or installation has begun.
        </InfoBox>

        {/* 2 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            2
          </span>
          Refund eligibility
        </h2>

        <p>
          Refund eligibility depends on the work completed and costs already
          incurred:
        </p>

        <ul>
          <li>
            <strong>Before engineering begins:</strong> Refunds may be possible
            after administrative deductions.
          </li>
          <li>
            <strong>After engineering or permitting:</strong> Design and
            approval costs are typically non-refundable.
          </li>
          <li>
            <strong>After procurement starts:</strong> Equipment and vendor
            commitments may significantly reduce refund eligibility.
          </li>
          <li>
            <strong>After installation or commissioning:</strong> Refunds are
            generally not available.
          </li>
        </ul>

        <WarningBox>
          As the project progresses, refund eligibility decreases due to
          committed costs and executed work.
        </WarningBox>

        {/* 3 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            3
          </span>
          Non-refundable items
        </h2>

        <p>The following are generally non-refundable once incurred:</p>

        <ul>
          <li>Government fees and permits</li>
          <li>Site surveys and inspections</li>
          <li>Engineering and design work</li>
          <li>Third-party vendor costs</li>
        </ul>

        <WarningBox>
          Costs already committed on your behalf cannot be reversed.
        </WarningBox>

        {/* 4 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            4
          </span>
          Refund process
        </h2>

        <p>
          Refund requests must be submitted in writing to your ELIZ ENERGY point
          of contact.
        </p>

        <InfoBox>
          Approved refunds are processed according to the commercial agreement
          and may take standard operational processing time.
        </InfoBox>

        {/* 5 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            5
          </span>
          Service quality concerns
        </h2>

        <p>
          If your concern relates to system performance or service quality after
          installation:
        </p>

        <ul>
          <li>Use official support channels</li>
          <li>Refer to warranty terms in your agreement</li>
          <li>Contact our service team for resolution</li>
        </ul>

        <InfoBox>
          We aim to resolve issues quickly through structured support and
          warranty processes.
        </InfoBox>
      </LegalContent>

      <B2BCTA />
    </>
  );
}
