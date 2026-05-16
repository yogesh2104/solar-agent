import { cn } from "@/lib/utils";
import TableOfContents from "./TableOfContents";

interface LegalContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalContent({ children, className }: LegalContentProps) {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="rounded-[1.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] p-5 lg:sticky lg:top-28">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                On this page
              </p>
              <TableOfContents />
            </div>
          </aside>

          {/* Content */}
          <article
            className={cn(
              "w-full max-w-3xl",
              "prose prose-slate prose-base",
              "prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#0f172a]",
              "prose-h2:text-xl prose-h2:mt-10 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[rgba(15,23,42,0.07)]",
              "prose-p:text-[#475569] prose-p:leading-7",
              "prose-li:text-[#475569]",
              "prose-strong:text-[#0f172a]",
              "prose-a:text-[#22c55e] hover:prose-a:underline",
              "prose-ul:list-none prose-ul:pl-0",
              className,
            )}
          >
            {children}
          </article>
        </div>
      </div>
    </section>
  );
}

export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-[rgba(34,197,94,0.15)] bg-[rgba(34,197,94,0.04)] p-4 text-sm text-[#16a34a]">
      {children}
    </div>
  );
}

export function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-[rgba(250,204,21,0.20)] bg-[rgba(250,204,21,0.04)] p-4 text-sm text-[#92400e]">
      {children}
    </div>
  );
}
