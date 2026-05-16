"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import siteConfig from "@/lib/siteConfig";

function isLinkActive(pathname: string, href: string) {
  if (href.startsWith("/#")) {
    return pathname === "/" && href === "/#hero";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function B2BNavbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isHome = pathname === "/";
  const hideNavbar = pathname.startsWith("/admin");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userRole = (session?.user as { role?: string } | undefined)?.role;
  const isAdmin = userRole === "admin";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hideNavbar) return null;

  // On home page: transparent until scrolled. On other pages: always glass.
  const compactShell = scrolled || !isHome || mobileMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 md:px-6",
          compactShell
            ? "border-[rgba(15,23,42,0.07)] bg-[rgba(255,255,255,0.88)] text-slate-950 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-white/20 bg-white/10 text-white backdrop-blur-md shadow-none",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative h-16 w-16 rounded-full">
            <Image
              src="/Logo1.png"
              alt={siteConfig.company.name}
              fill
              sizes="64px"
              className={cn(
                "rounded-full! object-contain transition-all duration-300",
                compactShell ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
              priority
            />
            <Image
              src="/logo.png"
              alt={siteConfig.company.name}
              fill
              sizes="64px"
              className={cn(
                "rounded-full! object-contain transition-all duration-300",
                compactShell ? "opacity-0 pointer-events-none" : "opacity-100",
              )}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 rounded-full px-2 py-1">
          {siteConfig.navigation.map((item) => {
            const active = isLinkActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  compactShell
                    ? "text-slate-600 hover:bg-slate-950/5 hover:text-slate-950"
                    : "text-white/85 hover:bg-white/12 hover:text-white",
                  active &&
                    (compactShell
                      ? "bg-slate-950 text-white shadow-sm"
                      : "bg-white/20 text-white"),
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right side: Phone + CTA */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.company.contact.phone.replace(/\s+/g, "")}`}
            className={cn(
              "hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium xl:flex transition-colors duration-200",
              compactShell
                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                : "bg-white/12 text-white/88 hover:bg-white/20",
            )}
          >
            <Phone className="size-4" />
            {siteConfig.company.contact.phone}
          </a>

          {isAdmin && (
            <Button
              asChild
              variant="outline"
              className={cn(
                "hidden h-10 rounded-full border px-5 text-sm font-semibold shadow-none md:inline-flex",
                compactShell
                  ? "border-slate-200 bg-white text-slate-950 hover:bg-slate-50"
                  : "border-white/20 bg-white/8 text-white hover:bg-white/14",
              )}
            >
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                Admin
              </Link>
            </Button>
          )}

          {/* Primary CTA — green gradient button */}
          <Button
            asChild
            className={cn(
              "h-10 rounded-full px-5 text-sm font-semibold shadow-none transition-all duration-200",
              compactShell
                ? "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_4px_20px_rgba(34,197,94,0.25)]"
                : "bg-white text-slate-950 hover:bg-white/92",
            )}
          >
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={cn(
              "flex size-10 items-center justify-center rounded-full lg:hidden transition-colors duration-200",
              compactShell
                ? "bg-slate-950 text-white hover:bg-slate-800"
                : "bg-white text-slate-950 hover:bg-white/92",
            )}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.07)] bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-[#f7faf9] p-4">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Enterprise Desk
              </div>
              <a
                href={`tel:${siteConfig.company.contact.phone.replace(/\s+/g, "")}`}
                className="mt-3 flex items-center gap-2 text-lg font-semibold text-slate-950 hover:text-primary transition-colors"
              >
                <Phone className="size-5 text-primary" />
                {siteConfig.company.contact.phone}
              </a>

              {isAdmin && (
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 h-11 w-full rounded-full border-slate-200 bg-white text-slate-950 hover:bg-slate-50"
                >
                  <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                    Open Dashboard
                  </Link>
                </Button>
              )}
              <Button
                asChild
                className="mt-3 h-11 w-full rounded-full bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Talk to Sales
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
