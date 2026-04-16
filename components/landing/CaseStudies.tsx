"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Factory, Building2, Cpu } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    client: "Mahindra Auto Plant",
    sector: "Manufacturing",
    location: "Pune, Maharashtra",
    capacity: "2.5 MW",
    savings: "₹3.2Cr/yr",
    co2: "2,100 T",
    highlight: "Reduced peak demand charges by 42% with solar + BESS integration.",
    image: "/images/industrial.png",
    icon: Factory,
    tag: "Industrial",
    accent: "#f5a623",
  },
  {
    client: "Prestige Tech Park",
    sector: "IT / Commercial",
    location: "Bengaluru, Karnataka",
    capacity: "850 kW",
    savings: "₹1.1Cr/yr",
    co2: "720 T",
    highlight: "Achieved 60% renewable energy target, qualifying for green building certification.",
    image: "/images/System-Design-Engineering.jpg",
    icon: Building2,
    tag: "Commercial",
    accent: "#4a9eff",
  },
  {
    client: "NxtGen Data Centers",
    sector: "Data Center",
    location: "Hyderabad, Telangana",
    capacity: "5 MW",
    savings: "₹6.8Cr/yr",
    co2: "4,100 T",
    highlight: "Zero downtime solar + storage system keeping 99.99% uptime across 5 MW critical load.",
    image: "/images/maintenance.png",
    icon: Cpu,
    tag: "Data Center",
    accent: "#22c55e",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-28 bg-[#050a14]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">Case Studies</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Real Projects.
              <br />
              <span className="text-white/30">Real Results.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-xs text-base leading-relaxed"
          >
            Proven across 500+ enterprise deployments. See how we deliver.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-[#080f1e] border border-white/8 rounded-3xl overflow-hidden hover:border-white/15 transition-all"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e] via-[#080f1e]/30 to-transparent" />
                  {/* Tag */}
                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold"
                    style={{ borderColor: `${study.accent}30`, background: `${study.accent}15`, color: study.accent }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {study.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-white font-bold text-lg mb-1">{study.client}</h3>
                  <p className="text-white/30 text-sm mb-5">{study.location}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: "Capacity", value: study.capacity },
                      { label: "Annual Save", value: study.savings },
                      { label: "CO₂/yr", value: study.co2 },
                    ].map((stat, si) => (
                      <div key={si} className="bg-white/3 rounded-xl p-3 text-center">
                        <div className="text-sm font-bold text-white">{stat.value}</div>
                        <div className="text-[10px] text-white/30 uppercase tracking-wide mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    &quot;{study.highlight}&quot;
                  </p>

                  <button
                    className="flex items-center gap-2 text-sm font-semibold group/btn"
                    style={{ color: study.accent }}
                  >
                    Read Full Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
