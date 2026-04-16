"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Battery, Zap, ChevronRight, Play, Users, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AgroHero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-b from-agro-sky/50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-32" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl -ml-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white text-xs font-bold uppercase tracking-wider text-primary mb-8"
          >
            <Sun size={14} className="animate-spin-slow" />
            Empowering Agricultural Enterprises
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-agro-dark mb-6"
          >
            Powering the Future <br />
            <span className="text-muted-foreground font-medium">of Agriculture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-2xl"
          >
            Sustainable agriculture meets clean energy. High-yield solar solutions designed 
            to reduce operational costs and maximize farm productivity with industrial-scale efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold group">
              Learn More
              <div className="w-8 h-8 rounded-full bg-white/20 ml-2 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ChevronRight size={18} />
              </div>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold bg-white/50 border-white">
              Watch Success Stories
            </Button>
          </motion.div>
        </div>

        {/* Floating Stat Cards Overlaying Hero Image */}
        <div className="relative mt-12 max-w-6xl mx-auto">
          {/* Top Left Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex absolute top-10 left-0 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-white shadow-2xl flex-col gap-1 w-48"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Battery size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Energy Storage</p>
                <p className="text-xl font-bold">24/7</p>
              </div>
            </div>
            <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[85%]" />
            </div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex absolute top-10 right-0 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-white shadow-2xl flex-col gap-1 w-48"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Inverter Power</p>
                <p className="text-xl font-bold">7.6 kW</p>
              </div>
            </div>
            <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[92%]" />
            </div>
          </motion.div>

          {/* Main Hero Image */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/new_landing/hero.png"
              alt="Industrial scale solar farm in agriculture field"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/40 to-transparent" />

            {/* Bottom Cards on Image */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4 items-end justify-between">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl max-w-sm flex items-center gap-4 group cursor-pointer hover:bg-white transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">View Our Success Stories In Solar Energy</h3>
                  <p className="text-sm text-muted-foreground mt-1">Industrial & Commercial Scale</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl flex flex-col items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-muted">
                      <Image src={`/images/new_landing/avatar1.png`} width={40} height={40} alt="Client" />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black tracking-tight">140k+</p>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Our Clients' Words</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl max-w-[200px] flex flex-col gap-2">
                <div className="h-2 w-12 bg-primary rounded-full" />
                <h3 className="font-bold text-xl">Bright Panels</h3>
                <p className="text-xs text-muted-foreground">Maximize every sunray with our advanced, high-efficiency solar panels.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
