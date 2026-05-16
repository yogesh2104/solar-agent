"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import siteConfig from "@/lib/siteConfig";

function isLinkActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return pathname === "/" && href === "/#hero";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function B2BNavbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const hideNavbar = pathname.startsWith("/admin");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userRole = (session?.user as { role?: string } | undefined)?.role;
  const isAdmin = userRole === "admin";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hideNavbar) return null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[rgba(15,23,42,0.07)] bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(15,23,42,0.05)]"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative h-12 w-12">
            <Image
              src="/Logo1.png"
              alt={siteConfig.company.name}
              fill
              sizes="48px"
              className="rounded-full object-contain"
              priority
            />
          </div>
          <span
            className="ml-2.5 hidden text-sm font-bold tracking-tight text-[#0f172a] sm:block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {siteConfig.company.name}
          </span>
        </Link>

        {/* Desktop nav links — clean minimal */}
        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.navigation.map((item) => {
            const active = isLinkActive(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150",
                  active
                    ? "text-[#0f172a]"
                    : "text-[#64748b] hover:text-[#0f172a]",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isAdmin && (
            <Link
              href="/admin"
              className="hidden text-sm font-medium text-[#64748b] transition-colors hover:text-[#0f172a] lg:block"
            >
              Admin
            </Link>
          )}

          {/* Contact CTA — clean outline pill */}
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full border border-[rgba(15,23,42,0.18)] px-5 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:border-[#22c55e] hover:text-[#22c55e] lg:inline-flex"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg border border-[rgba(15,23,42,0.12)] text-[#0f172a] transition-colors hover:bg-[#f8faf9] lg:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-[rgba(15,23,42,0.07)] bg-white px-6 pb-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1 pt-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-[#475569] transition-colors hover:bg-[#f8faf9] hover:text-[#0f172a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-[rgba(15,23,42,0.07)] pt-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
                Contact
              </div>
              <a
                href={`tel:${siteConfig.company.contact.phone.replace(/\s+/g, "")}`}
                className="mt-2 block text-base font-semibold text-[#0f172a]"
              >
                {siteConfig.company.contact.phone}
              </a>
              <Link
                href="/contact"
                className="mt-4 flex h-10 items-center justify-center rounded-full bg-[#0f172a] text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
