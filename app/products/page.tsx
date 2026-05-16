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
import siteConfig from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.seo.products.title,
  description: siteConfig.seo.products.description,
  keywords: [
    "solar panels India", "solar inverters", "solar batteries",
    "mounting structures solar", "BoS components", "solar cabling accessories",
    "EV charger India", "robotic solar cleaning", "Surya Ghar Yojana",
    "Waaree", "Citizen", "GoodWe",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/products",
    title: siteConfig.seo.products.title,
    description: siteConfig.seo.products.description,
    images: [{ url: "/Logo1.png", width: 1200, height: 630, alt: "ELIZ ENERGY Solar Products" }],
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
    description: "High-quality solar panels for residential rooftops, commercial buildings, industrial plants, and utility projects.",
    icon: Sun,
    image: "/images/Rooftop.jpg",
    features: ["Trusted brands", "High output", "Long service life", "Fast supply"],
  },
  {
    title: "Inverters",
    description: "On-grid and hybrid inverters for reliable energy conversion and practical system performance.",
    icon: Zap,
    image: "/images/industrial.png",
    features: ["On-grid", "Hybrid", "Smart monitoring", "Stable output"],
  },
  {
    title: "Solar Batteries",
    description: "Battery options for backup power, storage, and resilience across solar projects.",
    icon: Battery,
    image: "/images/solar-battery-solar.jpg",
    features: ["Backup power", "Reliable storage", "Long cycle life", "Safe design"],
  },
  {
    title: "Mounting Structures",
    description: "Durable mounting structures for rooftops and ground-mounted systems with dependable installation support.",
    icon: Factory,
    image: "/images/industrial.png",
    features: ["Corrosion resistant", "Quick installation", "Strong support", "Project-ready"],
  },
  {
    title: "BoS Components",
    description: "Balance of System components that keep every solar project properly connected and operational.",
    icon: Building2,
    image: "/images/Rooftop.jpg",
    features: ["Project fit-out", "Electrical support", "Reliable sourcing", "System completion"],
  },
  {
    title: "Cabling & Accessories",
    description: "Cables, connectors, and accessories that support clean and dependable solar deployment.",
    icon: ShieldCheck,
    image: "/images/Rooftop.jpg",
    features: ["Cabling", "Connectors", "Accessories", "Fast delivery"],
  },
  {
    title: "EV Charger",
    description: "EV charger supply for homes and businesses that want a practical clean-energy charging setup.",
    icon: Zap,
    image: "/images/industrial.png",
    features: ["Home use", "Commercial use", "Clean charging", "Support"],
  },
  {
    title: "Robotic Cleaning for Utility",
    description: "Robotic cleaning support for utility-scale solar plants to help maintain output and reduce downtime.",
    icon: CheckCircle2,
    image: "/images/Rooftop.jpg",
    features: ["Utility scale", "Water-saving", "Efficiency support", "Automation"],
  },
  {
    title: "Surya Ghar Yojana",
    description: "Subsidy project support for homeowners looking to adopt rooftop solar under the Surya Ghar Yojana.",
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="divide-y divide-[rgba(15,23,42,0.07)]">
            {productCategories.map((product, index) => (
              <div
                key={product.title}
                className={`grid gap-10 items-center py-14 xl:grid-cols-2 ${index % 2 === 1 ? "xl:direction-rtl" : ""}`}
              >
                <div className={`space-y-5 ${index % 2 === 1 ? "xl:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8faf9] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#475569]">
                    <product.icon className="size-3.5 text-[#22c55e]" />
                    Product
                  </div>
                  <h2
                    className="text-3xl font-black tracking-tight text-[#0f172a] md:text-4xl"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {product.title}
                  </h2>
                  <p className="text-base leading-7 text-[#475569]">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-sm font-medium text-[#475569]"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-[#22c55e]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center rounded-full border border-[rgba(15,23,42,0.14)] px-6 text-sm font-semibold text-[#0f172a] transition-all hover:border-[#22c55e] hover:text-[#22c55e]"
                  >
                    Enquire about this product
                  </Link>
                </div>

                <div className={`relative overflow-hidden rounded-[1.75rem] border border-[rgba(15,23,42,0.08)] ${index % 2 === 1 ? "xl:order-1" : ""}`}>
                  <div className="relative aspect-video">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="bg-[#f8faf9] py-16">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-3xl font-black tracking-tight text-[#0f172a] md:text-4xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Need help choosing the right product?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base leading-7 text-[#64748b]">
            Tell us your project type and capacity — we will match you with the right equipment and partner brand.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[#0f172a] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b]"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
