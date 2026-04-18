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
    <section id="projects" className="overflow-hidden bg-white py-7 md:py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase text-slate-600">
              <span className="size-2 rounded-full -secondary" />
              {projects.badge}
            </div>
            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[2.5rem] h-fit border border-slate-200"
          >
            <Link href="/projects" className="block">
              <div className="relative h-[320px] md:h-[440px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/72 via-slate-950/8 to-transparent" />
              </div>

              <div className="bg-white p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-950/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {featured.sector}
                  </span>
                  <span className="rounded-full -secondary/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {featured.scale}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                  {featured.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="size-4 text-slate-400" />
                  {featured.location}
                </div>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {featured.outcome}
                </p>
              </div>
            </Link>
          </motion.article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-4xl border border-slate-200 bg-white"
              >
                <Link href="/projects" className="block">
                  <div className="relative h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between align-center items-center">
                      <div className="text-xs font-semibold uppercase text-slate-600">
                        {project.sector}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="size-4 text-slate-400" />
                        {project.location}
                      </div>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                      {project.title} &nbsp;&nbsp;&nbsp;
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
