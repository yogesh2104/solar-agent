"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sessionUser = session?.user as { role?: string } | undefined;
  const isAdmin = sessionUser?.role === "admin";
  const hideNavbar = pathname.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hideNavbar) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#050a14]/90 backdrop-blur-md border-b border-white/8 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#f5a623] p-2 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-[#f5a623]/20">
            <Zap className="w-6 h-6 text-black fill-current" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Suntrix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-6 py-2 bg-white/4 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-[#f5a623] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link href="/admin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full px-4 hover:bg-primary/10 text-primary gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  Admin
                </Button>
              </Link>
            )}
            <Link href="/get-quote">
              <Button
                variant="default"
                size="default"
                className="rounded-full px-8 bg-[#f5a623] hover:bg-[#e09520] text-black font-bold shadow-lg shadow-[#f5a623]/20 transition-all hover:scale-105 active:scale-95"
              >
                Get Enterprise Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShieldCheck className="w-5 h-5" />
                  Admin Panel
                </Link>
              )}
              <Link href="/get-quote" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full rounded-full">
                  Get Quotation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
