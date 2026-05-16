"use client";

import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[500px] opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-line) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -left-1/4 top-1/2 size-[600px] rounded-full bg-[#eef4f1] opacity-40 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between md:gap-12">
          <div className="max-w-xl lg:sticky lg:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-semibold leading-[1.12] tracking-tight text-slate-950 md:mt-7 md:text-6xl"
            >
              Frequently Asked Questions <br />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm leading-7 text-slate-600 md:mt-8 md:text-lg md:leading-relaxed"
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
              className="mt-6 md:mt-12"
            >
              <Link href="/faq">
                <Button className="group h-11 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-all hover:bg-slate-800 md:h-14 md:px-8 md:text-base">
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
