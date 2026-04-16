"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "EPC Solar Projects",
    tag: "End-to-End",
    description:
      "Complete Engineering, Procurement & Construction (EPC) services. We handle site assessment, structural design, equipment procurement, installation, grid synchronization, and commissioning — all under one roof.",
    highlights: ["Turnkey project delivery", "Grid tie-up & net metering", "DISCOM approvals managed"],
    image: "/images/Solar-Panel-Installation.webp",
  },
  {
    id: "02",
    title: "OPEX & PPA Models",
    tag: "Zero Investment",
    description:
      "Go solar with zero capital expenditure. Under our RESCO/OPEX model, we install and own the solar plant on your rooftop — you simply buy cheaper energy. Ideal for enterprises looking to reduce costs without capital commitment.",
    highlights: ["₹0 upfront investment", "Guaranteed savings from Day 1", "15–25 year PPA contracts"],
    image: "/images/System-Design-Engineering.jpg",
  },
  {
    id: "03",
    title: "C&I Battery Storage",
    tag: "Energy Storage",
    description:
      "Commercial lithium-ion battery systems with advanced BMS. Store excess solar energy, reduce peak demand charges, and ensure continuity during grid failures — reducing your total energy cost by an additional 15–30%.",
    highlights: ["LFP Battery technology", "Peak demand shaving", "CriticalPower backup mode"],
    image: "/images/industrial.png",
  },
  {
    id: "04",
    title: "Smart Monitoring & O&M",
    tag: "24/7 Support",
    description:
      "AI-powered SCADA monitoring with predictive maintenance. Our IoT sensors and analytics platform proactively identifies underperformance before it impacts yield, with a dedicated O&M team on call 24/7.",
    highlights: ["Real-time generation data", "Predictive fault detection", "Remote & on-site O&M"],
    image: "/images/maintenance.png",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-28 bg-[#080f1e] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">What We Deliver</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Enterprise-Grade
              <br />
              <span className="text-white/30">Solar Services</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-base leading-relaxed"
          >
            Bankable solar solutions from 100 kW to 50 MW, backed by a decade of C&I project expertise.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Accordion List */}
          <div className="w-full md:w-1/2 space-y-2">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "border-[#f5a623]/40 bg-[#f5a623]/5"
                    : "border-white/8 bg-white/2 hover:border-white/15"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center justify-between gap-6 p-6">
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-xs font-black tracking-widest transition-colors ${
                        activeTab === index ? "text-[#f5a623]" : "text-white/20"
                      }`}
                    >
                      {service.id}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        activeTab === index ? "bg-[#f5a623]/15 text-[#f5a623]" : "bg-white/5 text-white/30"
                      }`}>
                        {service.tag}
                      </span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 transition-all ${
                    activeTab === index
                      ? "border-[#f5a623]/50 bg-[#f5a623]/20 text-[#f5a623]"
                      : "border-white/10 text-white/30"
                  }`}>
                    {activeTab === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 border-t border-white/5">
                        <p className="text-white/50 text-sm leading-relaxed mt-4 mb-5">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 text-[#f5a623] flex-shrink-0" />
                              <span className="text-sm text-white/70 font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 sticky top-28 self-start"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={{
                      transform: activeTab === index ? "scale(1.05)" : "scale(1)",
                      transition: "transform 1.5s ease-out",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-[#050a14]/20 to-transparent" />
                  <div className="absolute inset-x-8 bottom-8">
                    <span className="text-[#f5a623] text-xs font-bold uppercase tracking-widest mb-2 block">{service.tag}</span>
                    <h4 className="text-white text-2xl font-bold">{service.title}</h4>
                  </div>
                </motion.div>
              ))}
              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#f5a623]/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
