"use client";

import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Separator } from "../ui/separator";

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
    <section className="relative overflow-hidden bg-white py-7 md:py-10">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[500px] opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-line) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -left-1/4 top-1/2 size-[600px] rounded-full -muted opacity-10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm"
            >
              <span className="size-2 rounded-full -secondary" />
              Common Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-7 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-950 md:text-6xl"
            >
              Frequently Asked Questions <br />
              <span className="text-slate-400">About Solar in Mumbai</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg leading-relaxed text-slate-600"
            >
              Learn about the installation process, ROI expectations,
              maintenance, and how solar can transform your business energy
              costs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <Link href="/faq">
                <Button className="h-14 px-8 rounded-full font-bold text-base bg-slate-950 text-white hover:bg-slate-800 transition-all group">
                  View All FAQs
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 lg:max-w-2xl"
          >
            <FAQAccordion items={faqs} variant="plus" />
          </motion.div>
        </div>
      </div>
      <Separator />
    </section>
  );
}
