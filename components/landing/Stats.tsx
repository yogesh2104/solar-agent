"use client";

import { motion } from "framer-motion";
import { Users, Zap, Award, Building2 } from "lucide-react";

const stats = [
  { icon: Zap, label: "Total kW Installed", value: "750", suffix: "+" },
  { icon: Building2, label: "Projects Completed", value: "120", suffix: "+" },
  { icon: Users, label: "Happy Households", value: "85", suffix: "+" },
  { icon: Award, label: "Efficiency Rating", value: "99", suffix: "%" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2 flex items-baseline justify-center">
                <span>{stat.value}</span>
                <span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
