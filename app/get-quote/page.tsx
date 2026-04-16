import type { Metadata } from "next";
import {
  BarChart3,
  Building2,
  Clock3,
  HeadphonesIcon,
  ShieldCheck,
  Zap,
} from "lucide-react";
import QuotationForm from "@/components/landing/QuotationForm";
import ROICalculator from "@/components/landing/ROICalculator";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Get a Commercial Solar Quote | Suntrix",
  description:
    "Request a tailored B2B solar proposal with first-pass feasibility, ROI thinking, and deployment-fit guidance from Suntrix.",
};

const steps = [
  {
    num: "01",
    icon: Building2,
    title: "Share your site and spend",
    description: "Tell us the location, bill size, target capacity, or supply requirement so we can size the first response correctly.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "We review fit and commercial path",
    description: "Our team assesses the likely capacity range, equipment path, and whether supply-only, turnkey, or phased rollout makes more sense.",
  },
  {
    num: "03",
    icon: HeadphonesIcon,
    title: "You get a human follow-up",
    description: "An advisor walks you through next steps, assumptions, and what additional information would sharpen the proposal.",
  },
];

const whatToShare = [
  "Monthly electricity spend or load profile",
  "Approximate roof or land availability",
  "Preferred buying model or project timeline",
  "Any target capacity, battery, or backup requirement",
];

const guarantees = [
  { icon: ShieldCheck, text: "Commercial-first response, not a generic calculator output" },
  { icon: Clock3, text: "Initial response target within 4 business hours" },
  { icon: Zap, text: "Feasibility guidance with no obligation to proceed" },
];

export default function GetQuotePage() {
  const { company } = siteConfig;

  return (
    <div className="bg-[#f7fbff] pb-20">
      <StaticPageHeader
        title="Request a"
        highlight="Commercial Proposal"
        breadcrumb="Get Quote"
        description="Share the basics of your project and we will respond with a practical next step, not a one-size-fits-all sales pitch."
      />

      <div className="container mx-auto px-6 pt-10">
        <ROICalculator />

        <div id="proposal-form" className="mt-12 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <div>
            <div className="mb-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
                Final proposal request
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Turn the rough estimate into a real proposal.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                If the calculator range looks close, send the final details here and we will prepare a more specific commercial response for your site, usage pattern, and rollout plan.
              </p>
            </div>
            <QuotationForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-[2.2rem] bg-[var(--brand-ink)] p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
                What happens next
              </div>
              <div className="mt-6 space-y-6">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.num} className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--brand-lime)]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                          Step {step.num}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Useful inputs
              </div>
              <div className="mt-5 space-y-3">
                {whatToShare.map((item) => (
                  <div key={item} className="rounded-[1.3rem] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Why this page exists
              </div>
              <div className="mt-5 space-y-4">
                {guarantees.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <Icon className="mt-0.5 size-4 shrink-0 text-slate-950" />
                      <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                Need a faster conversation?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you already know your rough scope or need pricing support urgently, call the enterprise desk directly.
              </p>
              <a
                href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                {company.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
