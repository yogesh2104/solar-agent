"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BWhyUs() {
  const { whyUs } = siteConfig;

  return (
    <section
      id="why-us"
      className="overflow-hidden -foreground py-7 text-white md:py-10"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76">
            <span className="size-2 rounded-full -secondary" />
            {whyUs.badge}
          </div>
          <h2 className="mt-7 text-4xl font-semibold tracking-tight md:text-6xl">
            {whyUs.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62">
            {whyUs.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2.6rem] border border-white/10"
          >
            <div className="relative h-[360px] md:h-[520px]">
              <Image
                src={whyUs.image}
                alt="Commercial renewable energy infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.08)_0%,rgba(8,17,31,0.2)_28%,rgba(8,17,31,0.74)_100%)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2.6rem] bg-white p-7 text-slate-950 md:p-10"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              What teams use us for
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Fewer blind spots between proposal, approval, and performance.
            </h3>
            <div className="mt-6 space-y-4">
              {whyUs.checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 -secondary" />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.8rem] bg-slate-950 p-6 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Operating principle
              </div>
              <p className="mt-3 text-lg leading-8 text-white/72">
                We treat solar as an operating asset, not a one-time install.
                That changes how proposals are structured, how projects are
                deployed, and how support is handled afterward.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
