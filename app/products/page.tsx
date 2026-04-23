import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
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
    <div className="bg-white">
      <StaticPageHeader
        title="Solar"
        highlight="Products"
        breadcrumb="Products"
        description="Solar panels, inverters, batteries, mounting structures, BoS components, cabling & accessories, EV chargers, robotic cleaning, and Surya Ghar Yojana support."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {productCategories.map((product, index) => (
              <div
                key={product.title}
                className={`grid gap-10 items-center xl:grid-cols-2 ${index % 2 === 1 ? "xl:direction-rtl" : ""}`}
              >
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "xl:order-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                    <product.icon className="size-4 text-secondary" />
                    Brochure Item
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                    {product.title}
                  </h2>
                  <p className="text-lg leading-8 text-slate-600">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 className="size-4 text-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="h-12 rounded-full bg-slate-950 px-8 font-bold text-white hover:bg-slate-800">
                        Contact Our Team
                      </Button>
                    </Link>
                  </div>
                </div>

                <div
                  className={`relative aspect-16/10 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl ${index % 2 === 1 ? "xl:order-1" : ""}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
