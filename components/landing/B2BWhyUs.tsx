"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BWhyUs() {
  const { whyUs } = siteConfig;

  return (
    <section id="why-us" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
            {whyUs.badge}
          </div>
          <h2
            className="max-w-2xl text-4xl font-black tracking-tight text-[#0f172a] md:text-5xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {whyUs.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#64748b]">
            {whyUs.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[1.75rem] border border-[rgba(15,23,42,0.07)]"
          >
            <div className="relative h-[360px] md:h-[480px]">
              <Image
                src={whyUs.image}
                alt="Commercial renewable energy infrastructure"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3
              className="text-2xl font-black text-[#0f172a]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Pan India supply, trusted brands, and practical solar support.
            </h3>

            <div className="mt-8 space-y-0">
              {whyUs.checklist.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[rgba(15,23,42,0.07)] py-4"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#22c55e]" />
                  <p className="text-sm font-medium text-[#475569]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
