"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Users,
} from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

const buyerGroups = [
  "Residential",
  "Commercial",
  "Industrial",
  "Utility",
  "Surya Ghar Yojana",
  "Pan India Support",
];

const partners = ["Waaree", "Citizen", "GoodWe", "Sineng", "Apar", "Polycab"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function AboutPage() {
  const { overview, company, founder } = siteConfig;

  return (
    <div className="bg-white">
      <StaticPageHeader
        title="About"
        highlight="ELIZ ENERGY"
        breadcrumb="About Us"
        description="Pan India solar equipment sale & support"
      />

      {/* ── Overview Section ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-7"
            >
              <p className="max-w-2xl text-lg leading-8 text-[#475569]">
                {overview.description}
              </p>
              <p className="max-w-2xl text-base leading-7 text-[#475569]">
                {overview.highlight}
              </p>

              {/* Stats row */}
              <div className="grid gap-4 sm:grid-cols-3">
                {overview.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="rounded-[1.6rem] border border-[rgba(15,23,42,0.07)] bg-[#f7faf9] p-5"
                  >
                    <div className="text-2xl font-bold tracking-tight text-[#0f172a]">
                      {stat.value}
                    </div>
                    <p className="mt-1.5 text-sm leading-5 text-[#475569]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mission / Vision */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-[rgba(15,23,42,0.07)] bg-white p-6 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    Mission
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#475569]">
                    {overview.mission}
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-[rgba(15,23,42,0.07)] bg-white p-6 shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    Vision
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#475569]">
                    {overview.vision}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_6px_20px_rgba(34,197,94,0.25)]"
              >
                Contact Our Team
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>

            {/* Image card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] shadow-sm">
                <div className="relative h-[380px] md:h-[520px]">
                  <Image
                    src={overview.image}
                    alt="ELIZ ENERGY solar equipment and support"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f7faf9]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating card overlay */}
              <div className="glass absolute -bottom-5 left-5 right-5 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:max-w-xs">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Our promise
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#0f172a]">
                  Grow Green Energy With Us !!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Supply & Support Section ── */}
      <section className="bg-[#f7faf9] py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Dark card with buyer groups */}
            <div className="rounded-[2.5rem] bg-[#0f172a] p-8 text-white md:p-10">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                Who we serve
              </div>
              <h3
                className="mt-4 text-3xl font-bold tracking-tight md:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Supply & Support Across India
              </h3>
              <p className="mt-4 text-base leading-7 text-white/65">
                {company.fullName} supports residential, commercial, industrial,
                and utility projects with a practical mix of equipment supply,
                delivery, and after-sales help.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {buyerGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-white/10 bg-white/8 px-3.5 py-1.5 text-sm text-white/80"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>

            {/* Product cards grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Factory,
                  title: "Solar Panels",
                  body: "Reliable panel supply for homes, commercial rooftops, and larger project teams.",
                },
                {
                  icon: Building2,
                  title: "Inverters, Batteries & BoS",
                  body: "Inverters, solar batteries, mounting structures, and balance-of-system components.",
                },
                {
                  icon: ShieldCheck,
                  title: "EV Charger & Accessories",
                  body: "EV charger supply plus cabling and accessories for clean, practical deployment.",
                },
                {
                  icon: Users,
                  title: "Robotic Cleaning & Subsidy",
                  body: "Utility robotic cleaning and Surya Ghar Yojana project support across India.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[1.8rem] border border-[rgba(15,23,42,0.07)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[rgba(34,197,94,0.07)] text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3
                      className="mt-4 text-lg font-bold tracking-tight text-[#0f172a]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners & Products Section ── */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Dealing Partners */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f7faf9] p-8 md:p-10"
            >
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Dealing Partners
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-[#475569]">
                We deal with trusted brands like Waaree, Citizen, GoodWe, and
                more to keep supply dependable and project-ready.
              </p>
            </motion.div>

            {/* Products & Services */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] bg-white p-8 md:p-10 shadow-sm"
            >
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Products & Services
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Solar Panels",
                  "Inverters",
                  "Solar Batteries",
                  "Mounting Structures",
                  "BoS Components",
                  "Cabling & Accessories",
                  "EV Charger",
                  "Robotic Cleaning for Utility",
                  "Surya Ghar Yojana",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[rgba(15,23,42,0.06)] bg-[#f7faf9] px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section className="bg-[#f7faf9] py-14">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            {/* Founder image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] shadow-sm"
            >
              <div className="relative aspect-square">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f7faf9]/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Founder details */}
            <div className="space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,197,94,0.20)] bg-[rgba(34,197,94,0.06)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
                  Meet our Founder
                </div>
                <h2
                  className="text-4xl font-bold tracking-tight text-[#0f172a] md:text-5xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {founder.name}
                </h2>
                <p className="text-base font-medium text-[#475569]">
                  {founder.role}
                </p>
              </div>

              <p className="text-base leading-8 text-[#475569]">{founder.bio}</p>

              {/* Experience stats */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[rgba(15,23,42,0.07)] bg-white p-5 shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    {founder.experience.combined}
                  </div>
                  <div className="mt-1 text-sm text-[#475569]">
                    Combined Experience
                  </div>
                </div>
                <div className="rounded-2xl border border-[rgba(15,23,42,0.07)] bg-white p-5 shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    {founder.experience.solar}
                  </div>
                  <div className="mt-1 text-sm text-[#475569]">
                    Dedicated Solar Expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
