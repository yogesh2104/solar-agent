"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Phone, Mail } from "lucide-react";
import Link from "next/link";

const certifications = [
  "ISO 9001:2015",
  "MNRE Channel Partner",
  "NABCEP Certified",
  "BIS Registered",
  "SEBI Listed Projects",
];

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#050a14]">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/8 via-transparent to-[#1a6b3c]/8" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#f5a623]/6 blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(245,166,35,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#080f1e] border border-[#f5a623]/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#f5a623]/10 blur-[60px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1a6b3c]/10 blur-[60px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/20 text-[#f5a623] text-sm font-bold mb-8">
                <Zap className="w-4 h-4 fill-current" />
                Free Energy Audit — No Commitment
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Cut Your
                <br />
                <span className="bg-gradient-to-r from-[#f5a623] to-[#f7c869] bg-clip-text text-transparent">
                  Energy Bill by 70%?
                </span>
              </h2>

              <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                Join 500+ enterprises that have made the switch to solar with Suntrix. Get a detailed feasibility report, custom ROI model, and project timeline — completely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="rounded-full h-16 px-12 text-base font-bold bg-[#f5a623] hover:bg-[#e09520] text-black shadow-2xl shadow-[#f5a623]/30 group"
                  asChild
                >
                  <Link href="/get-quote">
                    Get My Free Proposal
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-16 px-10 text-base font-bold border-white/15 text-white bg-white/5 hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="mr-2 w-5 h-5" />
                    Talk to an Expert
                  </Link>
                </Button>
              </div>

              {/* Certifications strip */}
              <div className="flex flex-wrap justify-center gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-semibold"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          >
            <a href="tel:+911234567890" className="flex items-center gap-3 text-white/40 hover:text-[#f5a623] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <a href="mailto:enterprise@suntrix.in" className="flex items-center gap-3 text-white/40 hover:text-[#f5a623] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">enterprise@suntrix.in</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
