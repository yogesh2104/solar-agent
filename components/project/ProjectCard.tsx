"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MapPin, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    location: string;
    capacity: number;
    category: string;
    images: string[];
  };
  index?: number;
  className?: string;
}

export default function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors duration-500",
        className
      )}
    >
      <Link href={`/projects/${project.slug}`} className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.images[0] || "/images/hero.png"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            variant="secondary"
            className="bg-white/10 backdrop-blur-md text-white border-white/20"
          >
            {project.category}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-primary/90 backdrop-blur-md text-white border-none"
          >
            <Zap className="w-3 h-3 mr-1 fill-current" />
            {project.capacity} kW
          </Badge>
        </div>
      </Link>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1 text-primary" />
              {project.location}
            </div>
            <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <Link 
            href={`/projects/${project.slug}`}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            View Case Study
          </span>
          <div className="h-0.5 w-12 bg-primary/30 group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
