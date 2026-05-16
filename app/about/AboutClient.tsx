"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  ShieldCheck,
  Users,
  CheckCircle2,
  SolarPanel,
} from "lucide-react";
import StaticPageHeader from "@/components/landing/StaticPageHeader";
import siteConfig from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const buyerGroups = [
  "Residential",
  "Commercial",
  "Industrial",
  "Utility",
  "Surya Ghar Yojana",
  "Pan India Support",
];

const partners = ["Waaree", "Citizen", "GoodWe", "Sineng", "Apar", "Polycab"];

export default function AboutPage() {
  const { overview, company, founder } = siteConfig;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % overview.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [overview.images.length]);

  return (
    <div className="bg-white">
      <StaticPageHeader
        title="About"
        highlight="ELIZ ENERGY"
        breadcrumb="About Us"
        description="Pan India solar equipment sale & support"
      />

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              {/* <h2 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                {overview.title}
              </h2> */}
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {overview.description}
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                {overview.highlight}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {overview.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="text-3xl font-semibold tracking-tight text-slate-950">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Mission
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {overview.mission}
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Vision
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {overview.vision}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Contact Our Team
                <ArrowUpRight className="size-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.6rem] border border-slate-200">
                <div className="relative h-[360px] md:h-[520px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={overview.images[currentImageIndex]}
                        alt="ELIZ ENERGY solar equipment and support"
                        fill
                        className="object-cover"
                        priority={currentImageIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-slate-950/5 to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-[1.8rem] border border-white/70 bg-white/92 p-5 shadow-[0_24px_60px_rgba(8,17,31,0.08)] backdrop-blur-xl md:max-w-md">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Enterprise note
                </div>
                <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">
                  Grow Green Energy With Us !!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[2.4rem] bg-slate-950 p-8 text-white md:p-10">
              {/* Decorative Glow */}
              <div className="absolute -right-24 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-secondary/10 blur-3xl" />

              <div className="relative z-10">
                <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  Supply & Support Across India
                </h3>
                <p className="mt-5 text-base leading-8 text-white/68">
                  {company.fullName} supports residential, commercial, industrial,
                  and utility projects with a practical mix of equipment supply,
                  delivery, and after-sales help.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {buyerGroups.map((group) => (
                    <span
                      key={group}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/15"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>

              {/* Added Highlights to fill space */}
              <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2">
                {overview.stats.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold tracking-tight text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {stat.label}
                    </div>
                  </div>
                ))}
                <div className="group flex cursor-pointer items-center justify-between rounded-[1.6rem] border border-white/10 bg-linear-to-br from-white/5 to-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15 sm:col-span-2">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      Trusted Partner Brands
                    </div>
                    <p className="mt-1 text-sm text-white/50">
                      Waaree, Citizen, GoodWe, Sineng & more
                    </p>
                  </div>
                  <div className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:scale-110">
                    <ArrowUpRight className="size-5 text-secondary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Factory,
                  title: "Solar Panels",
                  body: "Reliable panel supply for homes, commercial rooftops, and larger project teams.",
                },
                {
                  icon: Building2,
                  title: "Inverters & Storage",
                  body: "Inverters, solar batteries, mounting structures, and balance-of-system components.",
                },
                {
                  icon: ShieldCheck,
                  title: "EV Solutions",
                  body: "EV charger supply plus cabling and accessories for clean, practical deployment.",
                },
                {
                  icon: Users,
                  title: "Robotic Cleaning",
                  body: "Utility robotic cleaning and Surya Ghar Yojana project support across India.",
                },
                {
                  icon: SolarPanel,
                  title: "PM Surya Ghar (Muft Bijli Yojana)",
                  body: "A Government of India initiative providing subsidies for residential rooftop solar systems, helping households reduce electricity bills and promote clean energy usage across the nation.",
                  className: "md:col-span-2 bg-linear-to-br from-blue-50/50 to-white",
                  iconClassName: "bg-blue-100 text-blue-600",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className={cn(
                      "group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/40",
                      item.className
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-full bg-slate-50 text-slate-950 transition-colors group-hover:bg-slate-950 group-hover:text-white",
                        item.iconClassName
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2.6rem] border border-slate-200 bg-slate-50 p-8 md:p-10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Dealing Partners
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                We deal with trusted brands like Waaree, Citizen, GoodWe, and
                more to keep supply dependable and project-ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="rounded-[2.6rem] border border-slate-200 bg-white p-8 md:p-10"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Products & Services
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Solar Panels",
                  "Inverters",
                  "Solar Batteries",
                  "Mounting Structures",
                  "BoS Components",
                  "Cabling & Accessories",
                  "EV Charger",
                  "Robotic Cleaning for Utility",
                  "Surya Ghar Yojana",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-2 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="size-4 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10"
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
                  Meet our Founder
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {founder.name}
                </h2>
                <p className="text-xl font-medium text-white/90">
                  {founder.role}
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-white/78">
                <p>{founder.bio}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6 text-black">
                    <div className="text-2xl font-bold text-secondary">
                      {founder.experience.combined}
                    </div>
                    <div className="mt-1 text-sm uppercase tracking-wider">
                      Combined Experience
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-6 text-black">
                    <div className="text-2xl font-bold text-secondary">
                      {founder.experience.solar}
                    </div>
                    <div className="mt-1 text-sm uppercase tracking-wider">
                      Dedicated Solar Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
