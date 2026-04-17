"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BAbout() {
  const { overview } = siteConfig;

  return (
    <section id="overview" className="overflow-hidden bg-white py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.92fr] xl:items-start">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600"
            >
              <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
              {overview.badge}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="mt-7 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl"
            >
              {overview.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-2xl leading-10 text-slate-500 md:text-3xl md:leading-[1.35]"
            >
              {overview.highlight}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600"
            >
              {overview.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Learn About ELIZ ENERGY
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.3rem] border border-slate-200 bg-[var(--brand-sky)] p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {overview.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.6rem] bg-white p-5 shadow-[0_16px_45px_rgba(8,17,31,0.06)]"
                >
                  <div className="text-3xl font-semibold tracking-tight text-slate-950">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.8rem] bg-slate-950 p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                Why buyers stay with us
              </div>
              <div className="mt-5 space-y-4">
                {overview.advantages.map((advantage) => (
                  <div key={advantage} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand-lime)]" />
                    <p className="text-sm leading-7 text-white/72">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-slate-200"
          >
            <div className="relative h-[320px] md:h-[440px]">
              <Image
                src={overview.image}
                alt="Commercial rooftop solar overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-white/18 bg-white/88 p-5 text-slate-950 backdrop-blur-xl md:max-w-md">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Enterprise note
                </div>
                <p className="mt-3 text-lg font-semibold leading-8">
                  Faster decisions happen when technical, commercial, and rollout risks are visible early.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {overview.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-200"
                >
                  <div className="relative h-52">
                    <Image
                      src={image}
                      alt="Commercial solar project detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Typical buyer profiles
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {overview.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
