import { Metadata } from "next";
import Image from "next/image";
import { Zap, Home, Building2, Truck, CheckCircle2, ShieldCheck } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteConfig.seo.evCharger.title,
  description: siteConfig.seo.evCharger.description,
};

const evSolutions = [
  {
    title: "Home EV Charging",
    description: "Charge your electric vehicle comfortably at home with our fast and safe AC charger setups. Ideal for bungalows and apartment parking.",
    icon: Home,
    image: "/images/new_landing/hero_b2b.png", // Using existing placeholder
    features: ["Safe & Smart Charging", "Compact Design", "Overload Protection", "Mobile App Sync"],
  },
  {
    title: "Commercial & Office Hubs",
    description: "Attract EV-owning employees and customers by installing robust charging stations at your office, mall, or commercial complex.",
    icon: Building2,
    image: "/images/industrial.png",
    features: ["Revenue Generation Ready", "CMS Integrated", "Type-2 Compatibility", "Weatherproof (IP65)"],
  },
  {
    title: "Fleet & Industrial Solutions",
    description: "Power your logistics fleet with high-capacity DC fast chargers. Specialized solutions for delivery vans, buses, and industrial vehicles.",
    icon: Truck,
    image: "/images/power-generation.jpg",
    features: ["Rapid Charging Paths", "Load Management", "Energy Efficient", "Rugged Built"],
  },
];

export default function EVChargerPage() {
  return (
    <div className="bg-white pb-20">
      <StaticPageHeader
        title="EV"
        highlight="Charger Installation"
        breadcrumb="EV Charger"
        description="Install EV chargers in Mumbai for homes and businesses. Reliable and fast charging solutions by ELIZ ENERGY."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              EV Charger Installation Services in Mumbai
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              The future of mobility is electric. ELIZ ENERGY provides complete turnkey solutions for EV charging infrastructure, from site assessment to installation and commissioning.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {evSolutions.map((sol) => (
              <div key={sol.title} className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-2 transition-all hover:border-[var(--brand-lime)] hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-6 top-6 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                    <sol.icon className="size-6" />
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-slate-950 mb-4">{sol.title}</h3>
                  <p className="text-slate-600 text-sm leading-7 mb-6">
                    {sol.description}
                  </p>
                  
                  <div className="mt-auto space-y-2">
                    {sol.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <CheckCircle2 className="size-3 text-[var(--brand-lime)]" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link href="/contact">
                      <Button className="w-full h-12 rounded-xl bg-slate-50 text-slate-950 hover:bg-[var(--brand-lime)] hover:text-slate-950 font-bold transition-all border border-slate-200">
                        Enquire Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-slate-950 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl leading-tight">Expert EV Infrastructure Setup in Mumbai</h2>
              <p className="mt-6 text-white/60 text-lg leading-8">
                We handle the technical complexities of electrical load balancing, cabling, and safety compliance so you can enjoy a seamless charging experience.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  "Safety First approach with surge protection",
                  "Support for all major EV brands in India",
                  "Turnkey execution from cabling to commissioning",
                  "Solar-integrated charging (Eco-Mode)"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="size-6 rounded-full bg-[var(--brand-lime)]/20 flex items-center justify-center">
                      <Zap className="size-3 text-[var(--brand-lime)]" />
                    </div>
                    <span className="font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem] border border-white/10 group">
               <Image 
                 src="/images/wind_turbines_clean_energy.jpg"
                 alt="Renewable focus"
                 fill
                 className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black/40">
                  <div className="max-w-md">
                    <ShieldCheck className="size-16 text-[var(--brand-lime)] mx-auto mb-6" />
                    <p className="text-xl font-bold uppercase tracking-widest text-[var(--brand-lime)] mb-2">Certified Setup</p>
                    <p className="text-2xl font-semibold">Trained Engineers & Standard Compliance</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
