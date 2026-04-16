"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Sun, CheckCircle2, Award, HeadphonesIcon } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Bankable Project Finance",
    description: "Our EPC credentials are accepted by all major banks and NBFCs for project financing. We assist in preparing DPR, TEFR, and loan documentation.",
    icon: TrendingUp,
    highlight: "100% Financed Options",
  },
  {
    title: "In-House Engineering Team",
    description: "60+ certified solar engineers with PMP and NABCEP credentials. All designs are done in-house using PVSyst, AutoCAD, and PV*SOL software.",
    icon: Award,
    highlight: "60+ Certified Engineers",
  },
  {
    title: "Tier-1 Equipment Only",
    description: "We exclusively use Tier-1 panels (Longi, JA Solar, Waaree) and Tier-1 inverters (SMA, Huawei, ABB). No compromise on component quality.",
    icon: ShieldCheck,
    highlight: "Tier-1 Components",
  },
  {
    title: "Dedicated Account Manager",
    description: "Every enterprise client gets a dedicated relationship manager who coordinates across engineering, installation, DISCOM liaison, and O&M teams.",
    icon: HeadphonesIcon,
    highlight: "Single Point of Contact",
  },
  {
    title: "Performance Guarantee",
    description: "We guarantee minimum P90 generation yield backed by a financial SLA. Underperformance results in compensation credits — no excuses.",
    icon: Sun,
    highlight: "P90 Yield Guarantee",
  },
  {
    title: "Regulatory & Compliance",
    description: "Full support for DISCOM net metering applications, REC registration, RECs trading, and carbon credit certification for your ESG reports.",
    icon: CheckCircle2,
    highlight: "End-to-End Compliance",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#080f1e]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Suntrix enterprise solar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/90 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#080f1e]/30 to-transparent" />
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-6 bg-[#050a14] border border-[#f5a623]/20 rounded-2xl p-6 shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#f5a623]/15 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-[#f5a623] w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">78%</div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Avg Bill Drop</p>
                </div>
              </div>
              <p className="text-[11px] text-white/30 italic">
                &quot;Switching to Suntrix was the best decision for our warehouse.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-8 -left-6 bg-[#050a14] border border-white/10 rounded-2xl p-5 shadow-2xl"
            >
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Deployed Capacity</p>
              <div className="text-3xl font-bold text-[#f5a623]">2.8 GW</div>
              <div className="flex gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="h-1 flex-1 rounded-full bg-[#f5a623]/40" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">Why Suntrix</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                The Enterprise Solar
                <br />
                <span className="text-white/30">Partner You Can Trust</span>
              </h2>
              <p className="text-white/40 text-base leading-relaxed">
                10+ years. 2.8 GW deployed. 500+ enterprise clients. We don&apos;t just install solar — we engineer energy independence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group"
                  >
                    <div className="w-11 h-11 bg-[#f5a623]/8 border border-[#f5a623]/15 rounded-xl flex items-center justify-center text-[#f5a623] mb-4 group-hover:bg-[#f5a623]/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#f5a623] uppercase tracking-widest block mb-1">
                      {benefit.highlight}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
