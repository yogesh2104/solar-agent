"use client";

import { MessageCircle } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import Link from "next/link";

export default function WhatsAppCTA() {
  const { contact } = siteConfig.company;

  if (!contact.whatsapp) return null;

  return (
    <Link
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-4 z-100 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact on WhatsApp"
    >
      {/* Background Pulse Effect */}
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/20 duration-1000" />

      {/* Button Body */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_24px_rgba(37,211,102,0.3)] group-hover:shadow-[0_16px_32px_rgba(37,211,102,0.4)]">
        <MessageCircle className="size-7 fill-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 hidden whitespace-nowrap rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-2xl transition-all group-hover:block animate-in fade-in slide-in-from-right-4 duration-300 border border-white/10 backdrop-blur-md">
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 rotate-45 size-2 bg-slate-950 border-r border-t border-white/10" />
      </div>
    </Link>
  );
}
