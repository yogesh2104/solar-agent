"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check } from "lucide-react";

export default function AgroAbout() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left - Text Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agro-sky/50 text-[10px] font-bold uppercase tracking-widest text-primary mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              About Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-normal leading-[1.1] mb-12"
            >
              we are cultivating more than just crops we are cultivating a cleaner{" "}
              <span className="text-primary font-bold">greener</span>{" "}
              future. By harnessing solar energy
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-12 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <p className="text-5xl font-black tracking-tighter text-agro-dark">12+</p>
                <p className="text-sm text-muted-foreground mt-1 max-w-[100px]">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col"
              >
                <p className="text-5xl font-black tracking-tighter text-agro-dark">140+</p>
                <p className="text-sm text-muted-foreground mt-1 max-w-[100px]">Satisfied Clients</p>
              </motion.div>
              
              <div className="flex-1 md:pl-12 border-l border-border md:block hidden">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By integrating solar energy into our farming practices, we significantly 
                  reduce our carbon footprint while cutting down on energy costs. This sustainable approach 
                  not only supports our environment but also ensures long-term viability.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold group">
                Read Our Story
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right - Images Grid */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/images/new_landing/about.png"
                alt="Agro solar installation"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Floating Info Cards */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 top-1/4 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-white flex flex-col gap-4 max-w-[240px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Check size={20} />
                </div>
                <p className="text-sm font-bold">Reliable in Remote Areas</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Check size={20} />
                </div>
                <p className="text-sm font-bold">Modernize Traditional Farming</p>
              </div>
              <button className="w-full py-3 bg-primary rounded-2xl text-white font-bold text-xs mt-2 hover:bg-primary/90 transition-colors">
                Learn More →
              </button>
            </motion.div>

            {/* Circular small images */}
            <div className="absolute -bottom-10 left-1/4 flex gap-4 z-20">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-xl"
              >
                <Image src="/images/new_landing/project1.png" fill className="object-cover" alt="Thumb" />
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-xl"
              >
                <Image src="/images/new_landing/hero.png" fill className="object-cover" alt="Thumb" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
