"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BHero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative bg-white pb-24 pt-36 md:pt-40"
    >
      {/* Very subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.05),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10">
        {/* ─── Two-column split layout ─── */}
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">

          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#22c55e]"
            >
              <span className="size-1.5 rounded-full bg-[#22c55e]" />
              {hero.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[3.25rem] font-black leading-[1.06] tracking-[-0.03em] text-[#0f172a] md:text-[4.5rem] lg:text-[3.75rem] xl:text-[4.5rem]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The pit stop solution for{" "}
              <span className="text-[#22c55e]">renewable energy</span>{" "}
              equipment.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 max-w-md text-base leading-7 text-[#64748b]"
            >
              {hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href={hero.primaryCta.href}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0f172a] px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1e293b]"
              >
                {hero.primaryCta.text}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[rgba(15,23,42,0.14)] px-6 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:border-[#22c55e] hover:text-[#22c55e]"
              >
                {hero.secondaryCta.text}
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>

            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-start gap-8 border-t border-[rgba(15,23,42,0.08)] pt-8"
            >
              {hero.metrics.map((metric, i) => (
                <div key={metric.label}>
                  <div
                    className="text-2xl font-black text-[#0f172a]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs text-[#64748b]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-[#f8faf9]">
              <div className="relative h-[420px] md:h-[520px]">
                <Image
                  src={hero.image}
                  alt="Commercial rooftop solar panels — ELIZ ENERGY"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
              </div>

              {/* Mini floating stat card — bottom left */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#f0fdf4]">
                    <span className="text-lg">☀️</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                      Recent project
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-[#0f172a]">
                      {hero.stageCards.proof.title}
                    </div>
                  </div>
                  <ArrowUpRight className="ml-2 size-4 text-[#94a3b8]" />
                </div>
              </div>

              {/* Mini stat — top right */}
              <div className="absolute right-4 top-4 rounded-2xl border border-[rgba(15,23,42,0.08)] bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                  Coverage
                </div>
                <div className="mt-0.5 text-base font-black text-[#0f172a]">
                  Pan India
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-[rgba(15,23,42,0.06)] pt-8"
        >
          <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
            Serving
          </span>
          {hero.trustChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8faf9] px-3 py-1.5 text-xs font-medium text-[#475569]"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
