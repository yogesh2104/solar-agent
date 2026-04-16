"use client";

import StaticPageHeader from "@/components/landing/StaticPageHeader";
import { Zap, Shield, TrendingUp, Users, ArrowUpRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Zap,
    title: "Sustainability",
    description: "Committed to providing 100% clean and renewable energy solutions for a greener planet.",
    color: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our systems are built to last, with industry-leading warranties and dedicated support.",
    color: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    title: "Efficiency",
    description: "Maximizing energy harvest with top-tier solar technology and smart monitoring.",
    color: "bg-orange-500/10",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Tailored solar solutions designed to meet the unique needs of every home and business.",
    color: "bg-purple-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pb-20">
      <StaticPageHeader
        title="About "
        highlight="SolarCo"
        description="We are on a mission to accelerate the world's transition to sustainable energy through affordable and efficient solar technology."
      />

      {/* Our Story / Journey */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group">
                <Image
                  src="/images/power-generation.jpg"
                  alt="Solar Installation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="text-5xl font-bold mb-2">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
                </div>
              </div>

              {/* Floating Award Card */}
              <div className="absolute -top-10 -right-10 bg-card/80 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-xl hidden md:block max-w-[200px]">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-foreground leading-tight">Industry Leader in Solar tech</h4>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                Our Journey
              </motion.div>
              <motion.h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                Pioneering the future of <span className="text-muted-foreground">Clean Energy.</span>
              </motion.h2>
              <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Founded in 2014, SolarCo began with a simple vision: to make solar energy accessible to everyone. What started as a small team of passionate engineers has grown into a leading solar provider.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground leading-relaxed">
                We believe that the sun is the most powerful resource we have. By harnessing its power, we can not only reduce electricity bills but also create a lasting impact on the environment for generations to come.
              </motion.p>

              <motion.div className="pt-6">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group"
                >
                  Work with us
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-slate-50/50 dark:bg-slate-900/20 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Our Core <span className="text-muted-foreground">Values</span></h2>
            <p className="text-lg text-muted-foreground">The principles that guide us in every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border/50 p-10 rounded-[2.5rem] hover:ring-2 hover:ring-primary/20 transition-all group"
              >
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - matching Projects.tsx row style */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-16 border border-border/50 bg-slate-50/50 dark:bg-slate-900/10 rounded-[2.5rem] px-12">
            {[
              { label: "kW Installed", value: "750+" },
              { label: "Happy Clients", value: "1.2k+" },
              { label: "Cities Served", value: "15+" },
              { label: "Carbon Offset", value: "5k Tons" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="text-4xl md:text-6xl font-bold text-foreground mb-2 leading-none">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
