import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Refund & Cancellation Policy | Suntrix",
  description: "Our policies regarding project cancellations and payment refunds for enterprise solar installations.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050a14]">
      <StaticPageHeader
        title="Refund &"
        highlight="Cancellation"
        breadcrumb="Refund Policy"
        description="Our policies regarding project cancellations and payment refunds for enterprise solar installations."
      />

      <LegalContent>
        <h2>1. Project Cancellation</h2>
        <p>
          You have the right to cancel your solar project agreement within a specific period after signing, as defined by applicable laws (typically 3–7 business days). Beyond this period, cancellation may be subject to administrative, engineering, and procurement fees proportional to the project stage.
        </p>

        <h2>2. Refund Eligibility</h2>
        <p>
          Refunds of deposits or progress payments are evaluated based on the current stage of the project:
        </p>
        <ul>
          <li><strong>Pre-Engineering:</strong> Full refund minus a small administrative fee.</li>
          <li><strong>Post-Engineering / Permitting:</strong> Refund minus the cost of engineering designs and permit application fees incurred.</li>
          <li><strong>Post-Procurement:</strong> Refund minus materials handling, restocking fees, and any equipment ordered on your behalf.</li>
          <li><strong>Post-Installation:</strong> No refund is applicable once installation has been completed and commissioned.</li>
        </ul>

        <h2>3. Non-Refundable Items</h2>
        <p>
          Fees paid to third-party government agencies for permits, DISCOM interconnection applications, net metering registrations, or site surveys are non-refundable once the service has been performed.
        </p>

        <h2>4. Refund Process</h2>
        <p>
          To request a refund, please contact your designated project manager in writing at finance@suntrix.in. Approved refunds will be processed within 15–30 business days and issued via the original payment method (RTGS/NEFT) or as mutually agreed.
        </p>

        <h2>5. Installation Satisfaction</h2>
        <p>
          If you are dissatisfied with our installation service, please notify us within 30 days of commissioning. While we do not offer refunds on completed installations, we are committed to resolving any technical issues under our performance and workmanship warranties as specified in the O&M agreement.
        </p>

        <h2>6. Contact</h2>
        <p>
          For any refund-related queries, write to finance@suntrix.in or call +91 98765 43210.
        </p>
      </LegalContent>
    </main>
  );
}
