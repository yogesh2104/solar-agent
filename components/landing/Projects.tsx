"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  projects?: any[];
}

const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Successful Installations", value: "850+" },
  { label: "Energy Generated", value: "120MW+" },
  { label: "Tons of CO2 Saved", value: "25,000+" },
];

export default function Projects({ projects = [] }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-background overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Powering With <span className="text-slate-400">Purpose</span>
            </h2>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-4 h-fit border-t border-foreground/20 pt-1">
              [PROJECT]
            </div>
          </motion.div>

          <Link href="/projects" className="hidden md:flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">
            View All Projects
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group hover:bg-primary transition-all">
              <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col gap-6"
              >
                <div className="relative h-[400px] overflow-hidden rounded-[2.5rem]">
                  <Image
                    src={project.images?.[0] || "/images/hero.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                      {project.location || "California"}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
                      [{project.status || "2024 - COMPLETE"}]
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Smaller Featured Project */}
            {projects[2] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[300px] overflow-hidden rounded-[2.5rem]"
              >
                <Image
                  src={projects[2].images?.[0] || "/images/hero.png"}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold leading-tight">{projects[2].title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    {projects[2].location}
                  </p>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-grow bg-muted/30 p-10 rounded-[2.5rem] flex flex-col justify-center gap-6"
            >
              <h3 className="text-2xl font-bold text-foreground leading-tight">
                Explore more successful <br />
                installations and see <span className="text-slate-400">how solar energy transforms spaces worldwide.</span>
              </h3>
              <Button
                className="w-fit rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 px-8 shadow-lg shadow-primary/25"
                asChild
              >
                <Link href="/projects">See All Projects</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-border/50 bg-slate-50/50 rounded-[2rem] px-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
