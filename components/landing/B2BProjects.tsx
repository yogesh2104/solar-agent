"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

export default function B2BProjects() {
  const { projects } = siteConfig;
  const [featured, ...secondary] = projects.items;

  return (
    <section id="projects" className="overflow-hidden bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:mt-7 md:text-6xl">
              {projects.title}
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-base leading-8 text-slate-600">
              {projects.description}
            </p>
            <Button
              asChild
              className="mt-5 h-12 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <Link href="/projects">
                View All Projects
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] md:mt-14 md:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="h-fit overflow-hidden rounded-[1.6rem] border border-slate-200 md:rounded-[2.5rem]"
          >
            <Link href="/projects" className="block">
              <div className="relative h-[240px] md:h-[440px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/8 to-transparent" />
              </div>

              <div className="bg-white p-5 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-950/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {featured.sector}
                  </span>
                  <span className="rounded-full bg-secondary/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {featured.scale}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:mt-5 md:text-3xl">
                  {featured.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="size-4 text-slate-400" />
                  {featured.location}
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:mt-4 md:text-base md:leading-8">
                  {featured.outcome}
                </p>
              </div>
            </Link>
          </motion.article>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white md:rounded-4xl"
              >
                <Link href="/projects" className="block">
                  <div className="relative h-40 md:h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-xs font-semibold uppercase text-slate-600">
                        {project.sector}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="size-4 text-slate-400" />
                        {project.location}
                      </div>
                    </div>
                    <h3 className="mt-2 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
                      <span className="min-w-0 flex-1">{project.title}</span>
                      <span className="text-sm font-medium text-slate-700">
                        ({project.scale})
                      </span>
                    </h3>
                    <p className=" text-sm leading-7 text-slate-600">
                      {project.outcome}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
