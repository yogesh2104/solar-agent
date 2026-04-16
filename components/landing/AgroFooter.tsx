"use client";

import Link from "next/link";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AgroFooter() {
  return (
    <footer className="bg-agro-dark text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.03] select-none pointer-events-none translate-y-1/2">
        <h2 className="text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter">
          Powering the Future
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8">Sign up for our Newsletter</h3>
            <div className="relative max-w-md group">
              <Input
                className="bg-white/5 border-white/10 rounded-2xl h-16 pl-6 pr-20 text-white placeholder:text-white/40 focus-visible:ring-primary/50"
                placeholder="Enter your email address..."
              />
              <button className="absolute right-2 top-2 bottom-2 w-12 rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-all">
                <Send size={18} className="text-agro-dark" />
              </button>
            </div>
            <p className="mt-4 text-white/40 text-sm">
              Stay updated with the latest in agricultural solar technology.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-8">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Phone</p>
                  <p className="font-bold">+353 21 431 4353</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Email</p>
                  <p className="font-bold">info@ecoray-solar.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-lg mb-8">Location</h4>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <p className="text-white/60 leading-relaxed font-medium">
                National Sculpture Factory, <br />
                Albert Road, Cork City, Ireland.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-white/40 text-sm mb-2">Need some help?</p>
              <Link href="/contact" className="text-primary font-bold border-b border-primary/20 hover:border-primary transition-all">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm font-medium">
          <p>© Copyright 2024 Ecoray - All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="flex gap-4">
            {/* {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-primary hover:text-agro-dark transition-all">
                <Icon size={18} />
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </footer>
  );
}
