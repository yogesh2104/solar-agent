import StaticPageHeader from "@/components/landing/StaticPageHeader";
import LegalContent from "@/components/landing/LegalContent";

export const metadata = {
  title: "Disclaimer | Suntrix",
  description: "Legal notices regarding the accuracy and use of information on the Suntrix website.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#050a14]">
      <StaticPageHeader
        title="Disclaimer"
        breadcrumb="Disclaimer"
        description="Legal notices regarding the accuracy and use of information on this website."
      />

      <LegalContent>
        <h2>1. Accuracy of Information</h2>
        <p>
          The information provided on the Suntrix website is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information for any purpose.
        </p>

        <h2>2. No Guarantee of Savings</h2>
        <p>
          Energy savings and ROI projections mentioned on this site are estimates based on average usage patterns, historical irradiance data, and current tariff rates. Actual savings will vary depending on your specific location, roof orientation, shading, energy consumption habits, local utility rates, and grid curtailment policies. Suntrix does not guarantee any specific financial return or amount of energy production.
        </p>

        <h2>3. External Links</h2>
        <p>
          Through this website, you may be able to link to other websites that are not under the control of Suntrix. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
        </p>

        <h2>4. Professional Advice</h2>
        <p>
          The information on this website does not constitute professional financial, tax, or legal advice. We recommend consulting with qualified professionals regarding your specific situation before making any investment or installation decisions.
        </p>

        <h2>5. Technical Issues</h2>
        <p>
          Suntrix takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about this disclaimer can be sent to legal@suntrix.in.
        </p>
      </LegalContent>
    </main>
  );
}
