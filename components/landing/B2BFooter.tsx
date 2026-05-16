"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteConfig from "@/lib/siteConfig";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function B2BFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const { company, footer } = siteConfig;

  return (
    <footer className="border-t border-[rgba(15,23,42,0.07)] bg-white text-slate-950">
      <div className="container mx-auto px-6 py-10">
        {/* CTA band */}
        <div className="mb-10 rounded-[2.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f7faf9] p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Enterprise support
              </div>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {footer.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#475569] md:text-base">
                {footer.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_6px_24px_rgba(34,197,94,0.25)]"
              >
                <Link href="/contact">
                  Contact Sales
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="px-0 sm:px-4">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Logo column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-36 w-36">
                  <Image
                    src="/Logo1.png"
                    alt={siteConfig.company.name}
                    fill
                    sizes="144px"
                    className={cn("object-contain transition-all duration-300")}
                    priority
                  />
                </div>
              </Link>

              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-20 w-40">
                  <Image
                    src="/MSME.jpeg"
                    alt="MSME Government Approval"
                    fill
                    className="object-fit"
                  />
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                Solutions
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {footer.solutionLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                Company
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {footer.quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                Contact
              </div>
              <div className="mt-5 space-y-4">
                <a
                  href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
                  className="flex min-w-0 items-start gap-3 text-sm text-slate-500 transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <span className="break-words">{company.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex min-w-0 items-start gap-3 text-sm text-slate-500 transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  <span className="break-words">{company.contact.email}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span className="break-words">{company.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(15,23,42,0.07)] pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <div>{footer.copyright}</div>
            <div className="font-medium text-slate-500">
              {company.contact.locationBoost}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {footer.legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Keyword Block (Visually Hidden) */}
        <div className="sr-only mt-8 text-[10px] text-slate-100 select-none pointer-events-none">
          solar company India, solar panel installation residential commercial
          industrial utility, Surya Ghar Yojana Mumbai, EV charger installation,
          robotic cleaning utility solar, Across India, Pan India solar company,
          Pan India solar installation, solar Navi Mumbai Thane Maharashtra,
          solar panel installation, solar panel installation residential, solar
          panel installation commercial, solar panel installation industrial,
          solar panel installation utility
        </div>
      </div>
    </footer>
  );
}
