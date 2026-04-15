import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <StaticPageHeader
        title="Cookie Policy"
        description="This policy explains how we use cookies and similar technologies to improve your experience."
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
          <li><strong>Functional Cookies:</strong> Remember your choices (like font size or language) to provide a more personalized experience.</li>
        </ul>

        <h2>3. Third-Party Cookies</h2>
        <p>
          We may use third-party services like Google Analytics to analyze website traffic. These services set their own cookies to collect anonymous data about your interactions.
        </p>

        <h2>4. Your Control</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can choose to block all cookies, accept only certain types, or delete them when you close your browser. Please note that disabling cookies may affect the functionality of some parts of our website.
        </p>

        <h2>5. Updates to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time to reflect changes in technology or data protection regulations. We encourage you to check this page periodically for updates.
        </p>
      </LegalContent>
    </main>
  );
}
