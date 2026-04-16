import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Cookie Policy | Suntrix",
  description: "This policy explains how Suntrix uses cookies and similar technologies to improve your experience.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#050a14]">
      <StaticPageHeader
        title="Cookie"
        highlight="Policy"
        breadcrumb="Cookie Policy"
        description="This policy explains how we use cookies and similar technologies to improve your browsing experience."
      />

      <LegalContent>
        <h2>1. What are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function correctly (e.g., maintaining your session).</li>
          <li><strong>Analytical Cookies:</strong> Help us understand how visitors interact with our site, which pages are popular, and where we can improve.</li>
          <li><strong>Functional Cookies:</strong> Remember your choices (like region or language) to provide a more personalized experience.</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to enable us to display relevant and targeted B2B advertising.</li>
        </ul>

        <h2>3. Third-Party Cookies</h2>
        <p>
          We may use third-party services like Google Analytics, LinkedIn Insight Tag, and HubSpot to analyze website traffic and measure marketing campaign performance. These services set their own cookies to collect anonymous data about your interactions.
        </p>

        <h2>4. Your Control</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can choose to block all cookies, accept only certain types, or delete them when you close your browser. Please note that disabling essential cookies may affect the functionality of some parts of our website.
        </p>

        <h2>5. Updates to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time to reflect changes in technology or data protection regulations. We encourage you to check this page periodically for updates.
        </p>

        <h2>6. Contact</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at legal@suntrix.in.
        </p>
      </LegalContent>
    </main>
  );
}
