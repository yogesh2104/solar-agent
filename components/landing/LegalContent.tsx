import { cn } from "@/lib/utils";

interface LegalContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalContent({ children, className }: LegalContentProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] pb-20 pt-6">
      <div className="absolute right-0 top-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(143,183,223,0.24),transparent_68%)]" />
      <div className="absolute bottom-0 left-0 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(204,255,52,0.16),transparent_72%)]" />

      <div className="container mx-auto px-6">
        <div
          className={cn(
            "prose prose-lg prose-slate mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(8,17,31,0.06)] md:p-12",
            "prose-headings:mt-10 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-950",
            "prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-8 prose-h2:text-2xl md:prose-h2:text-3xl",
            "prose-p:text-slate-600 prose-p:leading-8",
            "prose-li:text-slate-600 prose-li:leading-8",
            "prose-strong:text-slate-900",
            "prose-a:text-slate-950 prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-slate-700",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
