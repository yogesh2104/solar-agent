import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <StaticPageHeader
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />

      <LegalContent>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the services provided by SolarCo, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </p>

        <h2>2. Services Offered</h2>
        <p>
          SolarCo provides solar panel installation, maintenance, and consulting services. All services are subject to availability and specific project agreements.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          Users are responsible for providing accurate information for quotes and installations. You must have the legal authority to authorize work on the property provided for solar installation.
        </p>

        <h2>4. Quotations and Payments</h2>
        <p>
          Quotations provided are estimates and subject to final site inspection. Payment terms will be outlined in the individual service agreement for your project.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on our website and in our marketing materials, including text, graphics, logos, and images, is the property of SolarCo and protected by intellectual property laws.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          SolarCo shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. We do not guarantee specific energy savings as they depend on various external factors.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of California, without regard to its conflict of law principles.
        </p>

        <h2>8. Termination</h2>
        <p>
          We reserve the right to terminate or suspend access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users or our business interests.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@solarco.com.
        </p>
      </LegalContent>
    </main>
  );
}
