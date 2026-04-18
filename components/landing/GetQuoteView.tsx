"use client";

import { useState } from "react";
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

const steps = [
  {
    num: "01",
    icon: Building2,
    title: "Share your site and spend",
    description:
      "Tell us the location, bill size, target capacity, or supply requirement so we can size the first response correctly.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "We review fit and commercial path",
    description:
      "Our team assesses the likely capacity range, equipment path, and whether supply-only, turnkey, or phased rollout makes more sense.",
  },
  {
    num: "03",
    icon: HeadphonesIcon,
    title: "You get a human follow-up",
    description:
      "An advisor walks you through next steps, assumptions, and what additional information would sharpen the proposal.",
  },
];

export default function GetQuoteView() {
  const { company } = siteConfig;
  const [estimate, setEstimate] = useState({ capacity: "", bill: "" });

  return (
    <div className="bg-[#f7fbff] pb-10">
      <StaticPageHeader
        title="Request a"
        highlight="Commercial Proposal"
        breadcrumb="Get Quote"
        description="Share the basics of your project and we will respond with a practical next step, not a one-size-fits-all sales pitch."
      />

      <div className="container mx-auto px-6">
        <ROICalculator onEstimateChange={setEstimate} />

        <div
          id="proposal-form"
          className="mt-12 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]"
        >
          <div>
            <QuotationForm
              initialCapacity={estimate.capacity}
              initialBill={estimate.bill}
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-[2.2rem] -foreground p-8 text-black">
              <div className="space-y-6">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.num}
                      className="flex gap-4 border border-border rounded-2xl"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase text-white/45">
                          Step {step.num}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-black/60">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                Need a faster conversation?
              </h3>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                If you already know your rough scope or need pricing support
                urgently, call the enterprise desk directly.
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
