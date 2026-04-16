"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Building2, Factory, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    icon: Building2,
    title: "Commercial Buildings",
    desc: "Office parks, malls, and corporate campuses. Reduce operational costs and hit your ESG targets with rooftop solar systems tailored for commercial real estate.",
    metric: "Up to 75% OPEX reduction",
    gradient: "from-[#1a3f6f]/80 to-[#0d1f3c]/80",
    accent: "#4a9eff",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    desc: "High-voltage solar solutions for factories and heavy industries. Designed to handle peak loads, shift tariffs, and operate seamlessly with industrial power demands.",
    metric: "100 kW – 50 MW capacity",
    gradient: "from-[#3d1a00]/80 to-[#260f00]/80",
    accent: "#f5a623",
  },
  {
    icon: Cpu,
    title: "Data Centers & IT Parks",
    desc: "Mission-critical solar + storage systems with built-in redundancy. Keep your uptime SLAs intact while transitioning to 100% renewable energy.",
    metric: "99.99% availability SLA",
    gradient: "from-[#0d2f1a]/80 to-[#061a0d]/80",
    accent: "#22c55e",
  },
];

export default function Innovation() {
  return (
    <section className="py-28 bg-[#050a14]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-5">B2B Solar Solutions</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Built for
              <br />
              <span className="text-white/30">Enterprises at Scale</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <p className="text-white/50 text-lg leading-relaxed">
              From 50 kW to 50 MW, we design and deploy solar infrastructure that matches your scale, ambition, and energy consumption profile.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-6 text-[#f5a623] font-semibold hover:gap-3 transition-all group"
            >
              Explore all solutions
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative bg-gradient-to-br ${sol.gradient} border border-white/8 rounded-3xl p-8 flex flex-col justify-between h-[400px] overflow-hidden group hover:border-white/15 transition-all`}
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ background: sol.accent }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border"
                    style={{ background: `${sol.accent}15`, borderColor: `${sol.accent}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: sol.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{sol.desc}</p>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="text-sm font-bold px-3 py-1.5 rounded-full border"
                    style={{ color: sol.accent, borderColor: `${sol.accent}30`, background: `${sol.accent}10` }}
                  >
                    {sol.metric}
                  </span>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform"
                    style={{ borderColor: `${sol.accent}30`, background: `${sol.accent}15` }}
                  >
                    <ArrowUpRight className="w-4 h-4" style={{ color: sol.accent }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Wide feature strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden h-[320px] group"
        >
          <Image
            src="/images/power-generation.jpg"
            alt="Large scale solar farm"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/95 via-[#050a14]/70 to-transparent" />
          <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-[#f5a623]/20 border border-[#f5a623]/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#f5a623] fill-current" />
              </div>
              <span className="text-[#f5a623] text-xs font-bold uppercase tracking-widest">Suntrix Enterprise</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Brighter Choice for a<br />
              <span className="text-[#f5a623] italic">Brighter</span> Future
            </h3>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white font-semibold hover:text-[#f5a623] transition-colors group/link"
            >
              Read our mission
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-[#f5a623] group-hover/link:translate-x-1 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          {/* Animated stat */}
          <div className="absolute bottom-12 right-12 hidden md:block text-right">
            <div className="text-7xl font-bold text-white/8">331K+</div>
            <p className="text-white/30 text-xs uppercase tracking-widest">commercial installations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
