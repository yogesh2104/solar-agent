

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
      className="relative isolate overflow-hidden bg-foreground pb-20 pt-32 text-white md:pb-24 md:pt-36"
    >
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,183,223,0.5),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-184 bg-linear-to-b from-[#8ab2db]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.18)_0%,rgba(8,17,31,0.55)_60%,rgba(8,17,31,0.92)_100%)]" />
      </div> */}

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
