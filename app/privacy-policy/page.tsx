import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <StaticPageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <LegalContent>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you fill out a form, request a quote, or communicate with us. This may include:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Service address</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide and improve our solar services</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you quotes, technical notices, and administrative messages</li>
          <li>Communicate with you about products, services, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not share your personal information with third parties except:
        </p>
        <ul>
          <li>With your consent</li>
          <li>To fulfill the purpose for which you provided it (e.g., with installation partners)</li>
          <li>To comply with legal obligations</li>
          <li>To protect the rights and safety of SolarCo and our users</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You may update or correct your information at any time by contacting us. You can also opt out of receiving promotional communications from us by following the instructions in those messages.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: privacy@solarco.com
          <br />
          Address: 123 Solar Way, Sunshine City, CA 94101
        </p>
      </LegalContent>
    </main>
  );
}
