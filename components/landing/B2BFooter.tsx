"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

export default function B2BFooter() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const { company, footer } = siteConfig;

  return (
    <footer className="border-t border-[rgba(15,23,42,0.07)] bg-white">
      <div className="container mx-auto px-6 py-16 lg:px-10">

        {/* Top section — logo + tagline + CTA */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="flex gap-10">
            <Link href="/" className="inline-block">
              <div className="relative h-28 w-28">
                <Image
                  src="/Logo1.png"
                  alt={siteConfig.company.name}
                  fill
                  sizes="28px"
                  className="rounded-full object-contain"
                />
              </div>
            </Link>
            <div>
              <p
                className="mt-4 text-2xl font-black tracking-tight text-[#0f172a] md:text-3xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {footer.title}
              </p>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#64748b]">
                {footer.description}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 self-start rounded-full border border-[rgba(15,23,42,0.18)] px-5 text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:border-[#22c55e] hover:text-[#22c55e]"
          >
            Contact Us
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 border-t border-[rgba(15,23,42,0.07)] pt-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* MSME badge */}
          <div>
            <div className="relative h-16 w-32">
              <Image
                src="/MSME.jpeg"
                alt="MSME Government Approval"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="mt-4 space-y-3">
              <a
                href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-xs text-[#64748b] transition-colors hover:text-[#22c55e]"
              >
                <Phone className="size-3.5 shrink-0" />
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-2 text-xs text-[#64748b] transition-colors hover:text-[#22c55e]"
              >
                <Mail className="size-3.5 shrink-0" />
                {company.contact.email}
              </a>
              <div className="flex items-start gap-2 text-xs text-[#64748b]">
                <MapPin className="mt-0.5 size-3.5 shrink-0" />
                {company.contact.address}
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
              Company
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {footer.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#475569] transition-colors hover:text-[#22c55e]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions links */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
              Solutions
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {footer.solutionLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#475569] transition-colors hover:text-[#22c55e]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
              Legal
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {footer.legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#475569] transition-colors hover:text-[#22c55e]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[rgba(15,23,42,0.07)] pt-6 text-xs text-[#94a3b8] md:flex-row md:items-center md:justify-between">
          <div>{footer.copyright}</div>
          <div className="text-[#b0b8c4]">{company.contact.locationBoost}</div>
        </div>
      </div>

      {/* SEO hidden block */}
      <div className="sr-only mt-8 text-[10px] text-slate-100 select-none pointer-events-none">
        solar company India, solar panel installation residential commercial
        industrial utility, Surya Ghar Yojana Mumbai, EV charger installation,
        robotic cleaning utility solar, Across India, Pan India solar company,
        Pan India solar installation, solar Navi Mumbai Thane Maharashtra,
        solar panel installation, solar panel installation residential, solar
        panel installation commercial, solar panel installation industrial,
        solar panel installation utility
      </div>
    </footer>
  );
}
