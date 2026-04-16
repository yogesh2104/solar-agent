"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap, BarChart3, Leaf, Building2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { value: "500+", label: "Enterprise Clients", icon: Building2 },
  { value: "₹2.4B", label: "Energy Cost Saved", icon: BarChart3 },
  { value: "98%", label: "Uptime Guarantee", icon: Zap },
  { value: "1.2M", label: "Tonnes CO₂ Offset", icon: Leaf },
];

function AnimatedCounter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(numericTarget)) { setDisplay(target); return; }
    const suffix = target.replace(/[0-9.]/g, "").trim();
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        clearInterval(timer);
        setDisplay(target);
      } else {
        const formatted = Number.isInteger(numericTarget)
          ? Math.floor(current).toLocaleString()
          : current.toFixed(1);
        setDisplay(formatted + suffix);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{display}</span>;
}

export default function Hero() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-0 overflow-hidden bg-[#050a14]">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#f5a623]/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#1a6b3c]/12 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#f5a623]/5 blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,166,35,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh] py-16">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/20 text-[#f5a623] text-sm font-semibold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              India&apos;s #1 B2B Solar Energy Partner
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] mb-6"
            >
              Power Your
              <br />
              <span className="bg-gradient-to-r from-[#f5a623] to-[#f7c869] bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              With Solar
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-lg"
            >
              End-to-end commercial & industrial solar solutions. Scalable, bankable, and designed for enterprises that mean serious business about energy independence.
            </motion.p>

            {/* Trust chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {["ISO 9001 Certified", "25-Year Warranty", "Net Metering Ready", "MNRE Approved"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/70">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-base font-bold bg-[#f5a623] hover:bg-[#e09520] text-black transition-all shadow-2xl shadow-[#f5a623]/30 group"
                asChild
              >
                <Link href="/get-quote">
                  Get Enterprise Quote
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-base font-bold border-white/15 text-white bg-white/5 hover:bg-white/10 transition-all"
                asChild
              >
                <Link href="/#services">View Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="relative grid grid-cols-2 gap-4 h-[580px]">
              {/* Main large image */}
              <div className="relative row-span-2 rounded-3xl overflow-hidden group">
                <Image
                  src="/images/industrial.png"
                  alt="Industrial Solar Installation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {/* Floating ROI badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Avg. ROI Timeline</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">3.2</span>
                      <span className="text-[#f5a623] text-sm font-semibold">Years Payback</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top right image */}
              <div className="relative rounded-3xl overflow-hidden group">
                <Image
                  src="/images/power-generation.jpg"
                  alt="Power Generation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                <div className="absolute top-4 left-4 bg-[#f5a623] text-black text-xs font-bold px-3 py-1 rounded-full">
                  Commercial
                </div>
              </div>

              {/* Bottom right - stat card */}
              <div className="bg-gradient-to-br from-[#f5a623]/15 to-[#1a6b3c]/10 border border-[#f5a623]/20 rounded-3xl p-6 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#f5a623]/20 border border-[#f5a623]/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#f5a623] fill-current" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">80%</div>
                  <p className="text-white/50 text-sm">reduction in electricity bills for our enterprise clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5 mb-0"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-[#050a14] px-8 py-8 flex items-center gap-4 group hover:bg-white/3 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#f5a623]/10 flex items-center justify-center shrink-0 group-hover:bg-[#f5a623]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#f5a623]" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {inView ? <AnimatedCounter target={stat.value} /> : "0"}
                  </div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mt-0.5">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex justify-center py-8 relative z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
