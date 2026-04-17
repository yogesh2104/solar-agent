import { useState, useMemo } from "react";

export type ProjectMode = "residential" | "commercial";
export type RoofType = "rcc" | "metal" | "pitched" | "ground" | "canopy";
export type UsageTiming = "daytime" | "balanced" | "evening";
export type LoadProfile = "steady" | "single_shift" | "seasonal";

export const modeOptions: Array<{
  value: ProjectMode;
  label: string;
  detail: string;
}> = [
  {
    value: "commercial",
    label: "Commercial",
    detail: "Factories, warehouses, and industrial sites",
  },
  {
    value: "residential",
    label: "Residential",
    detail: "Homes and rooftop solar for households",
  },
];

export const roofOptions: Array<{
  value: RoofType;
  label: string;
  detail: string;
  generationFactor: number;
  costFactor: number;
}> = [
  {
    value: "rcc",
    label: "RCC flat roof",
    detail: "Standard terrace with mounting flexibility",
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
    detail: "Works for homes with constraints",
    generationFactor: 0.96,
    costFactor: 1.08,
  },
  {
    value: "ground",
    label: "Ground mounted",
    detail: "Open land with flexibility",
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

export const usageTimingOptions: Array<{
  value: UsageTiming;
  label: string;
  detail: string;
  captureFactor: number;
}> = [
  {
    value: "daytime",
    label: "Mostly daytime",
    detail: "Best fit for solar hours",
    captureFactor: 1.08,
  },
  {
    value: "balanced",
    label: "Balanced usage",
    detail: "Demand spreads across the day",
    captureFactor: 1,
  },
  {
    value: "evening",
    label: "Evening heavy",
    detail: "Battery or net-metering focus",
    captureFactor: 0.86,
  },
];

export const loadProfileOptions: Array<{
  value: LoadProfile;
  label: string;
  detail: string;
  captureFactor: number;
}> = [
  {
    value: "steady",
    label: "Steady all year",
    detail: "Predictable monthly demand",
    captureFactor: 1.02,
  },
  {
    value: "single_shift",
    label: "Single-shift or weekday heavy",
    detail: "Demand clusters around fixed windows",
    captureFactor: 0.97,
  },
  {
    value: "seasonal",
    label: "Seasonal peaks",
    detail: "Load varies significantly",
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

export function useROICalculator() {
  const [mode, setMode] = useState<ProjectMode>("commercial");
  const [monthlyBill, setMonthlyBill] = useState("150000");
  const [roofType, setRoofType] = useState<RoofType>("metal");
  const [usageTiming, setUsageTiming] = useState<UsageTiming>("daytime");
  const [loadProfile, setLoadProfile] = useState<LoadProfile>("steady");

  const results = useMemo(() => {
    const billValue = Number(monthlyBill) > 0 ? Number(monthlyBill) : 0;
    const selectedRoof = roofOptions.find((o) => o.value === roofType) ?? roofOptions[0];
    const selectedTiming = usageTimingOptions.find((o) => o.value === usageTiming) ?? usageTimingOptions[0];
    const selectedLoad = loadProfileOptions.find((o) => o.value === loadProfile) ?? loadProfileOptions[0];

    const tariff = mode === "residential" ? 7.2 : 10.4;
    const monthlyUnits = billValue > 0 ? billValue / tariff : 0;
    
    // Base monthly generation per kW (varies by mode/system efficiency)
    const monthlyGenerationPerKw = (mode === "residential" ? 115 : 121) * selectedRoof.generationFactor;
    
    // How much of the bill can we realistically offset with solar?
    const targetOffset = clamp(
      (mode === "residential" ? 0.68 : 0.8) *
        selectedTiming.captureFactor *
        selectedLoad.captureFactor,
      0.42,
      0.94,
    );

    const rawSystemSize = monthlyUnits > 0 ? (monthlyUnits * targetOffset) / monthlyGenerationPerKw : 0;
    const estimatedSystemSize = billValue > 0 ? roundSystemSize(rawSystemSize, mode) : 0;
    const annualGeneration = estimatedSystemSize * monthlyGenerationPerKw * 12;
    
    // Annual savings calculation
    const annualSavings = Math.min(
      annualGeneration * tariff * clamp(selectedTiming.captureFactor * selectedLoad.captureFactor, 0.72, 0.98),
      billValue * 12 * 0.96,
    );

    const costPerKw = (mode === "residential" ? 58000 : 46000) * selectedRoof.costFactor;
    const estimatedInvestment = estimatedSystemSize * costPerKw;
    const paybackYears = annualSavings > 0 ? +(estimatedInvestment / annualSavings).toFixed(1) : 0;
    const carbonSavings = annualGeneration > 0 ? +(annualGeneration * 0.82 / 1000).toFixed(1) : 0;
    const offsetPercent = billValue > 0 ? Math.round((annualSavings / (billValue * 12)) * 100) : 0;
    
    // Payback fraction for visualization (against a typical 25-year lifespan)
    const paybackRatio = paybackYears > 0 ? Math.min(paybackYears / 25, 1) : 0;

    return {
      billValue,
      monthlyUnits,
      estimatedSystemSize,
      annualGeneration,
      annualSavings,
      estimatedInvestment,
      paybackYears,
      paybackRatio,
      carbonSavings,
      offsetPercent,
      tariff,
      incentiveTitle: mode === "residential" ? "Potential rooftop incentive" : "Commercial incentive outlook",
      incentiveBody: mode === "residential"
        ? "Eligible households may benefit from rooftop subsidy programs subject to current scheme rules and DISCOM requirements."
        : "Commercial projects usually benefit from accelerated depreciation or PPA structures rather than direct subsidies.",
    };
  }, [mode, monthlyBill, roofType, usageTiming, loadProfile]);

  return {
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
    ...results,
  };
}
