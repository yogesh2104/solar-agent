import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <StaticPageHeader
        title="Refund & Cancellation"
        description="Our policies regarding project cancellations and payment refunds."
      />

      <LegalContent>
        <h2>1. Project Cancellation</h2>
        <p>
          You have the right to cancel your solar project agreement within a specific period after signing, as defined by local laws (typically 3 business days). Beyond this period, cancellation may be subject to administrative and engineering fees.
        </p>

        <h2>2. Refund Eligibility</h2>
        <p>
          Refunds of deposits or progress payments are evaluated based on the stage of the project:
        </p>
        <ul>
          <li><strong>Pre-Engineering:</strong> Full refund minus a small administrative fee.</li>
          <li><strong>Post-Engineering/Permitting:</strong> Refund minus the cost of engineering designs and permit application fees.</li>
          <li><strong>Pre-Installation:</strong> Refund minus materials handling and restocking fees if equipment has already been ordered.</li>
        </ul>

        <h2>3. Non-Refundable Items</h2>
        <p>
          Fees paid to third-party government agencies for permits, interconnection applications, or site surveys are non-refundable once the service has been performed.
        </p>

        <h2>4. Refund Process</h2>
        <p>
          To request a refund, please contact your project manager in writing. Approved refunds will be processed within 15-30 business days and issued via the original payment method or check.
        </p>

        <h2>5. Installation Satisfaction</h2>
        <p>
          If you are dissatisfied with our installation service, please notify us immediately. While we do not offer refunds on completed installations (unless mandated by law), we are committed to resolving any technical issues under our performance and workmanship warranties.
        </p>
      </LegalContent>
    </main>
  );
}
