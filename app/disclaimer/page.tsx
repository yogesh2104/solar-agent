import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent, {
  InfoBox,
  WarningBox,
} from "@/components/landing/LegalContent";
import B2BCTA from "@/components/landing/B2BCTA";

export const metadata = {
  title: "Disclaimer | ELIZ ENERGY - B2B Solar India",
  description:
    "Official legal disclaimer for ELIZ ENERGY. Important notices regarding information accuracy and project assumptions for industrial solar projects.",
  alternates: { canonical: "https://elizenergy.in/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
      <StaticPageHeader
        title="Legal"
        highlight="Disclaimer"
        breadcrumb="Disclaimer"
        description="Important notes about the scope, reliability, and intended use of information shown on this website."
      />

      <LegalContent>
        {/* 1 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            1
          </span>
          Accuracy of information
        </h2>

        <p>
          Information published on the ELIZ ENERGY website is provided for
          general informational purposes only.
        </p>

        <InfoBox>
          While we aim to keep information current and useful, we do not
          guarantee that all content is complete, error-free, or suitable for
          every business scenario.
        </InfoBox>

        {/* 2 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            2
          </span>
          Savings and performance assumptions
        </h2>

        <p>
          Any references to energy savings, payback periods, or system
          performance are indicative unless explicitly confirmed in a signed
          commercial proposal.
        </p>

        <ul>
          <li>Site conditions</li>
          <li>Tariff structures</li>
          <li>Grid performance</li>
          <li>Shading and installation factors</li>
          <li>Equipment selection</li>
          <li>Operational usage</li>
        </ul>

        <WarningBox>
          Actual project outcomes may vary significantly based on real-world
          conditions.
        </WarningBox>

        {/* 3 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            3
          </span>
          External links
        </h2>

        <p>
          Our website may include links to third-party resources for
          convenience.
        </p>

        <WarningBox>
          We do not control or take responsibility for the content, accuracy, or
          availability of external websites.
        </WarningBox>

        {/* 4 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            4
          </span>
          Not professional advice
        </h2>

        <p>
          Content on this website should not be considered as legal, financial,
          tax, or engineering advice for specific projects.
        </p>

        <InfoBox>
          We recommend consulting qualified professionals before making project
          or investment decisions.
        </InfoBox>

        {/* 5 */}
        <h2 className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            5
          </span>
          Website availability
        </h2>

        <p>
          We aim to keep the website accessible and functioning smoothly, but do
          not guarantee uninterrupted availability.
        </p>

        <WarningBox>
          We are not liable for downtime caused by technical issues, third-party
          services, or circumstances beyond our control.
        </WarningBox>
      </LegalContent>

      <B2BCTA />
    </>
  );
}
