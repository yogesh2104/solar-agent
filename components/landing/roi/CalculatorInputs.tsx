"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Factory, Home, Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ProjectMode,
  RoofType,
  UsageTiming,
  LoadProfile,
  modeOptions,
  roofOptions,
  usageTimingOptions,
  loadProfileOptions,
} from "@/hooks/use-roi-calculator";

interface CalculatorInputsProps {
  mode: ProjectMode;
  setMode: (mode: ProjectMode) => void;
  monthlyBill: string;
  setMonthlyBill: (bill: string) => void;
  roofType: RoofType;
  setRoofType: (roof: RoofType) => void;
  usageTiming: UsageTiming;
  setUsageTiming: (timing: UsageTiming) => void;
  loadProfile: LoadProfile;
  setLoadProfile: (profile: LoadProfile) => void;
  tariff: number;
}

export default function CalculatorInputs({
  mode,
  setMode,
  monthlyBill,
  setMonthlyBill,
  roofType,
  setRoofType,
  usageTiming,
  setUsageTiming,
  loadProfile,
  setLoadProfile,
  tariff,
}: CalculatorInputsProps) {
  // We can group these for better organization
  const sections = [
    {
      id: "profile",
      title: "Project Profile",
      description: "Define the type of installation",
    },
    {
      id: "usage",
      title: "Energy Usage",
      description: "Bill and consumption details",
    },
    {
      id: "site",
      title: "Site Details",
      description: "Roof and load patterns",
    },
  ];

  return (
    <div className="space-y-10">
      {/* 1. Mode Selection */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <SectionHeader num="01" title="Project Profile" />
          <div className="flex gap-2 rounded-full border border-slate-200 bg-white p-1">
            {modeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setMode(opt.value)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                  mode === opt.value
                    ? "bg-slate-950 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-950",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        {/* <div className="grid gap-4 sm:grid-cols-2">
          {modeOptions.map((opt) => {
            const active = mode === opt.value;
            const Icon = opt.value === "commercial" ? Factory : Home;
            return (
              <button
                key={opt.value}
                onClick={() => setMode(opt.value)}
                className={cn(
                  "relative overflow-hidden rounded-[1.6rem] border p-5 text-left transition-all",
                  active
                    ? "border-slate-950 bg-slate-50 ring-1 ring-slate-950"
                    : "border-slate-200 bg-white hover:border-slate-300",
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full transition-colors",
                      active
                        ? "bg-slate-950 -secondary"
                        : "bg-slate-100 text-slate-500",
                    )}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-950">
                      {opt.label}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-500">
                      {opt.detail}
                    </div>
                  </div>
                  {active && <Check className="size-4 text-slate-950" />}
                </div>
              </button>
            );
          })}
        </div> */}
      </section>

      {/* 2. Bill Input */}
      <section>
        <SectionHeader num="02" title="Monthly Electricity Spend" />
        <div className="mt-6 rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label
                htmlFor="monthlyBill"
                className="text-[10px] font-bold uppercase tracking-widest text-slate-400"
              >
                Bill Amount (INR)
              </label>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-xl font-bold text-slate-300">₹</span>
                <Input
                  id="monthlyBill"
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  className="border p-2 bg-transparent h-10 text-3xl font-bold text-slate-950 focus-visible:ring-0"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="hidden h-12 w-px bg-slate-100 sm:block" />
            <div className="hidden sm:block">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Model Tariff
              </div>
              <div className="mt-2 text-xl font-bold text-slate-950">
                ₹{tariff}/unit
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Current assumptions: average local tariff for {mode} connections.
          </p>
        </div>
      </section>

      {/* 3. Technical Details */}
      <section>
        <SectionHeader num="03" title="Technical Context" />

        <div className="mt-6 space-y-8">
          {/* Roof Type */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Roof Type & Structure
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {roofOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setRoofType(opt.value)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                    roofType === opt.value
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Usage Timing */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Daily Demand Peak
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {usageTimingOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setUsageTiming(opt.value)}
                  className={cn(
                    "rounded-2xl border p-4 text-left transition-all",
                    usageTiming === opt.value
                      ? "border-slate-950 bg-slate-50 ring-1 ring-slate-950"
                      : "border-slate-200 bg-white hover:border-slate-300",
                  )}
                >
                  <div className="text-xs font-bold text-slate-950">
                    {opt.label}
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">
                    {opt.detail}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Load Profile */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Annual Consistency
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {loadProfileOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setLoadProfile(opt.value)}
                  className={cn(
                    "rounded-2xl border p-4 text-left transition-all",
                    loadProfile === opt.value
                      ? "border-slate-950 bg-slate-50 ring-1 ring-slate-950"
                      : "border-slate-200 bg-white hover:border-slate-300",
                  )}
                >
                  <div className="text-xs font-bold text-slate-950">
                    {opt.label}
                  </div>
                  <div className="mt-1 text-[10px] text-slate-500">
                    {opt.detail}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
        {num}
      </span>
      <h4 className="text-lg font-bold tracking-tight text-slate-950">
        {title}
      </h4>
    </div>
  );
}
