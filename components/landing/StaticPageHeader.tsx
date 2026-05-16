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
        "border-b border-[rgba(15,23,42,0.07)] bg-white pb-12 pt-28 md:pb-16 md:pt-32",
        className,
      )}
    >
      <div className="container mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 inline-flex items-center gap-1.5 text-xs text-[#94a3b8]"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-medium transition-colors hover:text-[#22c55e]"
          >
            <Home className="size-3" />
            Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-[#475569]">{breadcrumb || title}</span>
        </motion.nav>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-5xl font-black tracking-tight text-[#0f172a] md:text-7xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-[#22c55e]">{highlight}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-5 max-w-2xl text-base leading-7 text-[#64748b] md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
