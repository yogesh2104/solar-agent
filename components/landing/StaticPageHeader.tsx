import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home, Sun } from "lucide-react";
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
        className,
      )}
    >
      {/* Background patterns - matching Hero style */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 opacity-40" />
            <span className="text-foreground font-semibold">{title}</span>
          </nav>

          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tight leading-[0.9]">
            <span className="flex flex-wrap items-center gap-x-6 gap-y-4">
              {title}
              {highlight ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {highlight}
                </span>
              ) : (
                <span className="w-12 h-12 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <Sun className="w-6 h-6 md:w-10 md:h-10 text-primary-foreground" />
                </span>
              )}
            </span>
          </h1>

          {description && (
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mt-8">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
