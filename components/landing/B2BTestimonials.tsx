"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BTestimonials() {
  const { testimonials } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((c) => (c + 1) % testimonials.items.length);
  const previous = () =>
    setActiveIndex(
      (c) => (c - 1 + testimonials.items.length) % testimonials.items.length,
    );

  const active = testimonials.items[activeIndex];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
              {testimonials.badge}
            </div>
            <h2
              className="max-w-lg text-4xl font-black tracking-tight text-[#0f172a] md:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {testimonials.title}
            </h2>
          </div>

          {/* Proof chips */}
          <div className="flex flex-wrap gap-2">
            {testimonials.proofPoints.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8faf9] px-3 py-1.5 text-xs font-medium text-[#475569]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.author}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-[2rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] p-8 md:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">

              {/* Avatar + meta */}
              <div className="flex flex-col items-start gap-4">
                <div className="overflow-hidden rounded-2xl border border-[rgba(15,23,42,0.07)] bg-white">
                  <Image
                    src={active.image}
                    alt={active.author}
                    width={200}
                    height={220}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-[#0f172a]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {active.author}
                  </div>
                  <div className="mt-0.5 text-sm text-[#64748b]">
                    {active.role} · {active.company}
                  </div>
                </div>
                <span className="rounded-full border border-[rgba(34,197,94,0.20)] bg-[rgba(34,197,94,0.06)] px-3 py-1 text-xs font-semibold text-[#22c55e]">
                  {active.result}
                </span>
              </div>

              {/* Quote */}
              <div>
                <div className="text-4xl font-black leading-none text-[#e2e8f0]" aria-hidden>
                  "
                </div>
                <p className="mt-3 text-xl font-medium leading-[1.6] text-[#0f172a] md:text-2xl">
                  {active.quote}
                </p>

                {/* Nav controls */}
                <div className="mt-10 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={previous}
                    className="flex size-10 items-center justify-center rounded-full border border-[rgba(15,23,42,0.12)] text-[#475569] transition-colors hover:border-[#0f172a] hover:text-[#0f172a]"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="flex size-10 items-center justify-center rounded-full bg-[#0f172a] text-white transition-colors hover:bg-[#1e293b]"
                    aria-label="Next"
                  >
                    <ChevronRight className="size-4" />
                  </button>

                  {/* Dots */}
                  <div className="ml-2 flex items-center gap-1.5">
                    {testimonials.items.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className={`size-1.5 rounded-full transition-all duration-200 ${
                          i === activeIndex
                            ? "w-4 bg-[#0f172a]"
                            : "bg-[#cbd5e1]"
                        }`}
                        aria-label={`Testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
