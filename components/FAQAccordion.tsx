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
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openIndex === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "group rounded-2xl border transition-all duration-300",
              isOpen
                ? "border-primary/20 bg-primary/[0.02] shadow-sm"
                : "border-border/50 bg-card/50 hover:border-primary/10 hover:bg-card"
            )}
          >
            <button
              onClick={() => toggleIndex(item.id)}
              className="flex w-full items-center justify-between p-5 text-left md:p-6"
            >
              <span
                className={cn(
                  "text-base font-semibold transition-colors duration-300 md:text-lg",
                  isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                )}
              >
                {item.question}
              </span>
              <div
                className={cn(
                  "ml-4 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "border-primary/20 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground group-hover:border-primary/20 group-hover:text-primary"
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
                  <div className="border-t border-primary/5 px-5 pb-6 pt-2 md:px-6 md:pb-8">
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
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
