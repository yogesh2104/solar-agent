"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Leaf,
  Receipt,
  SunMedium,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CalculatorSummaryProps {
  estimatedSystemSize: number;
  annualSavings: number;
  paybackYears: number;
  paybackRatio: number;
  carbonSavings: number;
  monthlyUnits: number;
  annualGeneration: number;
  estimatedInvestment: number;
  offsetPercent: number;
  incentiveTitle: string;
  incentiveBody: string;
  className?: string;
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

export default function CalculatorSummary({
  estimatedSystemSize,
  annualSavings,
  paybackYears,
  paybackRatio,
  carbonSavings,
  monthlyUnits,
  annualGeneration,
  estimatedInvestment,
  offsetPercent,
  incentiveTitle,
  incentiveBody,
  className,
}: CalculatorSummaryProps) {
  const metrics = [
    {
      icon: Receipt,
      label: "System Size",
      value: estimatedSystemSize > 0 ? `${estimatedSystemSize} kW` : "--",
      detail: "Based on bill & usage",
    },
    {
      icon: Wallet,
      label: "Annual Savings",
      value: annualSavings > 0 ? formatCompactCurrency(annualSavings) : "--",
      detail: "Planning estimate",
    },
    {
      icon: BarChart3,
      label: "Estimated Payback",
      value: paybackYears > 0 ? `${paybackYears} yrs` : "--",
      detail: "Subject to tariff",
    },
    {
      icon: Leaf,
      label: "Carbon Savings",
      value: carbonSavings > 0 ? `${carbonSavings} tCO2` : "--",
      detail: "Annual emissions avoided",
    },
  ];

  return (
    <div
      className={cn(
        "rounded-[2.1rem] bg-[var(--brand-ink)] p-6 text-white md:p-8",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Estimated outcome
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">
            Solar Economics
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
              className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5 transition-colors hover:bg-white/8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-[var(--brand-lime)]">
                  <Icon className="size-4" />
                </span>
                <div className="text-[10px] font-semibold uppercase text-white/45">
                  {metric.label}
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight">
                {metric.value}
              </div>
              {metric.label === "Estimated Payback" && paybackYears > 0 && (
                <div className="mt-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${paybackRatio * 100}%` }}
                    className="h-1 bg-[var(--brand-lime)]"
                  />
                </div>
              )}
              <p className="mt-1 text-[11px] leading-relaxed text-white/58">
                {metric.detail}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/7 p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
          Breakdown
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <DetailRow
            label="Monthly Units"
            value={
              monthlyUnits > 0
                ? `${Math.round(monthlyUnits).toLocaleString()} kWh`
                : "--"
            }
          />
          <DetailRow
            label="Annual Gen"
            value={
              annualGeneration > 0
                ? `${Math.round(annualGeneration).toLocaleString()} kWh`
                : "--"
            }
          />
          <DetailRow
            label="Est. Investment"
            value={
              estimatedInvestment > 0
                ? formatCompactCurrency(estimatedInvestment)
                : "--"
            }
          />
          <DetailRow
            label="Bill Offset"
            value={offsetPercent > 0 ? `${offsetPercent}%` : "--"}
            highlight
          />
        </div>
      </div>

      {/* <div className="mt-6 rounded-[1.8rem] bg-white p-5 text-slate-950">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          {incentiveTitle}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {incentiveBody}
        </p>
      </div> */}

      <div className="mt-6 flex flex-col gap-3">
        <Button
          asChild
          className="h-14 rounded-full bg-[var(--brand-lime)] px-8 text-base font-bold text-slate-950 hover:bg-[var(--brand-lime)]/90"
        >
          <Link href="#proposal-form">
            Request Proposal
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-white/58">{label}</span>
      <span
        className={cn(
          "font-semibold text-white",
          highlight && "text-[var(--brand-lime)]",
        )}
      >
        {value}
      </span>
    </div>
  );
}
