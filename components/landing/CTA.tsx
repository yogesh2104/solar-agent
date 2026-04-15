"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex p-3 rounded-2xl bg-white/10 mb-8">
            <Zap className="w-8 h-8 fill-current" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to Slash Your <br />
            Electricity Bills?
          </h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Join 1,000+ happy customers who have switched to clean, renewable energy. 
            Get your free, no-obligation quotation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-black/20 group">
              Get My Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold bg-white/5 border-white/20 hover:bg-white/10 group">
              Speak to an Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
