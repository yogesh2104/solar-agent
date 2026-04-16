"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StaticPageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  breadcrumb?: string;
}

export default function StaticPageHeader({
  title,
  highlight,
  description,
  className,
  breadcrumb,
}: StaticPageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-36 pb-24 overflow-hidden bg-[#050a14]",
        className,
      )}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(245,166,35,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5a623]/6 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1a6b3c]/8 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-white/30 mb-10"
        >
          <Link
            href="/"
            className="hover:text-[#f5a623] transition-colors flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          <span className="text-white/60 font-semibold">{breadcrumb || title}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-[#f5a623] to-[#f7c869] bg-clip-text text-transparent">
                  {highlight}
                </span>
              </>
            )}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />
    </section>
  );
}
