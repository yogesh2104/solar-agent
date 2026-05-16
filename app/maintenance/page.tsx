import { Metadata } from "next";
import { CheckCircle2, Droplets, ShieldPlus, LineChart } from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Maintenance & AMC Services India | Robotic Cleaning | ELIZ ENERGY",
  description:
    "Professional solar maintenance services across India by ELIZ ENERGY. Annual Maintenance Contracts (AMC), panel cleaning, robotic cleaning for utility solar plants, inverter servicing & performance optimization.",
  keywords: [
    "solar maintenance India", "solar AMC", "annual maintenance contract solar",
    "solar panel cleaning India", "robotic solar panel cleaning", "solar inverter servicing",
    "solar performance optimization", "utility solar cleaning", "solar O&M India",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/maintenance",
    title: "Solar Maintenance & AMC | Robotic Cleaning | ELIZ ENERGY",
    description: "Professional solar AMC, panel cleaning, robotic cleaning for utility solar & performance optimization across India.",
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "ELIZ ENERGY Solar Maintenance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Maintenance & AMC | ELIZ ENERGY",
    description: "Professional solar AMC, panel cleaning & robotic cleaning across India.",
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
    benefits: ["Regular cleaning schedules", "Soft-water usage", "Non-abrasive tools", "Generation boost"],
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description:
      "Get year-round peace of mind with our Comprehensive AMC plans. We take care of everything from inverter health to structure integrity.",
    icon: ShieldPlus,
    benefits: ["Priority breakdown support", "Quarterly health checks", "Inverter firmware updates", "Component cleaning"],
  },
  {
    title: "Repair & Performance Optimization",
    description:
      "Is your system underperforming? We diagnose issues like faulty wiring, micro-cracks, or inverter failures and fix them fast.",
    icon: LineChart,
    benefits: ["Yield analysis", "String voltage testing", "Rapid troubleshooting", "Equipment replacement"],
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">

          {/* Intro */}
          <div className="max-w-2xl mb-16">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
              Solar O&M
            </div>
            <h2
              className="text-3xl font-black tracking-tight text-[#0f172a] md:text-4xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Solar Maintenance & AMC Services
            </h2>
            <p className="mt-4 text-base leading-7 text-[#64748b]">
              A solar system is a 25-year asset. To ensure it delivers peak
              savings, regular maintenance is mandatory. ELIZ ENERGY provides
              professional O&M services for residential and commercial plants.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {maintenanceServices.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-[1.5rem] border border-[rgba(15,23,42,0.08)] bg-white p-7 transition-shadow hover:shadow-[0_8px_28px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[rgba(34,197,94,0.07)] text-[#22c55e]">
                  <service.icon className="size-6" />
                </div>
                <h3
                  className="text-xl font-black text-[#0f172a] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-6 mb-7">
                  {service.description}
                </p>
                <div className="mt-auto space-y-2.5 border-t border-[rgba(15,23,42,0.07)] pt-5">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5 text-sm text-[#475569]">
                      <CheckCircle2 className="size-3.5 shrink-0 text-[#22c55e]" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#0f172a] p-10 md:p-14 relative">
            <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.10),transparent_65%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2
                  className="text-3xl font-black text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Protect Your Solar Investment
                </h2>
                <p className="mt-3 text-base text-white/60 leading-7">
                  Don&apos;t wait for your generation to drop. Book a health check
                  or sign up for an AMC today.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex h-11 items-center rounded-full bg-white px-7 text-sm font-semibold text-[#0f172a] hover:bg-[#f0fdf4] hover:text-[#22c55e] transition-colors"
              >
                Book Maintenance Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
