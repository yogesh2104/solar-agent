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
      className="relative isolate overflow-hidden bg-foreground pb-12 pt-24 text-white md:pb-24 md:pt-36"
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
            className="mt-8 text-[2.6rem] font-semibold tracking-tight text-white md:text-7xl xl:text-[5.6rem]"
          >
            {/* {hero.title} */}
            The pit stop solution for{" "}
            <span className="text-primary">renewable energy</span> equipment
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
            className="mt-8 flex flex-row md:flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/92"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.text}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/18 bg-white/8 px-6 text-sm font-semibold text-white hover:bg-white"
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
            className="mt-8 hidden md:flex flex-wrap items-center justify-center gap-2"
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl border border-white/14 bg-white/6 shadow-[0_32px_100px_rgba(8,17,31,0.35)] md:rounded-[2.75rem]"
          >
            <div className="relative h-[300px] md:h-[600px]">
              <Image
                src={hero.image}
                alt="Commercial rooftop solar panels for industrial and B2B buyers"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4 ">
            {hero.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[1.8rem] border border-white/12 bg-white/8 p-5 backdrop-blur-xl"
              >
                <div className="text-xl md:text-3xl font-semibold">{metric.value}</div>
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
