import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Home,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StaticPageHeader from "@/components/landing/StaticPageHeader";

export const metadata = {
  title:
    "Solar Installation Services India | Residential, Commercial, Industrial & Utility | ELIZ ENERGY",
  description:
    "Complete solar installation services across India by ELIZ ENERGY. Rooftop solar for homes, offices, factories & utility-scale plants. EV charger installation, Surya Ghar Yojana projects & robotic cleaning for utility solar.",
  keywords: [
    "solar installation services India",
    "rooftop solar installation",
    "commercial solar installation",
    "industrial solar",
    "utility solar India",
    "Surya Ghar Yojana installation",
    "solar EPC India",
    "EV charger installation India",
    "solar maintenance AMC",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/services",
    title: "Solar Installation Services India | All Sectors | ELIZ ENERGY",
    description:
      "Complete solar installation for residential, commercial, industrial & utility sectors across India. EV chargers & robotic cleaning available.",
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY Solar Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation Services India | ELIZ ENERGY",
    description: "Complete solar installation for all sectors across India.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/services" },
  robots: { index: true, follow: true },
};

const iconMap: Record<string, any> = {
  Home: Home,
  Building: Building2,
  Factory: Factory,
  Settings: ShieldCheck,
};

export default async function ServicesPage() {
  const services = await db.service.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div className="relative isolate min-h-screen">
      <StaticPageHeader
        title="Complete"
        highlight="Solar Installation Services"
        description="Get complete solar installation services in Mumbai. ELIZ ENERGY provides rooftop, commercial, and industrial solar solutions with maintenance support."
      />

      <div className="container mx-auto px-6 py-8 md:py-12">
        {services.length === 0 ? (
          <div className="text-center py-20 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-slate-200">
            <p className="text-slate-500">
              Our services are currently being updated. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon || ""] || Building2;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/60 p-2 backdrop-blur-md transition-all duration-500 hover:border-slate-300 hover:bg-white hover:shadow-[0_40px_80px_rgba(8,17,31,0.06)]"
                >
                  <div className="relative aspect-video overflow-hidden rounded-4xl">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <Icon className="h-20 w-20 text-slate-200" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:-secondary group-hover:text-slate-950">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          <CheckCircle2 className="size-3 -secondary" />
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-widest -secondary">
                      Explore Details
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 rounded-[3rem] bg-slate-950 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 size-[500px] rounded-full text-secondary opacity-10 blur-[100px]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white md:text-5xl mb-6">
              Not sure which solar path is right for you?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Our experts help you analyze your energy load and site conditions
              to recommend the most optimized system.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/get-quote">
                <Button className="h-14 px-10 cursor-pointer rounded-full font-bold text-base text-white hover:bg-primary/90">
                  Get Free Feasibility Study
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="h-14 px-10 cursor-pointer rounded-full font-bold text-base text-white border-white/10 transition-colors"
                >
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
