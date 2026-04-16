"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "EPC Solar Projects", href: "/#services" },
    { name: "OPEX / PPA Models", href: "/#services" },
    { name: "Battery Storage", href: "/#services" },
    { name: "O&M Services", href: "/#services" },
  ],
  company: [
    { name: "About Suntrix", href: "/about" },
    { name: "Case Studies", href: "/projects" },
    { name: "Blog & Insights", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
};

const certBadges = ["ISO 9001:2015", "MNRE Approved", "NABCEP Certified"];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#050a14] border-t border-white/8 pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-[#f5a623] p-2 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-[#f5a623]/20">
                <Zap className="w-5 h-5 text-black fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Suntrix</span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm">
              India&apos;s leading B2B solar energy partner. We power enterprises, factories, and data centers with scalable, bankable solar solutions.
            </p>
            {/* Cert badges */}
            <div className="flex flex-wrap gap-2">
              {certBadges.map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-white/30 text-[10px] font-semibold"
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
            {/* CTA */}
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5a623]/10 border border-[#f5a623]/20 text-[#f5a623] text-sm font-bold hover:bg-[#f5a623]/20 transition-colors group/cta"
            >
              Get Enterprise Quote
              <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-white/60 text-xs uppercase tracking-[0.2em] mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/35 hover:text-[#f5a623] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/15 group-hover:bg-[#f5a623] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white/60 text-xs uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/35 hover:text-[#f5a623] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/15 group-hover:bg-[#f5a623] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white/60 text-xs uppercase tracking-[0.2em] mb-6">Enterprise Line</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-[#f5a623]/8 border border-[#f5a623]/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#f5a623]" />
                </div>
                <a href="tel:+919876543210" className="text-white/35 text-sm hover:text-[#f5a623] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-[#f5a623]/8 border border-[#f5a623]/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#f5a623]" />
                </div>
                <a href="mailto:enterprise@suntrix.in" className="text-white/35 text-sm hover:text-[#f5a623] transition-colors">
                  enterprise@suntrix.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#f5a623]/8 border border-[#f5a623]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#f5a623]" />
                </div>
                <span className="text-white/35 text-sm">
                  Suntrix Tower, BKC,<br />Mumbai – 400 051
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20" suppressHydrationWarning>
            © {new Date().getFullYear()} Suntrix Energy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-white/20">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#f5a623] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
