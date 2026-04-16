"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

const milestones = [
  { year: "2014", event: "Suntrix begins with a commercial solar focus and an engineering-first approach." },
  { year: "2017", event: "Expanded into larger industrial rooftops and multi-building commercial estates." },
  { year: "2020", event: "Added monitoring, long-term service workflows, and hybrid-ready planning." },
  { year: "2023", event: "Scaled supply and EPC support across manufacturing, logistics, and institutional clients." },
  { year: "2026", event: "Now supporting panel procurement, commercial systems, and phased B2B rollout programs." },
];

const principles = [
  {
    icon: TrendingUp,
    title: "Commercial clarity",
    body: "We translate technical decisions into numbers finance and procurement teams can review with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Equipment discipline",
    body: "Tier-1 sourcing, warranty documentation, and deployment-fit recommendations stay at the center of every proposal.",
  },
  {
    icon: Wrench,
    title: "Operational practicality",
    body: "Execution plans are designed around shutdown windows, load priorities, and site constraints instead of generic install assumptions.",
  },
  {
    icon: Users,
    title: "Long-term accountability",
    body: "We stay useful after the sale through monitoring, maintenance support, and clearer escalation ownership.",
  },
];

const buyerGroups = [
  "Manufacturing and industrial",
  "Warehousing and logistics",
  "Commercial real estate",
  "Healthcare and campuses",
  "Retail portfolios",
  "Channel partners and EPCs",
];

export default function AboutPage() {
  const { overview, company } = siteConfig;

  return (
    <div className="bg-white pb-20">
      <StaticPageHeader
        title="About"
        highlight="Suntrix"
        breadcrumb="About Us"
        description="Suntrix helps commercial and industrial buyers evaluate, source, deploy, and maintain solar assets with stronger technical guidance and clearer commercial decisions."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
                How we work
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Solar buying made clearer for teams who have to defend every decision.
              </h2>
              <p className="text-base leading-8 text-slate-600 md:text-lg">
                {overview.description}
              </p>
              <p className="text-base leading-8 text-slate-600">
                We are not built around generic residential installs. We are built around business cases, panel selection, rollout coordination, and the long-term performance questions that matter once a system becomes part of your operations.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {overview.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="text-3xl font-semibold tracking-tight text-slate-950">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/get-quote"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Request a commercial proposal
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.6rem] border border-slate-200">
                <div className="relative h-[360px] md:h-[520px]">
                  <Image
                    src={overview.image}
                    alt="Suntrix commercial solar team and installations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-[1.8rem] border border-white/70 bg-white/92 p-5 shadow-[0_24px_60px_rgba(8,17,31,0.08)] backdrop-blur-xl md:max-w-md">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Practical promise
                </div>
                <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
                  We combine panel supply, engineering, and deployment thinking so commercial decisions are easier to approve and easier to execute.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.4rem] bg-[var(--brand-ink)] p-8 text-white md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
                <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
                Who we serve
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                Built for commercial buyers, operators, and delivery partners.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/64">
                {company.fullName} works with businesses that need a supplier and delivery partner capable of handling procurement pressure, technical questions, and post-install accountability.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {buyerGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-white/72"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Factory,
                  title: "Commercial rooftop and captive systems",
                  body: "Projects shaped around energy cost reduction, structural fit, and operating continuity.",
                },
                {
                  icon: Building2,
                  title: "Channel and EPC support",
                  body: "Bulk panel sourcing, documentation support, and deployment coordination for partners who need reliable supply.",
                },
                {
                  icon: ShieldCheck,
                  title: "Hybrid-ready planning",
                  body: "Battery and inverter guidance for resilience, peak shaving, and phased storage expansion.",
                },
                {
                  icon: Users,
                  title: "Service after commissioning",
                  body: "Monitoring, maintenance support, and clearer issue ownership once the system is live.",
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
                    className="rounded-[1.9rem] border border-slate-200 bg-white p-6"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-sky)] text-slate-950">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
              <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
              Operating principles
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              What clients rely on us for after the first call.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.9rem] border border-slate-200 bg-white p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-lime)]/30 text-slate-950">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{principle.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[2.2rem] border border-slate-200 bg-white p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Timeline
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Growth shaped by commercial delivery needs.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our path has been driven by how B2B solar projects actually get bought, deployed, and maintained.
              </p>
            </div>

            <div className="space-y-4">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="grid gap-4 rounded-[1.9rem] border border-slate-200 bg-white p-5 md:grid-cols-[120px_1fr] md:items-start"
                >
                  <div className="text-2xl font-semibold tracking-tight text-slate-950">
                    {item.year}
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
