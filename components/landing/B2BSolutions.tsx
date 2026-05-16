"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section
      id="services"
      className="bg-white py-20 md:py-28"
    >
      <div className="container mx-auto px-6 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#22c55e]"
        >
          Our energy runs
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mb-16 max-w-xl text-4xl font-black tracking-tight text-[#0f172a] md:text-5xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {solutions.title}
        </motion.h2>

        {/* Two-column layout: numbered rows + sticky image */}
        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">

          {/* LEFT — numbered service rows */}
          <div>
            {displayCards.map((card, index) => {
              const isActive = activeIndex === index;
              const href = (card as any).slug
                ? `/services/${(card as any).slug}`
                : "/services";

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  onClick={() => handleManualSelect(index)}
                  className={cn(
                    "group cursor-pointer border-t border-[rgba(15,23,42,0.08)] py-6 transition-colors duration-200",
                    isActive ? "border-t-[#0f172a]" : "",
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-5">
                      {/* Number */}
                      <span
                        className={cn(
                          "mt-0.5 min-w-[2rem] text-sm font-semibold tabular-nums transition-colors duration-200",
                          isActive ? "text-[#22c55e]" : "text-[#94a3b8]",
                        )}
                      >
                        {card.id}
                      </span>

                      <div>
                        <h3
                          className={cn(
                            "text-lg font-bold transition-colors duration-200",
                            isActive
                              ? "text-[#0f172a]"
                              : "text-[#475569] group-hover:text-[#0f172a]",
                          )}
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {card.title}
                        </h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden text-sm leading-6 text-[#64748b]"
                            >
                              {card.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <Link
                      href={href}
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                        isActive
                          ? "border-[#0f172a] bg-[#0f172a] text-white"
                          : "border-[rgba(15,23,42,0.12)] text-[#94a3b8] opacity-0 group-hover:opacity-100",
                      )}
                    >
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom border */}
            <div className="border-t border-[rgba(15,23,42,0.08)]" />
          </div>

          {/* RIGHT — sticky image panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="hidden lg:block"
          >
            <div className="sticky top-28">
              <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(15,23,42,0.08)] bg-[#f8faf9]">
                {/* Image */}
                <div className="relative h-[300px]">
                  <Image
                    src={solutions.image}
                    alt="Solar panel installation"
                    fill
                    sizes="420px"
                    className="object-cover transition-transform duration-700"
                  />
                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f8faf9]/60 via-transparent to-transparent" />

                  {/* Live badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[rgba(15,23,42,0.10)] bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#0f172a] backdrop-blur-sm">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-[#22c55e]" />
                    </span>
                    Live tracking
                  </div>
                </div>

                {/* Active card info */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="p-6"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                      {displayCards[activeIndex]?.id} / {displayCards.length.toString().padStart(2, "0")}
                    </div>
                    <h4
                      className="mt-2 text-base font-bold text-[#0f172a]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {displayCards[activeIndex]?.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#64748b]">
                      {displayCards[activeIndex]?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sectors */}
              <div className="mt-5 flex flex-wrap gap-2">
                {solutions.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8faf9] px-3 py-1.5 text-xs font-medium text-[#475569]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
