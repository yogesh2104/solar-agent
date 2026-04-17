"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";

export default function B2BFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const { company, footer } = siteConfig;

  return (
    <footer className="border-t border-white/8 bg-[var(--brand-ink)] text-white">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="mb-14 rounded-[2rem] border border-white/10 bg-white/4 p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                Enterprise support
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {footer.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                {footer.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-[var(--brand-lime)] px-5 text-slate-950 hover:bg-[var(--brand-lime)]/90"
              >
                <Link href="/get-quote">
                  Start Quote
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-transparent px-5 text-white hover:bg-white/8"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-lime)] text-slate-950">
                <Zap className="size-4 fill-current" />
              </span>
              <div>
                <div className="text-xl font-semibold tracking-tight">
                  {company.name}
                </div>
                <div className="text-xs uppercase  text-white/45">
                  B2B Solar Infrastructure
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
              {company.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Tier-1 supply", "Commercial EPC", "Hybrid-ready systems"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Solutions
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {footer.solutionLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/62 transition-colors hover:text-[var(--brand-lime)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Company
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {footer.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/62 transition-colors hover:text-[var(--brand-lime)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Contact
            </div>
            <div className="mt-5 space-y-4">
              <a
                href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-3 text-sm text-white/62 transition-colors hover:text-[var(--brand-lime)]"
              >
                <Phone className="mt-0.5 size-4 shrink-0" />
                <span>{company.contact.phone}</span>
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-start gap-3 text-sm text-white/62 transition-colors hover:text-[var(--brand-lime)]"
              >
                <Mail className="mt-0.5 size-4 shrink-0" />
                <span>{company.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/62">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{company.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
          <div>{footer.copyright}</div>
          <div className="flex flex-wrap gap-4">
            {footer.legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-[var(--brand-lime)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
