"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import siteConfig from "@/lib/siteConfig.json";

export default function B2BTestimonials() {
  const { testimonials } = siteConfig;
  const [active, setActive] = useState(0);

  const next = () => setActive((addr) => (addr + 1) % testimonials.items.length);
  const prev = () => setActive((addr) => (addr - 1 + testimonials.items.length) % testimonials.items.length);

  return (
    <section className="py-24 bg-agro-sky/10 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-primary mb-6 shadow-sm border border-border/40"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {testimonials.badge}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-agro-dark"
          >
            {testimonials.title} <br />
            <span className="text-muted-foreground font-medium">{testimonials.titleHighlight}</span>
          </motion.h2>

          <div className="mt-8 flex -space-x-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-muted shadow-sm">
                <Image src="/images/new_landing/avatar1.png" width={40} height={40} alt="User" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-black/5 border border-white flex flex-col md:flex-row gap-12 items-center relative">
            <Quote className="absolute top-10 right-10 text-primary/10 w-32 h-32 -z-0" />
            
            {/* Author Image */}
            <motion.div
              key={`img-${active}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full md:w-[300px] aspect-square rounded-[2rem] overflow-hidden shrink-0 z-10"
            >
              <Image
                src={testimonials.items[active].image}
                alt={testimonials.items[active].author}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Testimonial Content */}
            <div className="flex flex-col text-left z-10">
              <motion.p
                key={`text-${active}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-medium italic leading-relaxed text-agro-dark mb-8"
              >
                &ldquo;{testimonials.items[active].content}&rdquo;
              </motion.p>
              
              <div>
                <h4 className="text-xl font-bold text-agro-dark">{testimonials.items[active].author}</h4>
                <p className="text-sm text-primary font-bold uppercase tracking-widest">{testimonials.items[active].role}</p>
              </div>
              
              {/* Navigation */}
              <div className="flex gap-4 mt-12 md:mt-20">
                <button 
                  onClick={prev}
                  className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-agro-dark hover:text-white transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={next}
                  className="w-14 h-14 rounded-full bg-agro-dark text-white flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
