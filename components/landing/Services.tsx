"use client";

import { motion } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Solar Panel Installation",
    description:
      "Our experts provide professional solar panel installation tailored to your site's unique conditions, ensuring maximum sunlight capture and optimal energy performance.",
    image: "/images/Solar-Panel-Installation.webp",
  },
  {
    id: "02",
    title: "System Design & Engineering",
    description:
      "Precision-engineered solar systems designed to meet your specific energy needs, whether residential, corporate, or industrial.",
    image: "/images/System-Design-Engineering.jpg",
  },
  {
    id: "03",
    title: "Energy Storage Solutions",
    description:
      "Advanced battery storage systems that allow you to use your solar energy even when the sun isn't shining, ensuring total energy independence.",
    image: "/images/industrial.png",
  },
  {
    id: "04",
    title: "Maintenance & Performance Monitoring",
    description:
      "24/7 monitoring and regular maintenance to ensure your system continues to operate at peak efficiency for years to come.",
    image: "/images/maintenance.png",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Our Sustainable <br />
                <span className="text-slate-400">Solar Services</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-b border-border/50 pb-6 pt-4 cursor-pointer group transition-all duration-300 ${activeTab === index ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                  onMouseEnter={() => setActiveTab(index)}
                >
                  <div className="flex items-center justify-between gap-8 mb-4">
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-bold text-foreground/40 group-hover:text-primary transition-colors">
                        {service.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:translate-x-2 transition-transform duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                      {activeTab === index ? (
                        <Minus className="w-4 h-4 group-hover:text-white" />
                      ) : (
                        <Plus className="w-4 h-4 group-hover:text-white" />
                      )}
                    </div>
                  </div>

                  {activeTab === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-muted-foreground text-sm md:text-base leading-relaxed pl-12 max-w-lg"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 sticky top-32"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] ease-out scale-100 translate-z-0"
                    style={{
                      transform: activeTab === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                    <h4 className="text-white text-3xl font-bold">{service.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
