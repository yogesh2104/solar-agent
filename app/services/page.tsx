import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Factory,
  Home,
  Building2,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: siteConfig.seo.services.title,
  description: siteConfig.seo.services.description,
  keywords: [
    "solar installation services India",
    "solar equipment supply India",
    "solar panels India",
    "solar inverters",
    "solar batteries",
    "EV charger installation India",
    "robotic cleaning utility solar",
    "Surya Ghar Yojana installation",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/services",
    title: siteConfig.seo.services.title,
    description: siteConfig.seo.services.description,
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
    title: siteConfig.seo.services.title,
    description: siteConfig.seo.services.description,
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/services" },
  robots: { index: true, follow: true },
};

const iconMap: Record<string, LucideIcon> = {
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
    <div className="relative isolate min-h-screen bg-[#f7faf9]">
      <StaticPageHeader
        title="Complete"
        highlight="Solar Installation Services"
        description="Get complete solar equipment supply and support across India."
      />

      <div className="container mx-auto px-6 py-16 md:py-24">
        {services.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white py-20 text-center shadow-sm">
            <p className="text-slate-500">
              Our services are currently being updated. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon || ""] || Building2;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative aspect-video overflow-hidden rounded-[1.6rem]">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-100">
                        <Icon className="h-20 w-20 text-slate-200" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/25 bg-white/85 text-primary backdrop-blur-xl transition-all duration-300 group-hover:scale-105">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-medium leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          <CheckCircle2 className="size-3 text-primary" />
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="inline-flex items-center rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary">
                      Explore Details
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-12 rounded-[2.2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Need help matching equipment to your project?
            </h2>
            <p className="mb-8 text-base leading-8 text-slate-600">
              We help you choose the right solar equipment, partner brand, and
              support path for residential, commercial, industrial, and utility
              projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="h-12 cursor-pointer rounded-full bg-primary px-7 text-sm font-semibold text-white hover:bg-primary/90"
              >
                <Link href="/contact">
                  Contact Our Team
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 cursor-pointer rounded-full border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 hover:bg-[#f7faf9]"
              >
                <Link href="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
