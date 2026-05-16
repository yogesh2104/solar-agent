"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BAbout() {
  const { overview } = siteConfig;

  return (
    <section id="overview" className="overflow-hidden bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.92fr] xl:items-start">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:mt-7 md:text-6xl"
            >
              {overview.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-4 text-xl leading-8 text-slate-500 md:mt-5 md:text-3xl md:leading-[1.35]"
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

            <div className="mt-7 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-4">
              <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4 md:rounded-[1.6rem] md:p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 md:text-xs md:tracking-[0.24em]">
                  Mission
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {overview.mission}
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4 md:rounded-[1.6rem] md:p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 md:text-xs md:tracking-[0.24em]">
                  Vision
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {overview.vision}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Contact Our Team
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[1.6rem] border border-slate-200 bg-[#f7faf9] p-4 shadow-sm md:rounded-[2rem] md:p-8"
          >
            <div className="grid gap-3 sm:grid-cols-3 md:gap-4">
              {overview.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] bg-white p-4 shadow-[0_16px_45px_rgba(8,17,31,0.06)] md:rounded-[1.6rem] md:p-5"
                >
                  <div className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.35rem] bg-slate-950 p-5 text-white md:mt-6 md:rounded-[1.8rem] md:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50 md:text-xs md:tracking-[0.24em]">
                Why buyers stay with us
              </div>
              <div className="mt-5 space-y-4">
                {overview.advantages.map((advantage) => (
                  <div key={advantage} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-7 text-white/72">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] md:mt-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 md:rounded-[2.5rem]"
          >
            <div className="relative h-[260px] md:h-[440px]">
              <Image
                src={overview.image}
                alt="Commercial rooftop solar overview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-white/18 bg-white/88 p-4 text-slate-950 backdrop-blur-xl md:inset-x-6 md:bottom-6 md:max-w-md md:rounded-[1.6rem] md:p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 md:text-xs md:tracking-[0.24em]">
                  Enterprise note
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 md:mt-3 md:text-lg md:leading-8">
                  Grow Green Energy With Us !!
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
                  className="relative overflow-hidden rounded-[1.4rem] border border-slate-200 md:rounded-[2rem]"
                >
                  <div className="relative h-40 md:h-52">
                    <Image
                      src={image}
                      alt="Commercial solar project detail"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
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
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 md:rounded-[2rem] md:p-6"
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
