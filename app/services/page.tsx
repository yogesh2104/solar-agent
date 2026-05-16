import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Home,
  Building2,
  ShieldCheck,
} from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: siteConfig.seo.services.title,
  description: siteConfig.seo.services.description,
  keywords: [
    "solar installation services India", "solar equipment supply India",
    "solar panels India", "solar inverters", "solar batteries",
    "EV charger installation India", "robotic cleaning utility solar",
    "Surya Ghar Yojana installation",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/services",
    title: siteConfig.seo.services.title,
    description: siteConfig.seo.services.description,
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "ELIZ ENERGY Solar Services" }],
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

const iconMap: Record<string, any> = {
  Home: Home,
  Building: Building2,
  Factory: Factory,
  Settings: ShieldCheck,
};

export default async function ServicesPage() {
  const services = await db.service.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div className="bg-white min-h-screen">
      <StaticPageHeader
        title="Complete"
        highlight="Solar Services"
        description="Get complete solar equipment supply and support across India."
      />

      <div className="container mx-auto px-6 lg:px-10 py-16 md:py-20">
        {services.length === 0 ? (
          <div className="rounded-[1.75rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] py-20 text-center">
            <p className="text-[#64748b] font-medium">
              Our services are currently being updated. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon || ""] || Building2;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(15,23,42,0.08)] bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(15,23,42,0.07)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#f8faf9]">
                        <Icon className="h-16 w-16 text-[#e2e8f0]" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between">
                      <h3
                        className="text-lg font-black tracking-tight text-[#0f172a] transition-colors group-hover:text-[#22c55e]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <ArrowUpRight className="size-4 shrink-0 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] px-3 py-1 text-xs font-medium text-[#475569]"
                        >
                          <CheckCircle2 className="size-3 text-[#22c55e]" />
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="inline-flex items-center rounded-full border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] px-3 py-1 text-xs font-medium text-[#94a3b8]">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* CTA band */}
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#0f172a] p-10 md:p-14 relative">
          <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.10),transparent_65%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2
                className="text-3xl font-black text-white md:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Need help matching equipment to your project?
              </h2>
              <p className="mt-3 text-base text-white/60 leading-7">
                We help you choose the right solar equipment, partner brand, and
                support path for residential, commercial, industrial, and utility projects.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#0f172a] hover:bg-[#f0fdf4] hover:text-[#22c55e] transition-colors"
              >
                Contact Our Team
              </Link>
              <Link
                href="/products"
                className="inline-flex h-11 items-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white hover:border-white/40 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
