"use client";

import { useROICalculator } from "@/hooks/use-roi-calculator";
import CalculatorInputs from "./roi/CalculatorInputs";
import CalculatorSummary from "./roi/CalculatorSummary";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, BarChart3, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";

interface ROICalculatorProps {
  onEstimateChange?: (data: { capacity: string; bill: string }) => void;
}

export default function ROICalculator({ onEstimateChange }: ROICalculatorProps) {
  const calc = useROICalculator();
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileResults, setShowMobileResults] = useState(false);

  useEffect(() => {
    if (onEstimateChange) {
      onEstimateChange({
        capacity: calc.estimatedSystemSize > 0 ? calc.estimatedSystemSize.toString() : "",
        bill: calc.monthlyBill,
      });
    }
  }, [calc.estimatedSystemSize, calc.monthlyBill, onEstimateChange]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="roi-estimator" className="relative pt-10">
      <div className="rounded-[2.6rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(8,17,31,0.06)] md:p-10 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
            <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
            ROI Estimator
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            See your solar savings <br className="hidden md:block" /> before you commit.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Our planning tool uses your energy profile to generate a realistic first-pass estimate. 
            Adjust the sliders and options below to see how your payback and carbon impact shift.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Left: Inputs */}
          <div className="pb-20 lg:pb-0">
            <CalculatorInputs {...calc} />
          </div>

          {/* Right: Results (Sticky on Desktop) */}
          <div className="hidden lg:sticky lg:top-10 lg:block">
            <CalculatorSummary {...calc} />
          </div>
        </div>
      </div>

      {/* Mobile Sticky Summary Bar */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/80 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                 <div className="flex size-10 items-center justify-center rounded-full bg-slate-950 text-[var(--brand-lime)]">
                    <SunMedium className="size-5" />
                 </div>
                 <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Est. Size</div>
                    <div className="text-lg font-bold text-slate-950">{calc.estimatedSystemSize > 0 ? `${calc.estimatedSystemSize} kW` : "--"}</div>
                 </div>
              </div>
              <div className="flex flex-1 items-center justify-end gap-3">
                 <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Payback</div>
                    <div className="text-lg font-bold text-slate-950">{calc.paybackYears > 0 ? `${calc.paybackYears} yrs` : "--"}</div>
                 </div>
                 <Button
                    onClick={() => setShowMobileResults(true)}
                    className="size-11 rounded-full bg-slate-950 p-0 text-[var(--brand-lime)]"
                 >
                    <ChevronUp className="size-6" />
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Full Results Overlay */}
      <AnimatePresence>
        {showMobileResults && isMobile && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col bg-white"
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <h3 className="text-xl font-bold">Calculation Breakdown</h3>
              <Button
                variant="ghost"
                onClick={() => setShowMobileResults(false)}
                className="size-10 rounded-full p-0"
              >
                <ChevronDown className="size-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 pb-32">
              <CalculatorSummary {...calc} className="bg-slate-950 shadow-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
