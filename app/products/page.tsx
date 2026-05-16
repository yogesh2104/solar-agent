import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Battery,
  CheckCircle2,
  ShieldCheck,
  Sun,
  Zap,
  Building2,
  Factory,
} from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.seo.products.title,
  description: siteConfig.seo.products.description,
  keywords: [
    "solar panels India",
    "solar inverters",
    "solar batteries",
    "mounting structures solar",
    "BoS components",
    "solar cabling accessories",
    "EV charger India",
    "robotic solar cleaning",
    "Surya Ghar Yojana",
    "Waaree",
    "Citizen",
    "GoodWe",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/products",
    title: siteConfig.seo.products.title,
    description: siteConfig.seo.products.description,
    images: [
      {
        url: "/Logo1.png",
        width: 1200,
        height: 630,
        alt: "ELIZ ENERGY Solar Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.products.title,
    description: siteConfig.seo.products.description,
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/products" },
  robots: { index: true, follow: true },
};

const productCategories = [
  {
    title: "Solar Panels",
    description:
      "High-quality solar panels for residential rooftops, commercial buildings, industrial plants, and utility projects.",
    icon: Sun,
    image: "/images/Rooftop.jpg",
    features: ["Trusted brands", "High output", "Long service life", "Fast supply"],
  },
  {
    title: "Inverters",
    description:
      "On-grid and hybrid inverters for reliable energy conversion and practical system performance.",
    icon: Zap,
    image: "/images/industrial.png",
    features: ["On-grid", "Hybrid", "Smart monitoring", "Stable output"],
  },
  {
    title: "Solar Batteries",
    description:
      "Battery options for backup power, storage, and resilience across solar projects.",
    icon: Battery,
    image: "/images/solar-battery-solar.jpg",
    features: ["Backup power", "Reliable storage", "Long cycle life", "Safe design"],
  },
  {
    title: "Mounting Structures",
    description:
      "Durable mounting structures for rooftops and ground-mounted systems with dependable installation support.",
    icon: Factory,
    image: "/images/industrial.png",
    features: ["Corrosion resistant", "Quick installation", "Strong support", "Project-ready"],
  },
  {
    title: "BoS Components",
    description:
      "Balance of System components that keep every solar project properly connected and operational.",
    icon: Building2,
    image: "/images/Rooftop.jpg",
    features: ["Project fit-out", "Electrical support", "Reliable sourcing", "System completion"],
  },
  {
    title: "Cabling & Accessories",
    description:
      "Cables, connectors, and accessories that support clean and dependable solar deployment.",
    icon: ShieldCheck,
    image: "/images/Rooftop.jpg",
    features: ["Cabling", "Connectors", "Accessories", "Fast delivery"],
  },
  {
    title: "EV Charger",
    description:
      "EV charger supply for homes and businesses that want a practical clean-energy charging setup.",
    icon: Zap,
    image: "/images/industrial.png",
    features: ["Home use", "Commercial use", "Clean charging", "Support"],
  },
  {
    title: "Robotic Cleaning for Utility",
    description:
      "Robotic cleaning support for utility-scale solar plants to help maintain output and reduce downtime.",
    icon: CheckCircle2,
    image: "/images/Rooftop.jpg",
    features: ["Utility scale", "Water-saving", "Efficiency support", "Automation"],
  },
  {
    title: "Surya Ghar Yojana",
    description:
      "Subsidy project support for homeowners looking to adopt rooftop solar under the Surya Ghar Yojana.",
    icon: Sun,
    image: "/images/Rooftop.jpg",
    features: ["Subsidy support", "Residential focus", "Easy adoption", "Brochure-aligned"],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#f7faf9]">
      <StaticPageHeader
        title="Solar"
        highlight="Products"
        breadcrumb="Products"
        description="Solar panels, inverters, batteries, mounting structures, BoS components, cabling & accessories, EV chargers, robotic cleaning, and Surya Ghar Yojana support."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
                <span className="size-1.5 rounded-full bg-primary" />
                Equipment portfolio
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Everything needed for a reliable solar project.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              A practical product stack for residential, commercial, industrial,
              and utility teams buying dependable solar equipment across India.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((product, index) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-white/85 text-primary shadow-sm backdrop-blur-xl">
                    <product.icon className="size-5" />
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {product.title}
                    </h2>
                    <span className="text-xs font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-full bg-[#f7faf9] px-3 py-2 text-xs font-medium text-slate-600"
                      >
                        <CheckCircle2 className="size-3.5 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Need help selecting equipment?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share your project size, site type, or sourcing brief and we
                  will point you to the right product path.
                </p>
              </div>
              <Button
                asChild
                className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90"
              >
                <Link href="/contact">
                  Contact Our Team
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
