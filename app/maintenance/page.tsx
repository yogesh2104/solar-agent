import { Metadata } from "next";
import { CheckCircle2, Droplets, ShieldPlus, LineChart } from "lucide-react";
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
    <div className="bg-white pb-20">
      <StaticPageHeader
        title="Solar"
        highlight="Maintenance & AMC"
        breadcrumb="Maintenance"
        description="Keep your solar system efficient with expert maintenance services in Mumbai. AMC, cleaning, and performance optimization available."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Solar Maintenance & AMC Services in Mumbai
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A solar system is a 25-year asset. To ensure it delivers peak
              savings, regular maintenance is mandatory. ELIZ ENERGY provides
              professional O&M services for residential and commercial plants.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {maintenanceServices.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all hover:bg-secondary hover:shadow-2xl"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-secondary transition-colors group-hover:bg-secondary group-hover:text-slate-950">
                  <service.icon className="size-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-7 mb-8">
                  {service.description}
                </p>
                <div className="mt-auto space-y-3">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-500"
                    >
                      <CheckCircle2 className="size-3 text-secondary" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-[3rem] bg-slate-950 p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -right-1/4 -bottom-1/4 size-[500px] rounded-full text-secondary opacity-10 blur-[100px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white md:text-4xl mb-6">
                Protect Your Solar Investment
              </h2>
              <p className="text-slate-400 mb-10">
                Don&apos;t wait for your generation to drop. Book a health check
                or sign up for an AMC today.
              </p>
              <Link href="/contact">
                <Button className="h-14 px-10 rounded-full font-bold text-base bg-secondary text-slate-950 hover:bg-secondary/90">
                  Book Maintenance Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
