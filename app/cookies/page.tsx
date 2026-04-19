import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Cookie Policy | ELIZ ENERGY - B2B Solar Solutions",
  description: "ELIZ ENERGY cookie policy. Understand how we use cookies to improve our digital services for commercial solar partners.",
  alternates: { canonical: "https://elizenergy.in/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <StaticPageHeader
        title="Cookie"
        highlight="Policy"
        breadcrumb="Cookie Policy"
        description="This page explains how ELIZ ENERGY uses cookies and similar technologies to support website performance, analytics, and your browsing experience."
      />

      <LegalContent>
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the website remember preferences, improve usability, and understand how visitors interact with content.
        </p>

        <h2>2. Types of cookies we use</h2>
        <ul>
          <li><strong>Essential cookies:</strong> Needed for core website functionality such as maintaining sessions and security controls.</li>
          <li><strong>Analytics cookies:</strong> Used to understand page usage, navigation flow, and performance so we can improve the public site.</li>
          <li><strong>Functional cookies:</strong> Remember choices like form state or browsing preferences when applicable.</li>
          <li><strong>Marketing cookies:</strong> May be used to understand campaign performance and serve more relevant B2B communications.</li>
        </ul>

        <h2>3. Third-party cookies</h2>
        <p>
          We may use trusted third-party services such as analytics or campaign tools to understand traffic and improve our communication with business audiences. These services may place their own cookies subject to their respective policies.
        </p>

        <h2>4. Managing cookies</h2>
        <p>
          Most browsers let you review, block, or delete cookies through browser settings. Blocking some categories may affect how certain parts of the site function.
        </p>

        <h2>5. Updates to this policy</h2>
        <p>
          We may update this policy from time to time to reflect changes in technology, regulation, or our website operations. Please review this page periodically for the latest version.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about this Cookie Policy can be sent to energyeliz@gmail.com.
        </p>
      </LegalContent>
    </>
  );
}
