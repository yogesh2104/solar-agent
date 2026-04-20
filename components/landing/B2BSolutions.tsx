"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Package,
  Building2,
  BatteryCharging,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import siteConfig from "@/lib/siteConfig";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
}

export default function B2BSolutions({
  initialServices,
}: {
  initialServices?: Service[];
}) {
  const { solutions } = siteConfig;

  // Use DB services if available, otherwise fallback to siteConfig
  const displayCards =
    initialServices && initialServices.length > 0
      ? initialServices.map((s, i) => ({
          id: (i + 1).toString().padStart(2, "0"),
          title: s.title,
          description: s.description,
          bullets: s.features,
          slug: s.slug,
        }))
      : solutions.cards;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % displayCards.length);
  }, [displayCards.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextStep]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    // Optional: Resume after some time
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f4f8fe] py-7 md:py-10"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-0 h-[500px] opacity-35"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-line) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-1/4 top-0 size-[600px] rounded-full -muted mix-blend-multiply blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-1/4 top-1/4 size-[500px] rounded-full -secondary mix-blend-multiply blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm"
            >
              <span className="size-2 rounded-full -secondary" />
              {/* {solutions.badge} */}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-7 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-950 md:text-6xl"
            >
              {/* {solutions.title} */}
            </motion.h2>
          </div>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-slate-600 lg:mb-2"
          >
            {solutions.description}
          </motion.p> */}
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="xl:sticky xl:top-28"
          >
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 text-white shadow-[0_40px_100px_rgba(8,17,31,0.12)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(8,17,31,0.18)]">
              {/* Subtle Glow */}
              <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] bg-[radial-gradient(circle_at_center,var(--brand-lime)_0%,transparent_70%)] opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-10" />

              <div className="relative h-[400px] md:h-[540px]">
                <Image
                  src={solutions.image}
                  alt="Commercial solar panel installation"
                  fill
                  sizes="(max-width: 1280px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Status Indicator */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full -secondary opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full -secondary"></span>
                  </span>
                  Live project tracking
                </div>

                <div className="absolute inset-x-6 bottom-6 rounded-[2rem] border border-white/20 bg-white/12 p-6 backdrop-blur-[20px]">
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
                    Commercial paths
                  </div>
                  <p className="mt-4 text-xl font-semibold leading-relaxed">
                    Supply-only, turnkey EPC, phased rollout, or hybrid-ready
                    design.
                  </p>
                </div>
              </div>

              <div className="relative border-t border-white/10 p-7">
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                  Common sectors & use cases
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {solutions.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {displayCards.map((card, index) => {
              const isActive = activeIndex === index;
              const Icon =
                [Package, Building2, BatteryCharging, Activity][index] ||
                Package;

              return (
                <motion.div
                  key={card.id}
                  layout
                  onClick={() => handleManualSelect(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-4xl border transition-all duration-500",
                    isActive
                      ? "-secondary bg-white"
                      : "border-slate-100 bg-white/40 hover:border-slate-200 hover:bg-white/80",
                  )}
                >
                  {/* Progress Line */}
                  {isActive && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      key={`timer-${activeIndex}`}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 -secondary"
                    />
                  )}

                  <div
                    className={cn(
                      "relative p-6 md:p-8 transition-all duration-500",
                      isActive ? "pb-10" : "pb-6",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div
                          className={cn(
                            "flex size-12 items-center justify-center rounded-xl border transition-all duration-300",
                            isActive
                              ? "-secondary -secondary/10 text-slate-900"
                              : "border-slate-100 bg-slate-50 text-slate-400 group-hover:border-slate-200 group-hover:bg-white",
                          )}
                        >
                          <Icon
                            className={cn(
                              "size-5 transition-transform duration-500",
                              isActive && "scale-110",
                            )}
                          />
                        </div>
                        <div>
                          <div
                            className={cn(
                              "text-[10px] font-bold uppercase tracking-[0.3em]",
                              isActive ? "text-primary" : "text-slate-400",
                            )}
                          >
                            Step {card.id}
                          </div>
                          <h3
                            className={cn(
                              "mt-1 text-xl font-bold tracking-tight md:text-2xl transition-colors duration-300",
                              isActive
                                ? "text-slate-950"
                                : "text-slate-900 group-hover:text-slate-950",
                            )}
                          >
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      <Link
                        href={
                          (card as any).slug
                            ? `/services/${(card as any).slug}`
                            : "/services"
                        }
                        className={cn(
                          "inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                          isActive
                            ? "rotate-0 -secondary -secondary text-slate-950"
                            : "border-slate-100 bg-white text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-slate-600",
                        )}
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6">
                            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                              {card.description}
                            </p>

                            {/* <div className="mt-4 grid gap-4 md:grid-cols-3">
                              {card.bullets.map((bullet) => (
                                <div
                                  key={bullet}
                                  className="flex mb-2 items-start gap-3 rounded-xl border bg-card p-2 text-sm font-medium leading-relaxed text-slate-700"
                                >
                                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                                  <span>{bullet}</span>
                                </div>
                              ))}
                            </div> */}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
