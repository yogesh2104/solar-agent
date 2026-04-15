"use client";

import { motion } from "framer-motion";
import { Home, Factory, HardHat, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Residential Solar",
    description: "Lower your home's carbon footprint and energy costs with our high-efficiency residential solar installations.",
    icon: Home,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Industrial & Commercial",
    description: "Turn your business's rooftop into an asset. We provide scalable solar solutions for factories and offices.",
    icon: Factory,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Maintenance & Support",
    description: "Ensure your solar system runs at peak performance with our regular maintenance and monitoring services.",
    icon: HardHat,
    color: "bg-amber-500/10 text-amber-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Our Solutions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Comprehensive Energy Solutions <br />
              <span className="text-muted-foreground">Tailored for Every Need</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="#contact" className="text-primary font-medium flex items-center gap-2 hover:underline">
              View All Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group h-full border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 bg-card">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </CardDescription>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-all">
                    Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
