"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Tata Power", abbr: "TATA" },
  { name: "Adani Group", abbr: "ADANI" },
  { name: "Reliance Industries", abbr: "RIL" },
  { name: "Infosys Campus", abbr: "INFY" },
  { name: "Amazon Warehouses", abbr: "AMZN" },
  { name: "Mahindra Factories", abbr: "M&M" },
  { name: "Godrej Properties", abbr: "GODREJ" },
  { name: "Asian Paints", abbr: "AP" },
  { name: "Wipro Tech Parks", abbr: "WIPRO" },
  { name: "JSW Steel Plants", abbr: "JSW" },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-[#080f1e] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.3em]">
          Trusted by India&apos;s leading enterprises
        </p>
      </div>

      <div className="relative">
        {/* Left & Right fades */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#080f1e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#080f1e] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {allClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-[#f5a623]/20 transition-all group cursor-default shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center">
                <span className="text-[9px] font-black text-[#f5a623]">{client.abbr.slice(0, 3)}</span>
              </div>
              <span className="text-white/50 font-semibold text-sm group-hover:text-white/80 transition-colors whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
