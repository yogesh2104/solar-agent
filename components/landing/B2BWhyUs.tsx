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
      className="relative overflow-hidden bg-[#f7faf9] py-10 md:py-14"
    >
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.06),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.05),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            {whyUs.badge}
          </div>
          <h2
            className="mt-6 text-4xl font-bold tracking-tight text-[#0f172a] md:text-5xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {whyUs.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#475569]">
            {whyUs.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] shadow-sm"
          >
            <div className="relative h-[360px] md:h-[520px]">
              <Image
                src={whyUs.image}
                alt="Commercial renewable energy infrastructure"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Soft top light */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f7faf9]/30 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Checklist card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] bg-white p-8 shadow-sm md:p-10"
          >
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              What teams use us for
            </div>
            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-[#0f172a] md:text-3xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Pan India supply, trusted brands, and practical solar support.
            </h3>
            <div className="mt-7 space-y-4">
              {whyUs.checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-[#475569]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
