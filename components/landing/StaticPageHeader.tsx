"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface StaticPageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export default function StaticPageHeader({
  title,
  highlight,
  description,
  className,
}: StaticPageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 overflow-hidden bg-background",
        className
      )}
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{title}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  {highlight}
                </span>
              </>
            ) : null}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
