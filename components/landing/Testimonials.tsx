"use client";

import { motion } from "framer-motion";
import { Star, Quote, Building2 } from "lucide-react";
import { useEffect, useState } from "react";

// Static B2B testimonials as fallback
const defaultTestimonials = [
  {
    id: "1",
    name: "Rajesh Sharma",
    role: "VP Operations",
    company: "Mahindra & Mahindra",
    sector: "Manufacturing",
    feedback: "Suntrix delivered our 2.5 MW plant on time and under budget. Their engineering team handled all DISCOM paperwork — we were entirely hands-off. ROI came in at 3.1 years, ahead of their own projections.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Nair",
    role: "CFO",
    company: "Prestige Group",
    sector: "Real Estate",
    feedback: "As a CFO, I needed bankable numbers. Suntrix provided detailed yield assessments, all financials for our bank, and delivered exactly what they promised. Our energy bill dropped 71% in Year 1.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ankit Gupta",
    role: "Head of Sustainability",
    company: "Infosys Ltd.",
    sector: "IT / Technology",
    feedback: "The monitoring dashboard is world-class. We can track generation, consumption, and CO2 offset in real time across all our campuses. Suntrix is a true enterprise-grade partner.",
    rating: 5,
  },
  {
    id: "4",
    name: "Sanjay Mehta",
    role: "Director – Energy",
    company: "JSW Steel",
    sector: "Steel & Mining",
    feedback: "We have 18 MW across 4 plants. Suntrix manages it all with a single point of contact. Uptime has been 99.6% over 3 years. A rare level of reliability in industrial solar.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [apiTestimonials, setApiTestimonials] = useState<typeof defaultTestimonials>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) setApiTestimonials(data);
        }
      } catch {
        // fallback to defaults
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const testimonials = apiTestimonials.length > 0 ? apiTestimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-28 bg-[#080f1e] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#f5a623] font-bold tracking-[0.3em] uppercase text-xs mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            What Our
            <br />
            <span className="text-white/30">Enterprise Clients Say</span>
          </h2>
        </motion.div>

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-white/3 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#050a14] border border-white/8 rounded-3xl p-8 group hover:border-[#f5a623]/20 transition-all relative overflow-hidden"
              >
                {/* Background quote */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/3" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base italic">
                  &ldquo;{t.feedback}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center font-bold text-[#f5a623] text-lg group-hover:bg-[#f5a623]/20 transition-colors flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-white/40 text-xs">
                      {(t as any).role && <span>{(t as any).role} · </span>}
                      {(t as any).company || (t as any).company}
                    </p>
                  </div>
                  {/* Sector badge */}
                  {(t as any).sector && (
                    <div className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-white/3">
                      <Building2 className="w-3 h-3 text-white/30" />
                      <span className="text-white/30 text-[10px] font-semibold">{(t as any).sector}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Summary stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/3 border border-white/8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
              ))}
            </div>
            <span className="text-white/60 text-sm font-medium">4.9/5 from 280+ enterprise reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
