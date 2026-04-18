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
  CheckCircle2,
} from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";

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
  "Residential Homes",
  "Commercial Offices & Shops",
  "Industrial Plants",
  "Utility-Scale Projects",
  "Hospitals & Campuses",
  "Government Subsidy Projects (Surya Ghar)",
];

export default function AboutPage() {
  const { overview, company } = siteConfig;

  return (
    <div className="bg-white pt-10 mx-auto">
      <StaticPageHeader
        title="About"
        highlight="ELIZ ENERGY"
        breadcrumb="About Us"
        description="About ELIZ ENERGY – Your Trusted Solar Partner"
      />

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Complete solar solutions for Residential, Commercial, Industrial
                & Utility – across India.
              </h2>
              <p className="text-base leading-8 text-slate-600 md:text-lg">
                {overview.description}
              </p>
              <p className="text-base leading-8 text-slate-600">
                With 4+ years of solar sector experience, ELIZ ENERGY delivers
                end-to-end solar solutions – from home rooftops eligible for
                Surya Ghar Yojana subsidies to utility-scale plants with robotic
                cleaning. No wind solutions – 100% solar focused.
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
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.label}
                    </p>
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
                    alt="ELIZ ENERGY commercial solar team and installations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-[1.8rem] border border-white/70 bg-white/92 p-5 shadow-[0_24px_60px_rgba(8,17,31,0.08)] backdrop-blur-xl md:max-w-md">
                <div className="text-xs font-semibold uppercase  text-slate-400">
                  Practical promise
                </div>
                <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
                  We combine panel supply, engineering, and deployment thinking
                  so commercial decisions are easier to approve and easier to
                  execute.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-10">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.4rem] -foreground p-8 text-black md:p-10">
              <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
                Serving Residential, Commercial, Industrial & Utility customers
                across India.
              </h3>
              <p className="mt-5 text-base leading-8 text-black/64">
                {company.fullName} works with all sectors – from homeowners
                applying for Surya Ghar Yojana subsidies to large industrial and
                utility customers needing turnkey solar with robotic cleaning.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {buyerGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-black"
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
                  title: "Residential & Commercial Solar",
                  body: "Rooftop solar for homes with Surya Ghar Yojana subsidy support, and cost-saving solutions for offices and shops.",
                },
                {
                  icon: Building2,
                  title: "Industrial & Utility Solar",
                  body: "Turnkey solar for industrial plants and utility-scale projects, including robotic cleaning for maximum generation.",
                },
                {
                  icon: ShieldCheck,
                  title: "EV Charger Installation",
                  body: "Reliable EV charger supply and installation for homes and commercial premises across India.",
                },
                {
                  icon: Users,
                  title: "O&M & Monitoring",
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
                    <span className="flex size-11 items-center justify-center rounded-full -muted text-slate-950">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
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
                  <span className="flex size-11 items-center justify-center rounded-full text-secondary/30 text-slate-950">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-black">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10"
            >
              <Image
                src={siteConfig.founder.image}
                alt={siteConfig.founder.name}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
                  Meet our Founder
                </div>
                <h2 className="text-4xl text-white font-bold tracking-tight md:text-6xl">
                  {siteConfig.founder.name}
                </h2>
                <p className="text-xl font-medium text-white">
                  {siteConfig.founder.role}
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-white">
                <p>{siteConfig.founder.bio}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6 border border-white/5">
                    <div className="text-2xl font-bold text-secondary">
                      {siteConfig.founder.experience.combined}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-black mt-1">
                      Combined Experience
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-white/5">
                    <div className="text-2xl font-bold text-secondary">
                      {siteConfig.founder.experience.solar}
                    </div>
                    <div className="text-sm uppercase tracking-wider text-black  mt-1">
                      Dedicated Solar Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container mx-auto px-3">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] border border-slate-200 bg-slate-50 p-10 md:p-16"
            >
              <div className="size-16 rounded-2xl text-secondary flex items-center justify-center mb-8">
                <TrendingUp className="size-8 text-slate-950" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 mb-6">
                Our Vision
              </h2>
              <p className="text-xl leading-relaxed text-slate-600">
                To become a trusted leader in the renewable energy sector by
                enabling access to clean and sustainable solar power for every
                home, business, and industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] border border-slate-950 bg-slate-950 p-10 md:p-16 text-white"
            >
              <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <ShieldCheck className="size-8 text-secondary" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <ul className="space-y-4">
                {[
                  "Offer innovative and affordable solar solutions tailored to client needs",
                  "Promote eco-friendly technologies that reduce dependence on fossil fuels",
                  "Build long-lasting relationships through exceptional service and performance",
                  "Help India move closer to a carbon-neutral future",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start text-lg text-white"
                  >
                    <span className="size-2 rounded-full text-secondary mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="container mx-auto px-3">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Products & Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive Solar Solutions for every sector.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2.5rem] bg-white p-8 md:p-12 border border-slate-200">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="size-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Wrench className="size-5 text-blue-600" />
                </span>
                Products We Offer
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Solar Panels",
                  "Inverters (On-Grid / Hybrid)",
                  "Solar Batteries",
                  "Cabling & Accessories",
                  "BOS Components",
                  "Robotic Cleaning (Utility)",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="size-4 text-secondary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-8 md:p-12 border border-slate-200">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="size-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Factory className="size-5 text-orange-600" />
                </span>
                Our Services
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "System Installation",
                  "Design & Engineering",
                  "Solar Components Supply",
                  "Operation & Maintenance",
                  "Surya Ghar Yojana Projects",
                  "Solar Consultancy",
                ].map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="size-4 text-secondary" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
