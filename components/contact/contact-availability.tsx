"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { isBusinessHours } from "@/utils/isBusinessHours";
import siteConfig from "@/lib/siteConfig";

interface ContactAvailabilityProps {
  /** If true, only renders the availability indicator (compact mode) */
  compact?: boolean;
  className?: string;
}

export default function ContactAvailability({
  compact = false,
  className = "",
}: ContactAvailabilityProps) {
  const { company } = siteConfig;
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration-safe: only check business hours after mount
  useEffect(() => {
    setMounted(true);
    setIsOpen(isBusinessHours());

    // Re-check every minute
    const interval = setInterval(() => {
      setIsOpen(isBusinessHours());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch — render nothing until mounted
  if (!mounted) {
    return (
      <div
        className={`animate-pulse rounded-2xl bg-slate-100 h-24 w-full ${className}`}
      />
    );
  }

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span
          className={`relative flex size-2 ${isOpen ? "" : ""}`}
        >
          {isOpen && (
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex size-2 rounded-full ${
              isOpen ? "bg-emerald-500" : "bg-slate-400"
            }`}
          />
        </span>
        <span className="text-xs font-medium text-slate-600">
          {isOpen ? "Online now" : "Offline — 11 AM–5 PM IST"}
        </span>
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
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-700">
              Support team is online
            </span>
          </div>

          {/* Contact cards */}
          <div className="grid gap-3">
            {/* Phone */}
            <motion.a
              href={`tel:${company.contact.phone.replace(/\s+/g, "")}`}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
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

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${company.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
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

            {/* Email */}
            <motion.a
              href={`mailto:${company.contact.email}`}
              whileHover={{ y: -2 }}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
          className={`${className}`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Status pill */}
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
                    11:00 AM – 5:00 PM IST
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
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Leave a message
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
