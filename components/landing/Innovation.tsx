"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Innovation() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-4xl"
          >
            Powering Businesses with <br />
            Responsible{" "}
            <span className="text-muted-foreground">Solar Innovation</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background group cursor-pointer hover:bg-primary transition-colors"
          >
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Dark Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 p-8 rounded-[2rem] flex flex-col justify-between h-[450px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4 group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8 border border-white/10">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                A <span className="text-primary italic">brighter</span> choice{" "}
                <br />
                for a <span className="text-primary italic">brighter</span>{" "}
                <br />
                future
              </h3>
            </div>

            <Link
              href="/about"
              className="relative z-10 flex items-center gap-3 text-white font-semibold hover:text-primary transition-colors group/link"
            >
              Read our mission
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:translate-x-1 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Branding Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[450px] rounded-[2rem] overflow-hidden group"
          >
            <Image
              src="/images/power-generation.jpg"
              alt="Suntrix Branding"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-x-8 top-8 flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Zap className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-white">Suntrix</span>
            </div>

            <div className="absolute inset-x-8 bottom-8">
              <div className="flex -space-x-2">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                <div className="w-4 h-4 bg-primary/60 rounded-full animate-pulse delay-75" />
                <div className="w-4 h-4 bg-primary/30 rounded-full animate-pulse delay-150" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-muted p-8 rounded-[2rem] flex flex-col justify-between h-[450px]"
          >
            <div className="flex justify-between items-start">
              <div className="text-7xl font-bold text-foreground tracking-tighter">
                80%
              </div>
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Zap className="w-6 h-6 text-primary fill-current" />
              </div>
            </div>

            <div>
              <p className="text-xl font-semibold text-foreground mb-4">
                Consumed Energy
              </p>
              <div className="flex items-center gap-4 py-6 border-y border-border/50">
                <div className="flex -space-x-3">
                  {/* {[4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?u=suntrix${i}`}
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))} */}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">331K+</div>
                  <div className="text-xs text-muted-foreground">
                    clients across industries
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
