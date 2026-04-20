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

  if (hideNavbar) {
    return null;
  }

  const compactShell = scrolled || !isHome || mobileMenuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-2 shadow-[0_20px_50px_rgba(8,17,31,0.08)] transition-all duration-300 md:px-6",
          compactShell
            ? "border-white/80 bg-white/88 text-slate-950 backdrop-blur-2xl"
            : "border-white/20 bg-white/12 text-white backdrop-blur-xl",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative h-16 w-16 rounded-full">
            {/* Light bg logo (Logo1.png) — shown when navbar is white/scrolled */}
            <Image
              src="/Logo1.png"
              alt={siteConfig.company.name}
              fill
              sizes="64px"
              className={cn(
                "object-contain transition-all duration-300 rounded-full!",
                compactShell ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
              priority
            />
            {/* Dark bg logo (logo.png) — shown when navbar is transparent/dark */}
            <Image
              src="/logo.png"
              alt={siteConfig.company.name}
              fill
              sizes="64px"
              className={cn(
                "object-contain transition-all duration-300 rounded-full!",
                compactShell ? "opacity-0 pointer-events-none" : "opacity-100",
              )}
              priority
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-2 rounded-full border border-transparent px-2 py-1">
          {siteConfig.navigation.map((item) => {
            const active = isLinkActive(pathname, item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  compactShell
                    ? "text-slate-600 hover:bg-slate-950/5 hover:text-slate-950"
                    : "text-white/82 hover:bg-white/12 hover:text-white",
                  active &&
                  (compactShell
                    ? "bg-slate-950 text-white shadow-[0_12px_30px_rgba(8,17,31,0.16)]"
                    : "bg-white text-slate-950"),
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.company.contact.phone.replace(/\s+/g, "")}`}
            className={cn(
              "hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium xl:flex",
              compactShell
                ? "bg-slate-950/5 text-slate-600"
                : "bg-white/12 text-white/86",
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
                "hidden h-11 rounded-full border px-5 text-sm font-semibold shadow-none md:inline-flex",
                compactShell
                  ? "border-slate-200 bg-white text-slate-950 hover:bg-slate-50"
                  : "border-white/18 bg-white/8 text-white hover:bg-white/12",
              )}
            >
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                Admin
              </Link>
            </Button>
          )}

          <Button
            asChild
            className={cn(
              "h-11 rounded-full px-5 text-sm font-semibold shadow-none",
              compactShell
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-black hover:bg-white/90",
            )}
          >
            <Link href="/get-quote" onClick={() => setMobileMenuOpen(false)}>
              Get Quote
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>

          <button
            type="button"
            className={cn(
              "flex size-11 items-center justify-center rounded-full lg:hidden",
              compactShell
                ? "bg-slate-950 text-white"
                : "bg-white text-slate-950",
            )}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-4xl border border-white/80 bg-white/95 p-4 shadow-[0_26px_60px_rgba(8,17,31,0.12)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-950/5 hover:text-slate-950"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-3xl bg-slate-950 p-4 text-white">
              <div className="text-xs uppercase  text-white/55">
                Enterprise Desk
              </div>
              <a
                href={`tel:${siteConfig.company.contact.phone.replace(/\s+/g, "")}`}
                className="mt-3 block text-lg font-semibold"
              >
                {siteConfig.company.contact.phone}
              </a>
              {isAdmin && (
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 h-11 w-full rounded-full border-white/14 bg-white/10 text-white hover:bg-white/14"
                >
                  <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                    Open Dashboard
                  </Link>
                </Button>
              )}
              <Button
                asChild
                className="mt-4 h-11 w-full rounded-full bg-secondary text-slate-950 hover:bg-secondary/90"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Talk to Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
