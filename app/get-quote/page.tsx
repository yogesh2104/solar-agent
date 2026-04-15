import { Metadata } from "next";
import QuotationForm from "@/components/landing/QuotationForm";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Zap, ShieldCheck, TrendingDown, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Get a Free Solar Quotation | SolarCo",
  description: "Request a personalized solar energy quotation for your home or business. Detailed ROI analysis and professional installation planning.",
};

const benefits = [
  {
    icon: Zap,
    title: "Customized Analysis",
    description: "Personalized solar design based on your specific roof architecture and energy needs.",
  },
  {
    icon: TrendingDown,
    title: "Bill Reduction",
    description: "Detailed projection of how much you'll save on monthly electricity costs over 25 years.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Hardware",
    description: "Quotes include high-efficiency Tier-1 solar panels and smart inverter technology.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Our experts will review your requirements and get back to you within 24 business hours.",
  },
];

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <StaticPageHeader 
        title="Get Your Free"
        highlight="Solar Quote"
        description="Take the first step towards energy independence. Fill out the form below and our experts will design a customized solar solution tailored to your needs."
      />

      <div className="container mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <QuotationForm />
          </div>

          {/* Benefits Column */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">What happens next?</h3>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/30 border border-border">
              <h4 className="font-bold text-foreground mb-4">Need immediate help?</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Call our solar consultants directly for a quick consultation.
              </p>
              <div className="flex items-center gap-3 text-primary font-bold">
                <span className="p-2 rounded-full bg-primary/10">
                  <Zap className="w-5 h-5" />
                </span>
                +91 98765 43210
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
