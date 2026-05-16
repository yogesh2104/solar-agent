"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import siteConfig from "@/lib/siteConfig";
import { isBusinessHours } from "@/utils/isBusinessHours";

interface ContactAvailabilityProps {
  compact?: boolean;
  className?: string;
}

export default function ContactAvailability({
  compact = false,
  className = "",
}: ContactAvailabilityProps) {
  const { company } = siteConfig;
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const updateStatus = () => setIsOpen(isBusinessHours());

    const frame = window.requestAnimationFrame(updateStatus);

    const interval = setInterval(updateStatus, 60_000);
    return () => {
      window.cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, []);

  if (isOpen === null) {
    return (
      <div
        className={`h-24 w-full animate-pulse rounded-[1.6rem] border border-slate-200 bg-white/70 ${className}`}
      />
    );
  }

  if (compact) {
    const compactContent = (
      <>
        <span className="relative flex size-2">
          {isOpen && (
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex size-2 rounded-full ${
              isOpen ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />
        </span>
        {isOpen && <Phone className="size-3.5 text-emerald-600" />}
        <span className="text-xs font-medium text-slate-600">
          {isOpen ? company.contact.phone : "Offline - 11 AM-5 PM IST"}
        </span>
      </>
    );

    if (isOpen) {
      return (
        <a
          href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
          className={`flex items-center gap-2 transition-colors hover:text-primary ${className}`}
        >
          {compactContent}
        </a>
      );
    }

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {compactContent}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="online"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`space-y-3 ${className}`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-700">
              Support team is online
            </span>
          </div>

          <div className="grid gap-3">
            <motion.a
              href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:border-emerald-200 hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Phone className="size-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Call us
                </div>
                <div className="mt-0.5 text-sm font-semibold text-slate-900">
                  {company.contact.phone}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={`https://wa.me/${company.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:border-emerald-200 hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <MessageCircle className="size-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  WhatsApp
                </div>
                <div className="mt-0.5 text-sm font-semibold text-slate-900">
                  Chat with us
                </div>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${company.contact.email}`}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:border-emerald-200 hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Mail className="size-4" />
              </span>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Email
                </div>
                <div className="mt-0.5 text-sm font-semibold text-slate-900">
                  {company.contact.email}
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="offline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={className}
        >
          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5">
              <span className="size-2 rounded-full bg-slate-400" />
              <span className="text-xs font-semibold text-slate-500">
                Currently offline
              </span>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-slate-400" />
              <div>
                <p className="text-base font-semibold text-slate-800">
                  Our support team is currently offline.
                </p>
                <p className="mt-1.5 text-sm leading-6 text-slate-500">
                  Working hours:{" "}
                  <span className="font-semibold text-slate-700">
                    11:00 AM - 5:00 PM IST
                  </span>
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Please leave a message and we will get back to you during
                  business hours.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Leave a message
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
