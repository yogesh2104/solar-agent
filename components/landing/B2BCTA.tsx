"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BCTA() {
  const { finalCta } = siteConfig;

  return (
    <section className="bg-[#f8faf9] py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#0f172a] p-10 md:p-14"
        >
          {/* Subtle green glow top-right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.10),transparent_65%)]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
                Ready to start?
              </div>
              <h2
                className="max-w-xl text-4xl font-black tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {finalCta.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
                {finalCta.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={finalCta.primary.href}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:bg-[#f0fdf4] hover:text-[#22c55e]"
                >
                  {finalCta.primary.text}
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href={finalCta.secondary.href}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/8"
                >
                  {finalCta.secondary.text}
                </Link>
              </div>
            </div>

            {/* Deliverables */}
            <div className="min-w-[240px] rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                What you receive
              </div>
              <div className="mt-4 space-y-3">
                {finalCta.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#22c55e]" />
                    <p className="text-sm leading-5 text-white/70">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
