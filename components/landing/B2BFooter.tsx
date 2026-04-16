"use client";

import Link from "next/link";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import siteConfig from "@/lib/siteConfig.json";

export default function B2BFooter() {
  const { company, footer } = siteConfig;

  return (
    <footer className="bg-slate-50 text-slate-950 pt-24 pb-12 overflow-hidden relative border-t border-slate-200">
      {/* Background Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.03] select-none pointer-events-none translate-y-1/2">
        <h2 className="text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter text-slate-900">
          {footer.watermark}
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8 text-slate-900">{footer.newsletter.title}</h3>
            <div className="relative max-w-md group">
              <Input
                className="bg-white border-slate-200 rounded-2xl h-16 pl-6 pr-20 text-slate-900 placeholder:text-slate-400 focus-visible:ring-primary/20 shadow-sm"
                placeholder="Enter your email address..."
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                <Send size={18} className="text-white" />
              </button>
            </div>
            <p className="mt-4 text-slate-500 text-sm">
              {footer.newsletter.description}
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-slate-900">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Phone</p>
                  <p className="font-bold text-slate-800">{company.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Email</p>
                  <p className="font-bold text-slate-800">{company.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-lg mb-8 text-slate-900">Location</h4>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={18} />
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                {company.contact.address}
              </p>
            </div>
            <div className="mt-8">
              <p className="text-slate-500 text-sm mb-2">Need some help?</p>
              <Link href="/contact" className="text-primary font-bold border-b border-primary/20 hover:border-primary transition-all">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-medium">
          <p>{footer.copyright}</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>

          <div className="flex gap-4">
            {/* <Link href={company.social.facebook} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
              <Facebook size={18} />
            </Link>
            <Link href={company.social.twitter} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
              <Twitter size={18} />
            </Link>
            <Link href={company.social.linkedin} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
              <Linkedin size={18} />
            </Link>
            <Link href={company.social.instagram} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
              <Instagram size={18} />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
