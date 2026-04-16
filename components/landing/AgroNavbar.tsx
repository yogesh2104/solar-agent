"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#services" },
  { name: "Benefits", href: "#benefits" },
  { name: "Projects", href: "#projects" },
];

export default function AgroNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center justify-between w-full max-w-6xl px-4 md:px-8 py-3 rounded-full border transition-all duration-500",
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border-border/40 shadow-xl shadow-black/5 py-2" 
            : "bg-white/40 backdrop-blur-md border-white/20 py-4"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
            E
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Ecoray
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="default" 
            className="rounded-full hidden md:flex items-center gap-2 px-6 h-11"
          >
            Contact us
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center -mr-2">
              <Phone size={14} className="text-white" />
            </div>
          </Button>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed inset-x-4 top-24 bg-white/95 backdrop-blur-2xl border border-border/40 rounded-3xl p-6 shadow-2xl md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-foreground py-2 border-b border-border/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full rounded-2xl h-14 mt-4 text-lg font-bold">
                Contact us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
