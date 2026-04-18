"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        "relative overflow-hidden border-b border-slate-200/80 pb-6 pt-20 md:pb-10 md:pt-28",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,248,254,0.94)_0%,rgba(255,255,255,0.92)_70%,rgba(255,255,255,1)_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(8,17,31,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(8,17,31,0.5)_1px,transparent_1px)] bg-size-[52px_52px]" />
      <div className="absolute right-0 top-0 h-112 w-md rounded-full bg-[radial-gradient(circle,rgba(143,183,223,0.32),transparent_66%)]" />
      <div className="absolute bottom-0 left-0 h-96 w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(204,255,52,0.18),transparent_68%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-500 shadow-[0_10px_30px_rgba(8,17,31,0.04)] backdrop-blur-xl"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition-colors hover:text-slate-950"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-medium text-slate-700">
            {breadcrumb || title}
          </span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-8 max-w-4xl"
        >
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 md:text-7xl md:leading-[1.02]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
