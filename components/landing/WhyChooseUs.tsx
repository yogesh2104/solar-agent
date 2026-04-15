"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Sun } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "High Return on Investment",
    description:
      "Our solar systems typically pay for themselves within 5-7 years through energy savings and incentives.",
    icon: TrendingUp,
  },
  {
    title: "End-to-End Service",
    description:
      "From site survey and design to installation and permits, we handle everything for you.",
    icon: Sun,
  },
  {
    title: "25-Year Performance Warranty",
    description:
      "We use top-tier components and provide industry-leading warranties for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Certified Installation Experts",
    description:
      "Our team of licensed professionals ensures every installation meets the highest safety standards.",
    icon: CheckCircle2,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-4xl">
              <Image
                src={"/images/hero.png"} // Reusing hero for now or generate new
                alt="Why choose us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-card border border-border p-8 rounded-2xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">40%</div>
                  <p className="text-xs text-muted-foreground uppercase">
                    Average Bill Drop
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                &quot;Switching to SolarCo was the best decision for our
                warehouse operation.&quot;
              </p>
            </motion.div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Trust the Leaders in <br />
                <span className="text-muted-foreground">Renewable Energy</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
