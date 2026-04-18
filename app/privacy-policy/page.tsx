import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Privacy Policy | ELIZ ENERGY Solar Solutions India",
  description: "ELIZ ENERGY privacy policy – how we collect, use, store and protect your information when you contact us for solar installation quotes across India.",
  alternates: { canonical: "https://elizenergy.in/privacy-policy" },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Privacy"
        highlight="Policy"
        breadcrumb="Privacy Policy"
        description="This page explains what information we collect through the website, why we collect it, and how we handle it responsibly."
      />

      <LegalContent>
        <h2>1. Information we collect</h2>
        <p>
          We collect information you provide directly when you contact us, request a quote, or submit an enquiry through the website. This may include:
        </p>
        <ul>
          <li>Name and company information</li>
          <li>Email address and phone number</li>
          <li>Project or site location details</li>
          <li>Energy consumption or project requirement information</li>
          <li>Any additional details you choose to share with us</li>
        </ul>

        <h2>2. How we use your information</h2>
        <p>
          We use submitted information to:
        </p>
        <ul>
          <li>Respond to enquiries and prepare commercial solar proposals</li>
          <li>Support project discussions, feasibility review, and technical follow-up</li>
          <li>Improve our website, communication, and service process</li>
          <li>Send administrative or sales-related responses relevant to your request</li>
          <li>Maintain internal records related to business communications</li>
        </ul>

        <h2>3. When we may share information</h2>
        <p>
          We do not sell personal information. We may share it only when necessary to support your request, comply with law, protect legitimate business interests, or work with trusted service providers operating on our behalf.
        </p>

        <h2>4. Data security</h2>
        <p>
          We use reasonable administrative and technical measures to protect submitted information from unauthorized access, misuse, alteration, or disclosure. No system is completely risk-free, but we work to handle data responsibly.
        </p>

        <h2>5. Your choices</h2>
        <p>
          You may contact us to update or correct your information or to request that we stop sending non-essential communications related to marketing or outreach.
        </p>

        <h2>6. Changes to this policy</h2>
        <p>
          We may revise this Privacy Policy from time to time. Updates will be reflected on this page when changes are made.
        </p>

        <h2>7. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
          <br />
          Email: energyeliz@gmail.com
          <br />
          Address: Thane, Mumbai, Maharashtra
        </p>
      </LegalContent>
    </div>
  );
}
