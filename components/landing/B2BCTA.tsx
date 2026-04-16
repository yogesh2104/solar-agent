"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

export default function B2BCTA() {
  const { finalCta } = siteConfig;

  return (
    <section className="bg-white pb-16 pt-4 md:pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.6rem] bg-[var(--brand-ink)] p-8 text-white md:p-10 lg:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,52,0.2),transparent_36%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(143,183,223,0.22),transparent_34%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/76">
                <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
                Next step
              </div>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">
                {finalCta.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[var(--brand-lime)] px-6 text-sm font-semibold text-slate-950 hover:bg-[var(--brand-lime)]/90"
                >
                  <Link href={finalCta.primary.href}>
                    {finalCta.primary.text}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/14 bg-white/8 px-6 text-sm font-semibold text-white hover:bg-white/12"
                >
                  <Link href={finalCta.secondary.href}>{finalCta.secondary.text}</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                What you receive
              </div>
              <div className="mt-5 space-y-4">
                {finalCta.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand-lime)]" />
                    <p className="text-sm leading-7 text-white/74">{deliverable}</p>
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
