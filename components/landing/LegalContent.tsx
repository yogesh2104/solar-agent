// import { cn } from "@/lib/utils";
// import TableOfContents from "./TableOfContents";

// interface LegalContentProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export default function LegalContent({ children, className }: LegalContentProps) {
//   return (
//     <section className="relative overflow-hidden bg-white pb-12 pt-12">
//       {/* Subtle Background Elements */}
//       <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.03),transparent_70%)]" />
//       <div className="absolute bottom-0 left-0 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(204,255,52,0.04),transparent_70%)]" />

//       <div className="container mx-auto px-6">
//         <div className="flex flex-col gap-12 lg:flex-row">
//           {/* Sticky Sidebar ToC */}
//           <TableOfContents />

//           {/* Main Content Area */}
//           <article
//             className={cn(
//               "prose prose-lg prose-slate w-full max-w-4xl shrink",
//               "prose-headings:scroll-mt-32 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900",
//               "prose-h2:mt-12 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-4 prose-h2:text-3xl",
//               "prose-p:text-slate-600 prose-p:leading-relaxed",
//               "prose-li:text-slate-600 prose-li:leading-relaxed",
//               "prose-strong:text-slate-900 prose-strong:font-semibold",
//               "prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline hover:prose-a:underline-offset-4",
//               "prose-ul:list-disc prose-ul:marker:text-primary/40",
//               className,
//             )}
//           >
//             {children}
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }

import { cn } from "@/lib/utils";
import TableOfContents from "./TableOfContents";

interface LegalContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalContent({
  children,
  className,
}: LegalContentProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 py-10">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-lime-400/10 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-72">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur lg:sticky lg:top-28">
              <p className="mb-4 text-sm font-semibold text-slate-500">
                On this page
              </p>
              <TableOfContents />
            </div>
          </aside>

          {/* Content */}
          <article
            className={cn(
              "w-full max-w-4xl",
              "rounded-3xl border border-slate-200 bg-white p-8 shadow-sm",
              "prose prose-slate prose-lg",
              "prose-headings:font-bold prose-headings:text-slate-900",
              "prose-h2:text-2xl prose-h2:mt-12 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100",
              "prose-p:text-slate-600 prose-p:leading-relaxed",
              "prose-li:text-slate-600",
              "prose-strong:text-slate-900",
              "prose-a:text-primary hover:prose-a:underline",
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
    <div className="my-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
      {children}
    </div>
  );
}

export function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">
      {children}
    </div>
  );
}
