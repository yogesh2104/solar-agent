"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  ShieldCheck,
  Zap,
  Sun,
  TrendingUp,
  Check,
} from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BHero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#050a14] pt-24 pb-16 text-white md:pt-32 md:pb-24"
    >
      {/* ── Background glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* large amber orb top-left */}
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.18)_0%,transparent_70%)]" />
        {/* subtle blue orb right */}
        <div className="absolute -right-24 top-20 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050a14] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* ── TOP: badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            <Zap className="size-3.5 fill-amber-400 text-amber-400" />
            {hero.badge}
          </span>
        </motion.div>

        {/* ── MAIN SPLIT LAYOUT ── */}
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — headline + CTAs */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-4xl font-extrabold leading-[1.12] tracking-tight md:text-5xl xl:text-6xl"
            >
              <span className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                Power Your Business
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                With Solar Energy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg"
            >
              {hero.description}
            </motion.p>

            {/* trust checklist */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-6 space-y-2.5"
            >
              {hero.trustChips.map((chip) => (
                <li key={chip} className="flex items-center gap-2.5 text-sm text-white/70">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {chip}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(251,191,36,0.35)] transition-all duration-200 hover:shadow-[0_0_40px_rgba(251,191,36,0.55)] hover:scale-[1.03]"
              >
                {hero.primaryCta.text}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/7 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/12 hover:border-white/30"
              >
                {hero.secondaryCta.text}
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — hero image card */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            {/* glow ring behind image */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-amber-400/25 via-transparent to-blue-600/15 blur-xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-[0_32px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm">
              <div className="relative h-[380px] md:h-[480px]">
                <Image
                  src={hero.image}
                  alt="Commercial rooftop solar panels for industrial and B2B buyers"
                  fill
                  priority
                  className="object-cover"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-[#050a14]/10 to-transparent" />
              </div>

              {/* floating overlay cards at bottom */}
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3">
                {/* stat card 1 */}
                <div className="rounded-2xl border border-white/12 bg-[#050a14]/75 p-4 backdrop-blur-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
                      <BatteryCharging className="size-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        {hero.sideStats[0].label}
                      </p>
                      <p className="text-xl font-bold text-white">
                        {hero.sideStats[0].value}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-white/50">
                    {hero.sideStats[0].note}
                  </p>
                </div>

                {/* stat card 2 */}
                <div className="rounded-2xl border border-white/12 bg-[#050a14]/75 p-4 backdrop-blur-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <ShieldCheck className="size-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        {hero.sideStats[1].label}
                      </p>
                      <p className="text-xl font-bold text-white">
                        {hero.sideStats[1].value}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-white/50">
                    {hero.sideStats[1].note}
                  </p>
                </div>
              </div>
            </div>

            {/* floating pill — customers */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute -top-5 -right-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 shadow-xl backdrop-blur-xl"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
                <Sun className="size-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-white">
                  {hero.stageCards.social.value}
                </p>
                <p className="text-[10px] text-white/55">Happy Customers</p>
              </div>
            </motion.div>

            {/* floating pill — payback */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 shadow-xl backdrop-blur-xl"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                <TrendingUp className="size-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-white">3.4 yr Payback</p>
                <p className="text-[10px] text-white/55">High-load sites</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── METRICS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {hero.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-white/8"
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 transition-all duration-300 group-hover:from-amber-400/5 group-hover:to-transparent" />
              <div className="relative">
                <div className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                  {metric.value}
                </div>
                <p className="mt-1.5 text-xs leading-5 text-white/55">
                  {metric.label}
                </p>
              </div>
              {/* accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Factory,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

export default function B2BHero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden -foreground pb-20 pt-32 text-white md:pb-24 md:pt-36"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,183,223,0.5),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-184 bg-linear-to-b from-[#8ab2db]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.18)_0%,rgba(8,17,31,0.55)_60%,rgba(8,17,31,0.92)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-8 text-5xl font-semibold tracking-tight text-white md:text-7xl xl:text-[5.6rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-white/92"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.text}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/18 bg-white/8 px-6 text-sm font-semibold text-white hover:bg-white/12"
            >
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.text}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {hero.trustChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm text-white backdrop-blur-md"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="absolute left-0 top-10 z-20 hidden w-60 rounded-[1.75rem] border border-white/18 bg-white/12 p-5 backdrop-blur-xl xl:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/12 text-secondary">
                <BatteryCharging className="size-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase  text-white/55">
                  {hero.sideStats[0].label}
                </div>
                <div className="mt-1 text-3xl font-semibold">
                  {hero.sideStats[0].value}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/62">
              {hero.sideStats[0].note}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="absolute right-0 top-10 z-20 hidden w-60 rounded-[1.75rem] border border-white/18 bg-white/12 p-5 backdrop-blur-xl xl:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/12 text-secondary">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase  text-white/55">
                  {hero.sideStats[1].label}
                </div>
                <div className="mt-1 text-3xl font-semibold">
                  {hero.sideStats[1].value}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/62">
              {hero.sideStats[1].note}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2.75rem] border border-white/14 bg-white/6 shadow-[0_32px_100px_rgba(8,17,31,0.35)]"
          >
            <div className="relative h-[430px] md:h-[600px]">
              <Image
                src={hero.image}
                alt="Commercial rooftop solar panels for industrial and B2B buyers"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(135,177,224,0.18)_0%,rgba(8,17,31,0.04)_26%,rgba(8,17,31,0.72)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t -foreground -foreground/65 to-transparent" />

              <div className="absolute inset-x-6 bottom-6 grid gap-4 lg:grid-cols-[1.15fr_0.55fr_0.78fr]">
                <div className="rounded-4xl bg-white p-4 text-slate-950 shadow-[0_20px_60px_rgba(8,17,31,0.14)] md:p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-24 overflow-hidden rounded-[1.35rem]">
                      <Image
                        src={hero.stageCards.proof.image}
                        alt="Commercial solar installation specialist"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase  text-slate-400">
                        Project delivery
                      </div>
                      <p className="mt-2 text-lg font-semibold leading-7">
                        {hero.stageCards.proof.title}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-4xl bg-white p-5 text-center text-slate-950 shadow-[0_20px_60px_rgba(8,17,31,0.14)]">
                  <div className="mx-auto flex max-w-max items-center gap-2 rounded-full bg-slate-950/5 px-3 py-1 text-[11px] font-semibold uppercase  text-slate-500">
                    <Factory className="size-3.5 text-secondary" />
                    Social proof
                  </div>
                  <div className="mt-5 text-4xl font-semibold">
                    {hero.stageCards.social.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {hero.stageCards.social.label}
                  </p>
                </div>

                <div className="rounded-4xl border border-white/16 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <div className="text-xs font-semibold uppercase  text-white/55">
                    Design note
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {hero.stageCards.highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">
                    {hero.stageCards.highlight.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {hero.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl"
              >
                <div className="text-3xl font-semibold">{metric.value}</div>
                <p className="mt-2 text-sm leading-6 text-white/65">
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


















"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  BatteryCharging,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  TrendingUp,
} from "lucide-react";
import siteConfig from "@/lib/siteConfig";

/* ─── tiny reusable stat chip ─── */
function StatChip({
  icon: Icon,
  label,
  value,
  color = "amber",
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color?: "amber" | "emerald" | "sky";
  delay?: number;
}) {
  const colorMap = {
    amber: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    emerald: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    sky: "bg-sky-400/10 text-sky-300 border-sky-400/20",
  };
  const iconMap = {
    amber: "text-amber-400",
    emerald: "text-emerald-400",
    sky: "text-sky-400",
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={`flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 backdrop-blur-md ${colorMap[color]}`}
    >
      <Icon className={`size-4 shrink-0 ${iconMap[color]}`} />
      <div>
        <p className="text-[10px] leading-none text-white/45 uppercase tracking-wider">{label}</p>
        <p className="mt-0.5 text-sm font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
}

/* ─── main component ─── */
export default function B2BHero() {
  const { hero } = siteConfig;
  const sectionRef = useRef<HTMLElement>(null);

  /* subtle parallax on the image */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set(((e.clientX - cx) / rect.width) * 14);
    mouseY.set(((e.clientY - cy) / rect.height) * 10);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-[#04080f] pt-28 pb-20 text-white md:pt-36 md:pb-28"
    >
      {/* ══════════ BACKGROUND LAYERS ══════════ */}
      <div className="pointer-events-none absolute inset-0">
        {/* noise grain */}
        <div
          className="absolute inset-0 opacity-[0.032]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        {/* large amber glow — top centre */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(251,191,36,0.22) 0%, transparent 68%)",
          }}
        />
        {/* blue glow — bottom right */}
        <div
          className="absolute -bottom-20 right-0 h-[480px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 100% 100%, rgba(37,99,235,0.14) 0%, transparent 65%)",
          }}
        />
        {/* horizontal rule glow */}
        <div className="absolute inset-x-0 top-[52%] h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">

        {/* ══════════ BADGE ══════════ */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <span className="group inline-flex cursor-default items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300 shadow-[inset_0_1px_0_rgba(251,191,36,0.12)] transition-colors hover:bg-amber-400/12">
            <Zap className="size-3 fill-amber-400 text-amber-400" />
            Clean Energy for India — Residential · Commercial · Industrial
          </span>
        </motion.div>

        {/* ══════════ HEADLINE ══════════ */}
        <div className="mt-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-[clamp(2.6rem,6vw,5rem)] font-black leading-[1.06] tracking-[-0.03em]"
          >
            <span className="text-white">Solar Solutions That</span>
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(92deg, #fbbf24 0%, #f97316 38%, #fbbf24 76%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              Cut Costs. Scale Fast.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.8] text-white/55"
          >
            {hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href={hero.primaryCta.href}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_36px_rgba(251,191,36,0.45)]"
            >
              {/* shimmer */}
              <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[130%]" />
              {hero.primaryCta.text}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/28 hover:bg-white/10 hover:text-white"
            >
              {hero.secondaryCta.text}
            </Link>
          </motion.div>
        </div>

        {/* ══════════ HERO IMAGE + BENTO STRIP ══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          {/* animated gradient border wrapper */}
          <div
            className="rounded-[2rem] p-[1.5px] shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(251,191,36,0.5) 0%, rgba(255,255,255,0.06) 40%, rgba(37,99,235,0.35) 100%)",
            }}
          >
            <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-[#07101e]">
              {/* main image */}
              <motion.div
                style={{ x: springX, y: springY, scale: 1.04 }}
                className="relative h-[340px] md:h-[520px] lg:h-[580px]"
              >
                <Image
                  src={hero.image}
                  alt="Commercial rooftop solar panels — ELIZ ENERGY"
                  fill
                  priority
                  className="object-cover"
                />
                {/* vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(4,8,15,0.55)_100%)]" />
                {/* bottom gradient to bento */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07101e] to-transparent" />
                {/* top-left label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs font-semibold text-white/70">Live monitoring active</span>
                </div>
              </motion.div>

              {/* ── BENTO GRID BELOW IMAGE ── */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.05] md:grid-cols-4">
                {hero.metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                    className="group relative flex flex-col justify-between bg-[#07101e] p-5 transition-colors duration-300 hover:bg-[#0c1826]"
                  >
                    {/* top accent bar */}
                    <div className="mb-3 h-px w-0 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500 group-hover:w-full" />
                    <div className="text-2xl font-black tracking-tight text-white md:text-3xl">
                      {metric.value}
                    </div>
                    <p className="mt-1 text-[11px] leading-5 text-white/40">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════ FLOATING STAT CHIPS ROW ══════════ */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <StatChip
            icon={BatteryCharging}
            label={hero.sideStats[0].label}
            value={hero.sideStats[0].value}
            color="amber"
            delay={0.6}
          />
          <StatChip
            icon={ShieldCheck}
            label={hero.sideStats[1].label}
            value={hero.sideStats[1].value}
            color="emerald"
            delay={0.68}
          />
          <StatChip
            icon={TrendingUp}
            label="Avg. payback"
            value="3.4 Years"
            color="sky"
            delay={0.76}
          />
          <StatChip
            icon={MapPin}
            label="Coverage"
            value="Pan India"
            color="amber"
            delay={0.84}
          />
          <StatChip
            icon={Clock}
            label="First response"
            value="48 Hours"
            color="emerald"
            delay={0.92}
          />
        </div>
      </div>
    </section>
  );
}