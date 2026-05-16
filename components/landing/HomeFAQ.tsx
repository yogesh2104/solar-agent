"use client";

import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface HomeFAQProps {
  faqs: FAQItem[];
}

export default function HomeFAQ({ faqs }: HomeFAQProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Left — sticky heading */}
          <div className="max-w-sm lg:sticky lg:top-28">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
              FAQ
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black leading-tight tracking-tight text-[#0f172a]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Frequently Asked{" "}
              <span className="text-[#22c55e]">Questions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-sm leading-7 text-[#64748b]"
            >
              Learn about solar installation, ROI expectations, maintenance,
              and how solar can transform your energy costs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/faq"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[rgba(15,23,42,0.14)] px-5 text-sm font-semibold text-[#0f172a] transition-all hover:border-[#22c55e] hover:text-[#22c55e]"
              >
                View All FAQs
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:max-w-2xl"
          >
            <FAQAccordion items={faqs} variant="plus" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
