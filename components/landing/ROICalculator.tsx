"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Building2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roofSizeOptions = [
  { label: "Small (up to 5,000 sq ft)", kw: 50 },
  { label: "Medium (5,000–20,000 sq ft)", kw: 200 },
  { label: "Large (20,000–50,000 sq ft)", kw: 500 },
  { label: "Very Large (50,000+ sq ft)", kw: 1000 },
];

const stateRates: Record<string, number> = {
  Gujarat: 8.5,
  Maharashtra: 10.2,
  Rajasthan: 7.8,
  Karnataka: 9.5,
  "Tamil Nadu": 9.0,
  Delhi: 8.0,
  "Uttar Pradesh": 7.5,
  Other: 9.0,
};

export default function ROICalculator() {
  const [capacityKW, setCapacityKW] = useState(200);
  const [state, setState] = useState("Maharashtra");
  const [operatingHours, setOperatingHours] = useState(8);
  const [workingDays, setWorkingDays] = useState(25);

  const tariff = stateRates[state] || 9;
  const unitsPer_day = capacityKW * operatingHours * 0.8; // 80% efficiency
  const unitsPerYear = unitsPer_day * workingDays * 12;
  const annualSavings = Math.round(unitsPerYear * tariff);
  const systemCostPerKW = 45000; // INR per kW (installed)
  const systemCost = capacityKW * systemCostPerKW;
  const subsidy = Math.min(systemCost * 0.3, 1500000); // 30% subsidy, max 15L
  const netCost = systemCost - subsidy;
  const paybackYears = +(netCost / annualSavings).toFixed(1);
  const roi25Year = Math.round(annualSavings * 25 - netCost);
  const co2PerYear = Math.round(unitsPerYear * 0.82); // kg CO2

  const metrics = [
    {
      label: "Annual Bill Savings",
      value: `₹${(annualSavings / 100000).toFixed(1)}L`,
      sub: "per year",
      color: "#22c55e",
    },
    {
      label: "Payback Period",
      value: `${paybackYears} yrs`,
      sub: "net of subsidy",
      color: "#f5a623",
    },
    {
      label: "25-Year Returns",
      value: `₹${(roi25Year / 10000000).toFixed(1)}Cr`,
      sub: "net profit",
      color: "#4a9eff",
    },
    {
      label: "CO₂ Saved / Year",
      value: `${(co2PerYear / 1000).toFixed(1)}T`,
      sub: "tonnes CO₂",
      color: "#a78bfa",
    },
  ];

  return (
    <section className="py-28 bg-[#050a14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f5a623]/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              ROI Calculator
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
              See Your Energy
              <br />
              <span className="text-white/30">Savings Instantly</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Estimate your solar ROI in seconds. Adjust the sliders to match your enterprise profile.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#080f1e] border border-white/8 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Inputs */}
              <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/8">
                <h3 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#f5a623]" />
                  Your Enterprise Profile
                </h3>

                {/* System Capacity Slider */}
                <div className="mb-8">
                  <div className="flex justify-between mb-3">
                    <label className="text-white/60 text-sm font-medium">System Capacity</label>
                    <span className="text-[#f5a623] font-bold text-sm">{capacityKW} kW</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={5000}
                    step={50}
                    value={capacityKW}
                    onChange={(e) => setCapacityKW(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#f5a623]"
                  />
                  <div className="flex justify-between mt-1 text-white/20 text-xs">
                    <span>50 kW</span><span>5,000 kW</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="mb-8">
                  <div className="flex justify-between mb-3">
                    <label className="text-white/60 text-sm font-medium">Daily Operating Hours</label>
                    <span className="text-[#f5a623] font-bold text-sm">{operatingHours} hrs</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={16}
                    step={1}
                    value={operatingHours}
                    onChange={(e) => setOperatingHours(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#f5a623]"
                  />
                  <div className="flex justify-between mt-1 text-white/20 text-xs">
                    <span>4 hrs</span><span>16 hrs</span>
                  </div>
                </div>

                {/* Working Days / Month */}
                <div className="mb-8">
                  <div className="flex justify-between mb-3">
                    <label className="text-white/60 text-sm font-medium">Working Days / Month</label>
                    <span className="text-[#f5a623] font-bold text-sm">{workingDays} days</span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={31}
                    step={1}
                    value={workingDays}
                    onChange={(e) => setWorkingDays(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#f5a623]"
                  />
                  <div className="flex justify-between mt-1 text-white/20 text-xs">
                    <span>15 days</span><span>31 days</span>
                  </div>
                </div>

                {/* State Select */}
                <div>
                  <label className="text-white/60 text-sm font-medium block mb-3">State / UT</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f5a623]/50 cursor-pointer"
                  >
                    {Object.keys(stateRates).map((s) => (
                      <option key={s} value={s} className="bg-[#080f1e]">{s}</option>
                    ))}
                  </select>
                  <p className="text-white/25 text-xs mt-2">Current tariff: ₹{tariff}/unit</p>
                </div>
              </div>

              {/* Results */}
              <div className="p-10">
                <h3 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#f5a623]" />
                  Your Projected Returns
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={i}
                      layout
                      className="bg-white/3 border border-white/8 rounded-2xl p-5"
                    >
                      <div className="text-2xl font-bold mb-1" style={{ color: m.color }}>
                        {m.value}
                      </div>
                      <p className="text-white/60 text-xs font-semibold">{m.label}</p>
                      <p className="text-white/25 text-xs">{m.sub}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Summary bar */}
                <div className="bg-[#f5a623]/8 border border-[#f5a623]/20 rounded-2xl p-5 mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-[#f5a623] fill-current" />
                    <span className="text-[#f5a623] text-xs font-bold uppercase tracking-widest">System Summary</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/40">Estimated System Cost</span>
                      <span className="text-white font-semibold">₹{(systemCost / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">Govt. Subsidy (est.)</span>
                      <span className="text-[#22c55e] font-semibold">- ₹{(subsidy / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex justify-between border-t border-white/8 pt-2">
                      <span className="text-white/60 font-semibold">Net Investment</span>
                      <span className="text-white font-bold">₹{(netCost / 100000).toFixed(1)}L</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-2xl h-13 font-bold bg-[#f5a623] hover:bg-[#e09520] text-black shadow-xl shadow-[#f5a623]/20"
                  asChild
                >
                  <Link href="/get-quote">
                    Get Detailed Proposal →
                  </Link>
                </Button>
                <p className="text-center text-white/25 text-xs mt-3">
                  * Estimates based on average tariffs. Actual savings may vary.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
