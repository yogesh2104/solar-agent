"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

const wordReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function B2BHero() {
  const { hero } = siteConfig;

  const titleWords = "The pit stop solution for renewable energy equipment".split(" ");

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-white pb-20 pt-32 md:pb-28 md:pt-40"
    >
      {/* ── Layered Background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Radial glow — green top-right */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.08),transparent_65%)]" />
        {/* Radial glow — yellow bottom-left */}
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.06),transparent_65%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* Soft gradient wash */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7faf9]/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">

          {/* ── Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.06)] px-4 py-1.5"
          >
            <Sun className="size-3.5 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
              {hero.badge}
            </span>
          </motion.div>

          {/* ── Headline — Word-by-Word Reveal ── */}
          <motion.h1
            className="mt-7 text-5xl font-bold tracking-tight text-[#0f172a] md:text-7xl xl:text-[5.25rem] xl:leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {titleWords.map((word, i) => {
              const isGreen = word === "renewable" || word === "energy";
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordReveal}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-[0.25em] ${
                    isGreen ? "text-primary" : ""
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* ── Sub-headline ── */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-[1.75] text-[#475569] md:text-xl"
          >
            {hero.description}
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Primary CTA */}
            <Button
              asChild
              className="group h-12 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_6px_24px_rgba(34,197,94,0.30)]"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.text}
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Secondary CTA — white glass */}
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[rgba(15,23,42,0.12)] bg-white px-7 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-primary/30 hover:bg-[#f7faf9] hover:shadow-md"
            >
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.text}
              </Link>
            </Button>
          </motion.div>

          {/* ── Trust Chips ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-2"
          >
            {hero.trustChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f7faf9] px-3.5 py-1.5 text-xs font-medium text-[#475569]"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Hero Visual ── */}
        <div className="relative mx-auto mt-16 max-w-7xl">

          {/* Left floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute left-4 top-8 z-20 hidden w-60 animate-float xl:block"
          >
            <div className="glass p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[rgba(34,197,94,0.08)] text-primary">
                  <BatteryCharging className="size-5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#475569]">
                    {hero.sideStats[0].label}
                  </div>
                  <div className="mt-0.5 text-2xl font-bold text-[#0f172a]">
                    {hero.sideStats[0].value}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#475569]">
                {hero.sideStats[0].note}
              </p>
            </div>
          </motion.div>

          {/* Right floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute right-4 top-8 z-20 hidden w-60 animate-float xl:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="glass p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[rgba(250,204,21,0.10)] text-amber-500">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#475569]">
                    {hero.sideStats[1].label}
                  </div>
                  <div className="mt-0.5 text-2xl font-bold text-[#0f172a]">
                    {hero.sideStats[1].value}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#475569]">
                {hero.sideStats[1].note}
              </p>
            </div>
          </motion.div>

          {/* ── Main Image Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden rounded-[2.5rem] border border-[rgba(15,23,42,0.08)] bg-[#f7faf9] shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
          >
            <div className="relative h-[400px] md:h-[560px]">
              <Image
                src={hero.image}
                alt="Commercial rooftop solar panels for industrial and B2B buyers"
                fill
                sizes="100vw"
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Soft light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              {/* Top left subtle tint */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.06),transparent_40%)]" />

              {/* Floating glass cards over image */}
              <div className="absolute inset-x-5 bottom-5 grid gap-3 lg:grid-cols-[1.15fr_0.55fr_0.78fr]">

                {/* Proof card */}
                <div className="rounded-3xl bg-white/92 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl md:p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl">
                      <Image
                        src={hero.stageCards.proof.image}
                        alt="Commercial solar installation specialist"
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                        Project delivery
                      </div>
                      <p className="mt-1.5 text-sm font-semibold leading-6 text-[#0f172a]">
                        {hero.stageCards.proof.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social proof card */}
                <div className="rounded-3xl bg-white/92 p-4 text-center shadow-[0_10px_40px_rgba(15,23,42,0.10)] backdrop-blur-xl">
                  <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-[rgba(34,197,94,0.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
                    <Zap className="size-3" />
                    Social
                  </div>
                  <div className="mt-4 text-3xl font-bold text-[#0f172a]">
                    {hero.stageCards.social.value}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[#475569]">
                    {hero.stageCards.social.label}
                  </p>
                </div>

                {/* Highlight card — glass style */}
                <div className="rounded-3xl border border-white/40 bg-white/72 p-4 backdrop-blur-xl">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Our mission
                  </div>
                  <h3 className="mt-2 text-base font-bold leading-6 text-[#0f172a]">
                    {hero.stageCards.highlight.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#475569]">
                    {hero.stageCards.highlight.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Metric Row ── */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {hero.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.6rem] border border-[rgba(15,23,42,0.07)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-2xl font-bold text-[#0f172a]">
                  {metric.value}
                </div>
                <p className="mt-1.5 text-sm leading-5 text-[#475569]">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
