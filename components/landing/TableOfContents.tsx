"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";
import * as motion from "framer-motion/client";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2")).map((elem) => {
      const id = elem.innerText.toLowerCase().replace(/\s+/g, "-");
      elem.id = id;
      return {
        id,
        text: elem.innerText.replace(/^\d+\.\s*/, ""), // Strip numbers for ToC
      };
    });
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -80% 0%" },
    );

    elements.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
        <List className="h-4 w-4" />
        Contents
      </div>
      <nav className="flex flex-col gap-3 border-l-2 border-slate-100 pl-4">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "text-sm font-semibold transition-all duration-300 hover:text-primary relative group py-0.5",
              activeId === heading.id
                ? "text-primary translate-x-1"
                : "text-slate-500",
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {activeId === heading.id && (
              <motion.span
                layoutId="active-toc"
                className="absolute -left-[18px] top-0 bottom-0 w-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
