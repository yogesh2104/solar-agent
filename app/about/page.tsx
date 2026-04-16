"use client";

import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Zap, Shield, TrendingUp, Users, ArrowUpRight, Award, Building2, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Zap,
    title: "Sustainability",
    description: "Committed to providing 100% clean and renewable energy solutions for a greener planet.",
    accent: "#f5a623",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our systems are built to last, with 25-year performance warranties and dedicated 24/7 support.",
    accent: "#4a9eff",
  },
  {
    icon: TrendingUp,
    title: "Bankability",
    description: "EPC credentials accepted by all major banks. We prepare DPR, TEFR, and loan documentation.",
    accent: "#22c55e",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Dedicated account managers for every enterprise. One point of contact from design to O&M.",
    accent: "#a78bfa",
  },
];

const milestones = [
  { year: "2014", event: "Founded in Mumbai with 3 engineers and a vision" },
  { year: "2016", event: "First 1 MW commercial installation in Pune" },
  { year: "2018", event: "Crossed 100 MW cumulative capacity" },
  { year: "2020", event: "Launched 24/7 AI-powered monitoring platform" },
  { year: "2022", event: "Expanded to 18 states across India" },
  { year: "2024", event: "Crossed 2.8 GW deployed, 500+ enterprise clients" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050a14] pb-0">
      <StaticPageHeader
        title="About"
        highlight="Suntrix"
        breadcrumb="About Us"
        description="India's most trusted B2B solar energy partner. A decade of delivering bankable, enterprise-grade solar solutions across C&I and government sectors."
      />

      {/* Our Story */}
      <section className="py-28 bg-[#050a14] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                <Image
                  src="/images/power-generation.jpg"
                  alt="Solar Installation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/60">Years of Excellence</div>
                </div>
              </div>

              {/* Floating award card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-8 -right-6 bg-[#080f1e] border border-[#f5a623]/20 p-6 rounded-2xl shadow-2xl hidden md:block max-w-[190px]"
              >
                <Award className="w-9 h-9 text-[#f5a623] mb-3" />
                <h4 className="font-bold text-white text-sm leading-tight">Industry Leader in B2B Solar</h4>
                <p className="text-white/30 text-xs mt-1">MNRE Recognized EPC</p>
              </motion.div>

              {/* Stats chip */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -left-6 bg-[#080f1e] border border-white/10 p-5 rounded-2xl shadow-2xl hidden md:flex items-center gap-3"
              >
                <BarChart3 className="w-6 h-6 text-[#f5a623]" />
                <div>
                  <div className="text-xl font-bold text-white">2.8 GW</div>
                  <div className="text-white/30 text-xs">Deployed Capacity</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/20 text-[#f5a623] text-xs font-bold uppercase tracking-wider">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Pioneering the Future of <span className="text-white/30">Clean Energy</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Founded in 2014 by solar engineers who wanted to bring institutional-grade solar to Indian enterprises, Suntrix has grown from a 3-person team in Mumbai to India&apos;s most trusted B2B solar EPC company.
              </p>
              <p className="text-base text-white/40 leading-relaxed">
                We don&apos;t build residential rooftops — we engineer energy independence for factories, tech parks, data centers, and government buildings. Every project we take carries a performance guarantee and dedicated O&M for the lifetime of the plant.
              </p>
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-3 text-[#f5a623] font-bold hover:gap-4 transition-all group"
              >
                Partner with us
                <div className="w-9 h-9 rounded-full border border-[#f5a623]/30 flex items-center justify-center group-hover:bg-[#f5a623] group-hover:border-[#f5a623] group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#080f1e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">Timeline</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Milestones</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f5a623]/30 via-[#f5a623]/10 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex gap-6 md:gap-12 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${i % 2 !== 0 ? "md:text-right" : ""} pl-10 md:pl-0`}>
                    <div className="bg-[#050a14] border border-white/8 rounded-2xl p-5 hover:border-[#f5a623]/20 transition-colors">
                      <span className="text-[#f5a623] font-black text-sm">{m.year}</span>
                      <p className="text-white/60 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:relative md:left-auto w-3 h-3 rounded-full bg-[#f5a623] border-4 border-[#080f1e] flex-shrink-0 md:mx-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#050a14]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Core <span className="text-white/30">Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#080f1e] border border-white/8 p-8 rounded-3xl hover:border-white/15 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-7 border group-hover:scale-110 transition-transform"
                    style={{ background: `${value.accent}12`, borderColor: `${value.accent}25` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: value.accent }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#080f1e] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden">
            {[
              { label: "GW Installed", value: "2.8+" },
              { label: "Enterprise Clients", value: "500+" },
              { label: "States Served", value: "18+" },
              { label: "Tonnes CO₂ Offset", value: "1.2M" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#080f1e] px-8 py-10 flex flex-col items-start"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 leading-none">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
