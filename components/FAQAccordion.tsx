"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  variant?: "plus" | "chevron";
}

export const FAQAccordion = ({
  items,
  className,
  variant = "chevron",
}: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleIndex = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIndex === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "group rounded-[1.35rem] border transition-all duration-300",
              isOpen
                ? "border-primary/20 bg-white shadow-sm"
                : "border-slate-200 bg-white/75 hover:border-primary/20 hover:bg-white hover:shadow-sm"
            )}
          >
            <button
              onClick={() => toggleIndex(item.id)}
              className="flex w-full items-center justify-between p-5 text-left md:p-6"
            >
              <span
                className={cn(
                  "text-base font-semibold tracking-tight transition-colors duration-300 md:text-lg",
                  isOpen ? "text-slate-950" : "text-slate-800 group-hover:text-primary"
                )}
              >
                {item.question}
              </span>
              <div
                className={cn(
                  "ml-4 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "border-primary/20 bg-primary/10 text-primary"
                    : "border-slate-200 bg-[#f7faf9] text-slate-500 group-hover:border-primary/20 group-hover:text-primary"
                )}
              >
                {variant === "chevron" ? (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                ) : isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="border-t border-slate-100 px-5 pb-6 pt-2 md:px-6 md:pb-8">
                    <p className="text-sm leading-7 text-slate-600 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
