"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  projects?: any[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  // If no projects provided by prop, we show a message or empty state 
  // (In a real scenario, the landing page fetch will provide them)
  
  return (
    <section id="projects" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Our Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Real Impact,{" "}
              <span className="text-muted-foreground">Tangible Results</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg"
            >
              Explore our lately completed projects across residential and
              industrial sectors. Each installation is a step towards a greener
              planet.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" className="rounded-full group" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id || i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl"
            >
              <Image
                src={project.images?.[0] || "/images/hero.png"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute top-6 left-6 flex gap-2">
                <Badge
                  variant="secondary"
                  className="bg-white/10 backdrop-blur-md text-white border-white/20"
                >
                  {project.category}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-primary/80 backdrop-blur-md text-white border-none"
                >
                  {project.capacity} kW
                </Badge>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex justify-between items-end">
                  <div className="flex-grow">
                    <p className="text-primary-foreground/60 text-sm mb-1">
                      {project.location}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100 hover:scale-110 flex-shrink-0"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
                <div className="h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
          
          {projects.length === 0 && (
            <div className="col-span-full text-center py-20 border-2 border-dashed border-border rounded-3xl">
              <p className="text-muted-foreground">No projects found. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
