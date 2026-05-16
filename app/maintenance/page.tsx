import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Droplets, ShieldPlus, LineChart } from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Solar Maintenance & AMC Services India | Robotic Cleaning | ELIZ ENERGY",
  description:
    "Professional solar maintenance services across India by ELIZ ENERGY. Annual Maintenance Contracts (AMC), panel cleaning, robotic cleaning for utility solar plants, inverter servicing & performance optimization.",
  keywords: [
    "solar maintenance India",
    "solar AMC",
    "annual maintenance contract solar",
    "solar panel cleaning India",
    "robotic solar panel cleaning",
    "solar inverter servicing",
    "solar performance optimization",
    "utility solar cleaning",
    "solar O&M India",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/maintenance",
    title: "Solar Maintenance & AMC | Robotic Cleaning | ELIZ ENERGY",
    description:
      "Professional solar AMC, panel cleaning, robotic cleaning for utility solar & performance optimization across India.",
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY Solar Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Maintenance & AMC | ELIZ ENERGY",
    description:
      "Professional solar AMC, panel cleaning & robotic cleaning across India.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/maintenance" },
  robots: { index: true, follow: true },
};

const maintenanceServices = [
  {
    title: "Professional Solar Cleaning",
    description:
      "Dust and bird droppings can reduce your energy generation by up to 30%. Our team provides periodic cleaning using specialized equipment.",
    icon: Droplets,
    benefits: [
      "Regular cleaning schedules",
      "Soft-water usage",
      "Non-abrasive tools",
      "Generation boost",
    ],
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description:
      "Get year-round peace of mind with our Comprehensive AMC plans. We take care of everything from inverter health to structure integrity.",
    icon: ShieldPlus,
    benefits: [
      "Priority breakdown support",
      "Quarterly health checks",
      "Inverter firmware updates",
      "Component cleaning",
    ],
  },
  {
    title: "Repair & Performance Optimization",
    description:
      "Is your system underperforming? We diagnose issues like faulty wiring, micro-cracks, or inverter failures and fix them fast.",
    icon: LineChart,
    benefits: [
      "Yield analysis",
      "String voltage testing",
      "Rapid troubleshooting",
      "Equipment replacement",
    ],
  },
];

export default function MaintenancePage() {
  return (
    <div className="bg-[#f7faf9] pb-20">
      <StaticPageHeader
        title="Solar"
        highlight="Maintenance & AMC"
        breadcrumb="Maintenance"
        description="Keep your solar system efficient with expert maintenance services in Mumbai. AMC, cleaning, and performance optimization available."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" />
              Maintenance care
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Solar Maintenance & AMC Services in Mumbai
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              A solar system is a 25-year asset. To ensure it delivers peak
              savings, regular maintenance is mandatory. ELIZ ENERGY provides
              professional O&M services for residential and commercial plants.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {maintenanceServices.map((service) => (
              <article
                key={service.title}
                className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon className="size-7" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mb-8 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-auto space-y-3">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 rounded-full bg-[#f7faf9] px-3 py-2 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2 className="size-3.5 text-primary" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
            <div className="absolute -right-20 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Protect Your Solar Investment
              </h2>
              <p className="mb-8 text-base leading-7 text-slate-600">
                Don&apos;t wait for your generation to drop. Book a health check
                or sign up for an AMC today.
              </p>
              <Button
                asChild
                className="h-12 rounded-full bg-primary px-7 text-sm font-semibold text-white hover:bg-primary/90"
              >
                <Link href="/contact">
                  Book Maintenance Now
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
