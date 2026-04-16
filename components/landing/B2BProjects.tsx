"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calendar } from "lucide-react";
import siteConfig from "@/lib/siteConfig.json";

export default function B2BProjects() {
  const { projects } = siteConfig;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agro-sky/50 text-[10px] font-bold uppercase tracking-widest text-primary mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {projects.badge}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-agro-dark"
            >
              {projects.title} <br />
              <span className="text-muted-foreground font-medium">{projects.titleHighlight}</span>
            </motion.h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-sm text-muted-foreground/80 max-w-sm md:text-right">
              {projects.description}
            </p>
            <Button variant="default" className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-bold group">
              See All Projects
              <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden mb-6 shadow-lg shadow-black/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-agro-dark">
                   <Calendar size={12} className="text-primary" />
                   {project.year}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{project.location}</p>
                  <h3 className="text-2xl font-bold text-agro-dark group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground/80 mt-2 max-w-md">{project.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-agro-dark group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
