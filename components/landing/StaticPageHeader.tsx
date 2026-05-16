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
        "relative overflow-hidden border-b border-[rgba(15,23,42,0.07)] pb-10 pt-28 md:pb-14 md:pt-32",
        className,
      )}
    >
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7faf9] via-white to-white" />
        {/* Green radial — top right */}
        <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.07),transparent_65%)]" />
        {/* Yellow radial — bottom left */}
        <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.05),transparent_65%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white/90 px-4 py-2 text-sm shadow-sm backdrop-blur-xl"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-medium text-slate-500 transition-colors hover:text-slate-950"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          <span className="font-medium text-slate-700">
            {breadcrumb || title}
          </span>
        </motion.nav>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 max-w-4xl"
        >
          <h1
            className="text-4xl font-bold tracking-tight text-[#0f172a] md:text-6xl md:leading-[1.04]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 max-w-2xl text-base leading-7 text-[#475569] md:text-lg md:leading-8"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
