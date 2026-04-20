import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent, {
  InfoBox,
  WarningBox,
} from "@/components/landing/LegalContent";
import B2BCTA from "@/components/landing/B2BCTA";

export const metadata = {
  title: "Cookie Policy | ELIZ ENERGY - B2B Solar Solutions",
  description:
    "ELIZ ENERGY cookie policy. Understand how we use cookies to improve our digital services for commercial solar partners.",
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
        {/* 1 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            1
          </span>
          What are cookies?
        </h2>

        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help improve usability, remember preferences, and
          analyze how visitors interact with content.
        </p>

        <InfoBox>
          Cookies do not typically identify you personally, but they help
          improve your browsing experience.
        </InfoBox>

        {/* 2 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            2
          </span>
          Types of cookies we use
        </h2>

        <ul>
          <li>
            <strong>Essential cookies:</strong> Required for core functionality
            such as security and session management.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand user
            behavior, page performance, and improve the website.
          </li>
          <li>
            <strong>Functional cookies:</strong> Store preferences like form
            inputs or browsing settings.
          </li>
          <li>
            <strong>Marketing cookies:</strong> Used to measure campaign
            performance and deliver relevant B2B communication.
          </li>
        </ul>

        <WarningBox>
          Disabling essential cookies may impact core website functionality.
        </WarningBox>

        {/* 3 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            3
          </span>
          Third-party cookies
        </h2>

        <p>
          We may use trusted third-party services (such as analytics or
          marketing tools) to understand website usage and improve
          communication.
        </p>

        <InfoBox>
          These third-party providers may set their own cookies according to
          their respective privacy policies.
        </InfoBox>

        {/* 4 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            4
          </span>
          Managing cookies
        </h2>

        <p>
          Most browsers allow you to manage cookies through settings. You can:
        </p>

        <ul>
          <li>View stored cookies</li>
          <li>Delete cookies</li>
          <li>Block specific or all cookies</li>
        </ul>

        <WarningBox>
          Blocking certain cookies may affect how parts of the website function.
        </WarningBox>

        {/* 5 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            5
          </span>
          Updates to this policy
        </h2>

        <p>
          We may update this Cookie Policy to reflect changes in technology,
          regulations, or website functionality.
        </p>

        <InfoBox>
          Please review this page periodically to stay informed about updates.
        </InfoBox>
      </LegalContent>

      <B2BCTA />
    </>
  );
}
