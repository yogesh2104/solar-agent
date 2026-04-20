import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent, {
  InfoBox,
  WarningBox,
} from "@/components/landing/LegalContent";
import B2BCTA from "@/components/landing/B2BCTA";

export const metadata = {
  title: "Privacy Policy | ELIZ ENERGY - B2B Solar India",
  description:
    "ELIZ ENERGY privacy policy. Learn how we handle project data and personal information for our commercial and industrial solar clients in India.",
  alternates: { canonical: "https://elizenergy.in/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <StaticPageHeader
        title="Privacy"
        highlight="Policy"
        breadcrumb="Privacy Policy"
        description="This page explains what information we collect through the website, why we collect it, and how we handle it responsibly."
      />

      <LegalContent>
        {/* 1 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            1
          </span>
          Information we collect
        </h2>

        <p>
          We collect information you provide directly when you contact us,
          request a quote, or submit an enquiry through the website.
        </p>

        <InfoBox>
          This includes only the information necessary to understand your solar
          requirements and respond effectively.
        </InfoBox>

        <ul>
          <li>Name and company information</li>
          <li>Email address and phone number</li>
          <li>Project or site location details</li>
          <li>Energy consumption or project requirements</li>
          <li>Any additional details you choose to share</li>
        </ul>

        {/* 2 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            2
          </span>
          How we use your information
        </h2>

        <p>We use your information to:</p>

        <ul>
          <li>Respond to enquiries and prepare solar proposals</li>
          <li>Support project discussions and technical evaluation</li>
          <li>Improve website experience and communication</li>
          <li>Send relevant administrative or sales responses</li>
          <li>Maintain internal business records</li>
        </ul>

        <InfoBox>
          We only use your data for business communication relevant to your
          request — no unnecessary usage.
        </InfoBox>

        {/* 3 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            3
          </span>
          When we may share information
        </h2>

        <WarningBox>
          We do NOT sell your personal information to third parties.
        </WarningBox>

        <p>We may share information only when necessary to:</p>

        <ul>
          <li>Support your project or service request</li>
          <li>Comply with legal obligations</li>
          <li>Protect business and user interests</li>
          <li>Work with trusted service partners</li>
        </ul>

        {/* 4 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            4
          </span>
          Data security
        </h2>

        <p>
          We implement reasonable administrative and technical safeguards to
          protect your data from unauthorized access, misuse, or disclosure.
        </p>

        <WarningBox>
          While we follow best practices, no system is 100% secure. We
          continuously improve our security measures.
        </WarningBox>

        {/* 5 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            5
          </span>
          Your choices
        </h2>

        <p>You have control over your data and can:</p>

        <ul>
          <li>Request updates or corrections</li>
          <li>Ask us to stop non-essential communication</li>
          <li>Reach out for any data-related concerns</li>
        </ul>

        {/* 6 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            6
          </span>
          Changes to this policy
        </h2>

        <p>
          We may update this Privacy Policy occasionally. Any changes will be
          reflected on this page.
        </p>

        <InfoBox>
          We recommend reviewing this page periodically to stay informed.
        </InfoBox>
      </LegalContent>

      <B2BCTA />
    </>
  );
}
