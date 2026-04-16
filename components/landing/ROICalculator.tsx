"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Factory,
  Home,
  Leaf,
  Receipt,
  SunMedium,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ProjectMode = "residential" | "commercial";
type RoofType = "rcc" | "metal" | "pitched" | "ground" | "canopy";
type UsageTiming = "daytime" | "balanced" | "evening";
type LoadProfile = "steady" | "single_shift" | "seasonal";

const modeOptions: Array<{
  value: ProjectMode;
  label: string;
  detail: string;
  icon: typeof Home;
}> = [
  {
    value: "commercial",
    label: "Commercial",
    detail: "Factories, warehouses, campuses, and multi-site portfolios",
    icon: Factory,
  },
  {
    value: "residential",
    label: "Residential",
    detail: "Homes and small rooftop systems with household load patterns",
    icon: Home,
  },
];

const roofOptions: Array<{
  value: RoofType;
  label: string;
  detail: string;
  generationFactor: number;
  costFactor: number;
}> = [
  {
    value: "rcc",
    label: "RCC flat roof",
    detail: "Standard terrace layout with strong mounting flexibility",
    generationFactor: 1,
    costFactor: 1,
  },
  {
    value: "metal",
    label: "Metal sheet roof",
    detail: "Common for factories and warehouses",
    generationFactor: 0.99,
    costFactor: 1.02,
  },
  {
    value: "pitched",
    label: "Pitched or tiled roof",
    detail: "Works for homes with additional layout constraints",
    generationFactor: 0.96,
    costFactor: 1.08,
  },
  {
    value: "ground",
    label: "Ground mounted",
    detail: "Open land with stronger layout flexibility",
    generationFactor: 1.06,
    costFactor: 0.97,
  },
  {
    value: "canopy",
    label: "Parking or elevated canopy",
    detail: "Premium structure for commercial spaces",
    generationFactor: 1.01,
    costFactor: 1.14,
  },
];

const usageTimingOptions: Array<{
  value: UsageTiming;
  label: string;
  detail: string;
  captureFactor: number;
}> = [
  {
    value: "daytime",
    label: "Mostly daytime",
    detail: "Best fit for self-consumption with solar hours",
    captureFactor: 1.08,
  },
  {
    value: "balanced",
    label: "Balanced usage",
    detail: "Demand spreads across the full day",
    captureFactor: 1,
  },
  {
    value: "evening",
    label: "Evening heavy",
    detail: "Battery or net-metering may matter more",
    captureFactor: 0.86,
  },
];

const loadProfileOptions: Array<{
  value: LoadProfile;
  label: string;
  detail: string;
  captureFactor: number;
}> = [
  {
    value: "steady",
    label: "Steady all year",
    detail: "Fairly predictable monthly demand",
    captureFactor: 1.02,
  },
  {
    value: "single_shift",
    label: "Single-shift or weekday heavy",
    detail: "Demand clusters around fixed operating windows",
    captureFactor: 0.97,
  },
  {
    value: "seasonal",
    label: "Seasonal peaks",
    detail: "Load varies significantly over the year",
    captureFactor: 0.91,
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function roundSystemSize(value: number, mode: ProjectMode) {
  if (mode === "residential") {
    return Math.max(1, Math.round(value * 2) / 2);
  }

  return Math.max(10, Math.round(value / 5) * 5);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatCompactCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export default function ROICalculator() {
  const [mode, setMode] = useState<ProjectMode>("commercial");
  const [monthlyBill, setMonthlyBill] = useState("150000");
  const [roofType, setRoofType] = useState<RoofType>("metal");
  const [usageTiming, setUsageTiming] = useState<UsageTiming>("daytime");
  const [loadProfile, setLoadProfile] = useState<LoadProfile>("steady");

  const billValue = Number(monthlyBill) > 0 ? Number(monthlyBill) : 0;
  const selectedRoof = roofOptions.find((option) => option.value === roofType) ?? roofOptions[0];
  const selectedTiming =
    usageTimingOptions.find((option) => option.value === usageTiming) ?? usageTimingOptions[0];
  const selectedLoad =
    loadProfileOptions.find((option) => option.value === loadProfile) ?? loadProfileOptions[0];

  const tariff = mode === "residential" ? 7.2 : 10.4;
  const monthlyUnits = billValue > 0 ? billValue / tariff : 0;
  const monthlyGenerationPerKw =
    (mode === "residential" ? 115 : 121) * selectedRoof.generationFactor;
  const targetOffset = clamp(
    (mode === "residential" ? 0.68 : 0.8) *
      selectedTiming.captureFactor *
      selectedLoad.captureFactor,
    0.42,
    0.94,
  );
  const rawSystemSize =
    monthlyUnits > 0 ? (monthlyUnits * targetOffset) / monthlyGenerationPerKw : 0;
  const estimatedSystemSize = billValue > 0 ? roundSystemSize(rawSystemSize, mode) : 0;
  const annualGeneration = estimatedSystemSize * monthlyGenerationPerKw * 12;
  const annualSavings = Math.min(
    annualGeneration * tariff * clamp(selectedTiming.captureFactor * selectedLoad.captureFactor, 0.72, 0.98),
    billValue * 12 * 0.96,
  );
  const costPerKw = (mode === "residential" ? 58000 : 46000) * selectedRoof.costFactor;
  const estimatedInvestment = estimatedSystemSize * costPerKw;
  const paybackYears = annualSavings > 0 ? +(estimatedInvestment / annualSavings).toFixed(1) : 0;
  const carbonSavings = annualGeneration > 0 ? +(annualGeneration * 0.82 / 1000).toFixed(1) : 0;
  const offsetPercent = billValue > 0 ? Math.round((annualSavings / (billValue * 12)) * 100) : 0;

  const incentiveTitle =
    mode === "residential" ? "Potential rooftop incentive" : "Commercial incentive outlook";
  const incentiveBody =
    mode === "residential"
      ? "Eligible households may benefit from rooftop subsidy programs subject to current scheme rules, DISCOM requirements, and capacity brackets. Final proposal will confirm what is actually available."
      : "Commercial and industrial projects usually depend more on accelerated depreciation, state policy support, or OPEX and PPA structures than on direct rooftop subsidy. Final proposal will map the most usable route.";

  const metrics = [
    {
      icon: Receipt,
      label: "Estimated system size",
      value: estimatedSystemSize > 0 ? `${estimatedSystemSize} kW` : "--",
      detail: "Based on bill, mode, and usage fit",
    },
    {
      icon: Wallet,
      label: "Estimated annual savings",
      value: annualSavings > 0 ? formatCompactCurrency(annualSavings) : "--",
      detail: "Planning estimate before site review",
    },
    {
      icon: BarChart3,
      label: "Estimated payback",
      value: paybackYears > 0 ? `${paybackYears} yrs` : "--",
      detail: "Payback changes with tariff and structure",
    },
    {
      icon: Leaf,
      label: "Carbon savings",
      value: carbonSavings > 0 ? `${carbonSavings} tCO2` : "--",
      detail: "Approximate annual emissions avoided",
    },
  ];

  return (
    <section id="roi-estimator" className="pt-10">
      <div className="rounded-[2.6rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(8,17,31,0.06)] md:p-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
            <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
            Quote calculator
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Estimate system size, savings, payback, and carbon impact in one pass.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            This is a planning tool, not a final engineering study. It uses your monthly bill and usage profile to show a realistic first-pass estimate before a detailed proposal is prepared.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2.1rem] bg-[#f7fbff] p-6 md:p-7"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Project profile
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {modeOptions.map((option) => {
                const Icon = option.icon;
                const active = mode === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setMode(option.value)}
                    className={cn(
                      "rounded-[1.6rem] border p-4 text-left transition-all",
                      active
                        ? "border-slate-950 bg-slate-950 text-white shadow-[0_20px_40px_rgba(8,17,31,0.16)]"
                        : "border-slate-200 bg-white text-slate-950 hover:border-slate-300",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex size-10 items-center justify-center rounded-full",
                          active ? "bg-white/12 text-[var(--brand-lime)]" : "bg-[var(--brand-sky)] text-slate-950",
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <div className="text-base font-semibold">{option.label}</div>
                        <div className={cn("mt-1 text-sm leading-6", active ? "text-white/64" : "text-slate-600")}>
                          {option.detail}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-white p-5">
              <label htmlFor="monthlyBill" className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Monthly electricity bill
              </label>
              <div className="mt-3 flex items-center gap-3">
                <span className="rounded-full bg-slate-950 px-3 py-2 text-sm font-semibold text-white">
                  INR
                </span>
                <Input
                  id="monthlyBill"
                  type="number"
                  min={0}
                  value={monthlyBill}
                  onChange={(event) => setMonthlyBill(event.target.value)}
                  className="h-12 rounded-xl border-slate-200 bg-slate-50 text-lg font-semibold text-slate-950"
                  placeholder={mode === "residential" ? "6000" : "150000"}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                The calculator assumes an average tariff of INR {tariff.toFixed(1)} per unit for the selected mode.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Roof type
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {roofOptions.map((option) => {
                  const active = roofType === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setRoofType(option.value)}
                      className={cn(
                        "rounded-[1.5rem] border p-4 text-left transition-colors",
                        active
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-950 hover:border-slate-300",
                      )}
                    >
                      <div className="text-sm font-semibold">{option.label}</div>
                      <div className={cn("mt-2 text-sm leading-6", active ? "text-white/64" : "text-slate-600")}>
                        {option.detail}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                When do you use the most power?
              </div>
              <div className="mt-4 grid gap-3">
                {usageTimingOptions.map((option) => {
                  const active = usageTiming === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setUsageTiming(option.value)}
                      className={cn(
                        "rounded-[1.5rem] border p-4 text-left transition-colors",
                        active
                          ? "border-[var(--brand-lime)] bg-[var(--brand-lime)]/25 text-slate-950"
                          : "border-slate-200 bg-white text-slate-950 hover:border-slate-300",
                      )}
                    >
                      <div className="text-sm font-semibold">{option.label}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{option.detail}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Consumption pattern
              </div>
              <div className="mt-4 grid gap-3">
                {loadProfileOptions.map((option) => {
                  const active = loadProfile === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setLoadProfile(option.value)}
                      className={cn(
                        "rounded-[1.5rem] border p-4 text-left transition-colors",
                        active
                          ? "border-slate-950 bg-white shadow-[0_16px_35px_rgba(8,17,31,0.08)]"
                          : "border-slate-200 bg-white text-slate-950 hover:border-slate-300",
                      )}
                    >
                      <div className="text-sm font-semibold text-slate-950">{option.label}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{option.detail}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 }}
            className="rounded-[2.1rem] bg-[var(--brand-ink)] p-6 text-white md:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                  Estimated outcome
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  Your rough solar economics
                </h3>
              </div>
              <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-[var(--brand-lime)]">
                <SunMedium className="size-6" />
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-[var(--brand-lime)]">
                        <Icon className="size-4" />
                      </span>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                        {metric.label}
                      </div>
                    </div>
                    <div className="mt-4 text-3xl font-semibold tracking-tight">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/58">{metric.detail}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/7 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                System summary
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/58">Estimated monthly units</span>
                  <span className="font-semibold text-white">
                    {monthlyUnits > 0 ? `${Math.round(monthlyUnits).toLocaleString("en-IN")} kWh` : "--"}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/58">Estimated annual generation</span>
                  <span className="font-semibold text-white">
                    {annualGeneration > 0 ? `${Math.round(annualGeneration).toLocaleString("en-IN")} kWh` : "--"}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/58">Estimated investment</span>
                  <span className="font-semibold text-white">
                    {estimatedInvestment > 0 ? formatCompactCurrency(estimatedInvestment) : "--"}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white/58">Approximate bill offset</span>
                  <span className="font-semibold text-white">
                    {billValue > 0 ? `${offsetPercent}%` : "--"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.8rem] bg-white p-5 text-slate-950">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {incentiveTitle}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{incentiveBody}</p>
              <div className="mt-4 rounded-[1.3rem] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                Current planning assumptions: {selectedRoof.label.toLowerCase()}, {selectedTiming.label.toLowerCase()} usage, and {selectedLoad.label.toLowerCase()} demand profile.
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-[var(--brand-lime)] px-6 text-sm font-semibold text-slate-950 hover:bg-[var(--brand-lime)]/90"
              >
                <Link href="#proposal-form">
                  Request final proposal
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <div className="flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/58">
                Planning range: {annualSavings > 0 ? formatCurrency(annualSavings) : "--"} annual savings
              </div>
            </div>

            <p className="mt-4 text-xs leading-6 text-white/42">
              These figures are directional only. Final savings, payback, and size depend on site survey, approved interconnection path, structure design, and detailed energy data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
