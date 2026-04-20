import { Metadata } from "next";
import Image from "next/image";
import { Battery, ShieldCheck, Sun, Zap, CheckCircle2 } from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Panels, Inverters, Batteries,  & More | ELIZ ENERGY India",
  description:
    "Buy high-quality solar panels, on-grid/hybrid inverters, solar batteries, mounting structures, BOS components, cabling & EV chargers from ELIZ ENERGY. Robotic cleaning for utility solar plants available across India.",
  keywords: [
    "solar panels India",
    "solar inverter India",
    "solar battery India",
    "mounting structures solar",
    "BOS components solar",
    "solar cabling accessories",
    "EV charger India",
    "robotic solar cleaning",
    "Tier-1 solar panels",
    "buy solar panels India",
  ],
  openGraph: {
    type: "website",
    url: "https://elizenergy.in/products",
    title: "Solar Panels, Inverters, Batteries &  | ELIZ ENERGY",
    description:
      "Complete solar product range: Panels, Inverters, Batteries, Mounting, BOS, Cabling.",
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
    title: "Solar Panels, Inverters &  | ELIZ ENERGY",
    description: "Complete solar product range including  & Robotic Cleaning.",
    images: ["/Logo1.png"],
  },
  alternates: { canonical: "https://elizenergy.in/products" },
  robots: { index: true, follow: true },
};

const productCategories = [
  {
    title: "High-Efficiency Solar Panels",
    description:
      "Tier-1 Mono PERC and TOPCon panels designed for maximum energy harvest even in low-light conditions.",
    icon: Sun,
    image: "/images/Rooftop.jpg",
    features: [
      "25-year Warranty",
      "Anti-PID Technology",
      "Higher ROI",
      "Best-in-class Efficiency",
    ],
  },
  {
    title: "Smart Solar Inverters",
    description:
      "Reliable On-grid and Hybrid inverters with smart monitoring to track your generation in real-time.",
    icon: Zap,
    image: "/images/industrial.png",
    features: [
      "Remote Monitoring",
      "Dual MPPT Support",
      "High Surge Capacity",
      "Silent Operation",
    ],
  },
  {
    title: "Solar Batteries & Storage",
    description:
      "Long-lasting Lithium-ion and Lead-acid batteries for uninterrupted power supply during nights and outages.",
    icon: Battery,
    image: "/images/solar-battery-solar.jpg",
    features: [
      "Deep Cycle Life",
      "Fast Charging",
      "Safe & Reliable",
      "Scalable Design",
    ],
  },
  {
    title: "Mounting Structures & BOS Components",
    description:
      "Durable and corrosion-resistant mounting structures with complete Balance of System (BoS) components including cabling and accessories.",
    icon: ShieldCheck,
    image: "/images/industrial.png",
    features: [
      "Hot-dip Galvanized",
      "High Wind Loading",
      "Quick Installation",
      "Precision Engineering",
    ],
  },
  {
    title: "Robotic Cleaning for Utility Solar",
    description:
      "Automated robotic cleaning systems for large utility-scale solar plants, maximising panel efficiency and generation output year-round.",
    icon: ShieldCheck,
    image: "/images/Rooftop.jpg",
    features: [
      "Waterless Cleaning",
      "Remote Operation",
      "Maximises Output",
      "Utility-Scale",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <StaticPageHeader
        title="Solar"
        highlight="Products"
        breadcrumb="Products"
        description="Complete solar product range across India – Solar Panels, Inverters, Batteries, Mounting Structures, BOS Components, Cabling."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {productCategories.map((product, index) => (
              <div
                key={product.title}
                className={`grid gap-10 xl:grid-cols-2 items-center ${index % 2 === 1 ? "xl:direction-rtl" : ""}`}
              >
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "xl:order-2" : ""}`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                    <product.icon className="size-4 -secondary" />
                    Premium Gear
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
                        <CheckCircle2 className="size-4 -secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="h-12 rounded-full px-8 bg-slate-950 hover:bg-slate-800 text-white font-bold">
                        Get Pricing
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

      {/* Trust Section */}
      {/* <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl mb-12">
            Why Buy from ELIZ ENERGY?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Sourced from Top Brands",
                icon: ShieldCheck,
                desc: "We only supply Tier-1 products from globally recognized solar manufacturers.",
              },
              {
                title: "Professional Guidance",
                icon: Sun,
                desc: "Our experts help you pick the right capacity and brand based on your site.",
              },
              {
                title: "Complete Warranty Support",
                icon: CheckCircle2,
                desc: "End-to-end assistance for warranty claims and performance peace of mind.",
              },
            ].map((box) => (
              <div
                key={box.title}
                className="rounded-4xl bg-white p-8 border border-slate-100 shadow-sm"
              >
                <box.icon className="size-10 -secondary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">{box.title}</h3>
                <p className="text-slate-600 text-sm leading-6">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
