import { Metadata } from "next";
import QuotationForm from "@/components/landing/QuotationForm";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Zap, ShieldCheck, Clock, BarChart3, Building2, HeadphonesIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Free Enterprise Solar Quote | Suntrix",
  description: "Request a customized B2B solar proposal. Free feasibility report, ROI model, and project timeline for commercial and industrial projects.",
};

const steps = [
  {
    num: "01",
    icon: Building2,
    title: "Submit Your Details",
    description: "Fill in your company profile, energy consumption, and project requirements.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "We Prepare Your Proposal",
    description: "Our engineers run a feasibility study and build a custom ROI model for your site.",
  },
  {
    num: "03",
    icon: HeadphonesIcon,
    title: "Expert Consultation",
    description: "Your dedicated consultant walks you through savings projections and financing options.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Project Kick-off",
    description: "Once approved, we begin site survey, design, and permitting — you stay hands-off.",
  },
];

const guarantees = [
  { icon: ShieldCheck, text: "P90 Performance Guarantee" },
  { icon: Clock, text: "Response within 4 business hours" },
  { icon: Zap, text: "Zero-cost feasibility study" },
];

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-[#050a14] pb-28">
      <StaticPageHeader
        title="Get a Free"
        highlight="Enterprise Proposal"
        breadcrumb="Get Quote"
        description="Submit your project details and receive a comprehensive solar feasibility report, custom ROI model, and project timeline — completely free."
      />

      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <QuotationForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Process steps */}
            <div className="bg-[#080f1e] border border-white/8 rounded-3xl p-8">
              <h3 className="text-white font-bold text-lg mb-8">What happens next?</h3>
              <div className="space-y-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#f5a623]" />
                        </div>
                        {i < steps.length - 1 && <div className="w-px h-full bg-white/8 mt-2" />}
                      </div>
                      <div className="pb-6">
                        <span className="text-[10px] font-black text-[#f5a623]/60 tracking-widest">{step.num}</span>
                        <h4 className="font-bold text-white text-sm mt-0.5">{step.title}</h4>
                        <p className="text-white/35 text-xs mt-1 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-[#f5a623]/5 border border-[#f5a623]/15 rounded-3xl p-8">
              <p className="text-[#f5a623] text-xs font-bold uppercase tracking-widest mb-5">Our Guarantees</p>
              <div className="space-y-4">
                {guarantees.map((g, i) => {
                  const Icon = g.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[#f5a623]" />
                      <span className="text-white/60 text-sm font-medium">{g.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct call */}
            <div className="bg-[#080f1e] border border-white/8 rounded-3xl p-8">
              <h4 className="font-bold text-white mb-2">Need immediate help?</h4>
              <p className="text-white/35 text-sm mb-5">
                Call our enterprise sales line directly for a quick consultation.
              </p>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-[#f5a623] font-bold group"
              >
                <span className="p-2 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/20 group-hover:bg-[#f5a623]/20 transition-colors">
                  <Zap className="w-4 h-4 fill-current" />
                </span>
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
