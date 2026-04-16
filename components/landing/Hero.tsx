"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sun, Users, BadgeCheck } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-start"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-8"
            >
              <BadgeCheck className="w-4 h-4" />
              Trusted by 5000+ homeowners
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[0.9] mb-8"
            >
              Solar <br />
              <span className="flex items-center gap-4">
                Energy
                <span className="w-12 h-12 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <Sun className="w-6 h-6 md:w-10 md:h-10 text-primary-foreground" />
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-md"
            >
              We're a full-service design and development agency crafting modern
              brands, websites, and products that drive results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg group bg-foreground text-background hover:bg-foreground/90 transition-all font-bold"
                asChild
              >
                <Link href="/get-quote">
                  Get Started
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>

              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">30+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                  Years of Experience
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2">
              {/* Image 1 - Turbine */}
              <div className="relative h-[250px] md:h-full md:row-span-2 overflow-hidden rounded-3xl">
                <Image
                  src="/images/worker-helmet.webp"
                  alt="Wind Turbine"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 - Worker */}
              <div className="relative h-[200px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/wind_turbines_clean_energy.jpg"
                  alt="Solar Worker"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats Card Overlay 1 */}
              <div className="bg-secondary/10 backdrop-blur-xl border border-secondary/20 p-6 rounded-3xl flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-secondary mb-1">
                    200K+
                  </div>
                  <p className="text-sm text-muted-foreground font-medium leading-tight">
                    Meet the heart of our community
                  </p>
                </div>
                <div className="flex -space-x-3 mt-4 relative z-10">
                  {/* {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative"
                    >
                      <Image
                        src={`https://i.pravatar.cc/100?u=suntrix${i}`}
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))} */}
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                    +12K
                  </div>
                </div>
              </div>

              {/* Image 3 - Panels Close-up */}
              <div className="relative h-[200px] overflow-hidden rounded-3xl col-span-1">
                <Image
                  src="/images/solar-battery-solar.jpg"
                  alt="Solar Panels"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="relative col-span-2 md:col-span-1 h-[200px] overflow-hidden rounded-3xl group">
                <Image
                  src="/images/Rooftop.jpg"
                  alt="Green Energy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full w-fit mb-2">
                    Ready for Future
                  </div>
                  <h3 className="text-white font-bold leading-tight">
                    Green Energy <br /> Make Bold Impact
                  </h3>
                </div>
              </div>

              {/* Small Detail Card */}
              <div className="bg-muted p-6 rounded-3xl flex flex-col gap-4">
                <Sun className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-bold text-foreground">Smart Energy</h4>
                  <p className="text-xs text-muted-foreground">
                    Modern living with efficient, reliable, and green solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
