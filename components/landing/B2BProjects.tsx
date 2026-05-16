"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BProjects() {
  const { projects } = siteConfig;
  const [featured, ...secondary] = projects.items;

  return (
    <section id="projects" className="bg-[#f8faf9] py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Header row — split left/right like AeroVolt */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
              {projects.badge}
            </div>
            <h2
              className="text-4xl font-black tracking-tight text-[#0f172a] md:text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {projects.title}
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-[#64748b]">
              {projects.description}
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f172a] hover:text-[#22c55e] transition-colors"
            >
              See All
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Project cards — AeroVolt grid style */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* Featured project — spans 1 col but taller */}
          {[featured, ...secondary].map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[rgba(15,23,42,0.07)] bg-white"
            >
              <Link href="/projects" className="block">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[rgba(15,23,42,0.08)] bg-[#f8faf9] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#475569]">
                      {project.sector}
                    </span>
                    <ArrowUpRight className="size-4 text-[#94a3b8] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h3
                    className="mt-3 text-base font-bold text-[#0f172a] leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#94a3b8]">
                    <MapPin className="size-3" />
                    {project.location}
                  </div>

                  <p className="mt-3 border-t border-[rgba(15,23,42,0.06)] pt-3 text-xs leading-5 text-[#64748b]">
                    {project.outcome}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
