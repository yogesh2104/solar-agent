"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BTestimonials() {
  const { testimonials } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.items.length);
  };

  const previous = () => {
    setActiveIndex((current) => (current - 1 + testimonials.items.length) % testimonials.items.length);
  };

  const activeTestimonial = testimonials.items[activeIndex];

  return (
    <section className="overflow-hidden bg-[#f7fbff] py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
            <span className="size-2 rounded-full bg-[var(--brand-lime)]" />
            {testimonials.badge}
          </div>
          <h2 className="mt-7 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            {testimonials.title}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {testimonials.proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.items.map((item, index) => (
              <button
                key={item.author}
                type="button"
                className="relative"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${item.author}`}
              >
                <span
                  className={`block overflow-hidden rounded-full border-2 transition-all ${
                    index === activeIndex
                      ? "border-[var(--brand-lime)]"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={44}
                    height={44}
                    className="size-11 object-cover"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTestimonial.author}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 grid max-w-6xl gap-8 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(8,17,31,0.08)] md:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative h-[320px]">
              <Image
                src={activeTestimonial.image}
                alt={activeTestimonial.author}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-3 left-0 size-12 text-slate-200" />
            <div className="pl-0 md:pl-10">
              <div className="inline-flex rounded-full bg-[var(--brand-lime)]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                {activeTestimonial.result}
              </div>
              <p className="mt-6 text-2xl font-medium leading-[1.55] text-slate-950 md:text-3xl">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>

              <div className="mt-8">
                <div className="text-xl font-semibold text-slate-950">
                  {activeTestimonial.author}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-500">
                  {activeTestimonial.role} · {activeTestimonial.company}
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex size-12 items-center justify-center rounded-full bg-slate-950 text-white transition-colors hover:bg-slate-800"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
