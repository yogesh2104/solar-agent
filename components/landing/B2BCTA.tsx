"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

export default function B2BCTA() {
  const { finalCta } = siteConfig;

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f7faf9] p-8 md:p-12"
        >
          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-[350px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.08),transparent_60%)]" />
            <div className="absolute bottom-0 left-0 h-[280px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.07),transparent_60%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,197,94,0.20)] bg-[rgba(34,197,94,0.06)] px-4 py-1.5">
                <Sun className="size-3.5 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
                  Ready to start?
                </span>
              </div>

              <h2
                className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] md:text-5xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {finalCta.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#475569]">
                {finalCta.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="group h-12 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_6px_24px_rgba(34,197,94,0.28)]"
                >
                  <Link href={finalCta.primary.href}>
                    {finalCta.primary.text}
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[rgba(15,23,42,0.12)] bg-white px-7 text-sm font-semibold text-slate-800 hover:border-primary/30 hover:bg-white transition-all duration-200"
                >
                  <Link href={finalCta.secondary.href}>
                    {finalCta.secondary.text}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Deliverables card */}
            <div className="glass p-6">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                What you receive
              </div>
              <div className="mt-5 space-y-4">
                {finalCta.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-[#475569]">
                      {deliverable}
                    </p>
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
