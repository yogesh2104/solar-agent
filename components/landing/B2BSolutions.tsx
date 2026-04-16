"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import siteConfig from "@/lib/siteConfig";

export default function B2BSolutions() {
  const { solutions } = siteConfig;

  return (
    <section id="services" className="overflow-hidden bg-[#f4f8fe] py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
              <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
              {solutions.badge}
            </div>
            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              {solutions.title}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-600">
            {solutions.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="xl:sticky xl:top-28"
          >
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 text-white shadow-[0_30px_80px_rgba(8,17,31,0.15)]">
              <div className="relative h-[340px] md:h-[480px]">
                <Image
                  src={solutions.image}
                  alt="Commercial solar panel installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] border border-white/12 bg-white/10 p-5 backdrop-blur-xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                    Commercial paths
                  </div>
                  <p className="mt-3 text-lg font-semibold leading-8">
                    Supply-only, turnkey EPC, phased rollout, or hybrid-ready design.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/8 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                  Common use cases
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {solutions.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/72"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {solutions.cards.map((card, index) => {
              const featured = index === 0;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={cn(
                    "rounded-[2rem] border p-6 md:p-7",
                    featured
                      ? "border-[var(--brand-lime)] bg-[var(--brand-lime)] text-slate-950"
                      : "border-slate-200 bg-white text-slate-950",
                  )}
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <div
                        className={cn(
                          "text-xs font-semibold uppercase tracking-[0.24em]",
                          featured ? "text-slate-700" : "text-slate-400",
                        )}
                      >
                        {card.id}
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                        {card.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-4 text-sm leading-7 md:text-base",
                          featured ? "text-slate-800" : "text-slate-600",
                        )}
                      >
                        {card.description}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-full border",
                        featured
                          ? "border-slate-950/10 bg-white/40 text-slate-950"
                          : "border-slate-200 bg-slate-50 text-slate-700",
                      )}
                    >
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {card.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className={cn(
                          "flex items-start gap-3 rounded-[1.35rem] border p-4 text-sm leading-6",
                          featured
                            ? "border-slate-950/10 bg-white/35 text-slate-900"
                            : "border-slate-100 bg-slate-50 text-slate-700",
                        )}
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutions.rollout.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.9rem] border border-slate-200 bg-white p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Step {index + 1}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.step}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
