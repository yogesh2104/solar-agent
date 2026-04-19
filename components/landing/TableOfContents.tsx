"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2"))
      .map((elem) => {
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
      { rootMargin: "-100px 0% -80% 0%" }
    );

    elements.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-32 hidden w-64 shrink-0 lg:block">
      <div className="flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
        <List className="h-4 w-4" />
        Contents
      </div>
      <nav className="flex flex-col gap-3 border-l border-slate-200 pl-4">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "text-sm font-medium transition-all hover:text-primary",
              activeId === heading.id
                ? "text-primary translate-x-1"
                : "text-slate-500"
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
