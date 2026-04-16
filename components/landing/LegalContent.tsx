import { cn } from "@/lib/utils";

interface LegalContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalContent({ children, className }: LegalContentProps) {
  return (
    <div className="bg-[#080f1e] pb-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5a623]/4 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div
          className={cn(
            "prose max-w-4xl lg:prose-lg mx-auto",
            // Dark theme headings
            "prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-10",
            "prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:border-b prose-h2:border-white/8 prose-h2:pb-3 prose-h2:text-[#f5a623]",
            // Body text
            "prose-p:text-white/50 prose-p:leading-relaxed prose-p:text-base",
            "prose-li:text-white/50 prose-li:text-base",
            "prose-strong:text-white/80 prose-strong:font-semibold",
            // Links
            "prose-a:text-[#f5a623] prose-a:no-underline hover:prose-a:underline",
            // Lists
            "prose-ul:text-white/50",
            // Card container
            "bg-[#050a14] border border-white/8 rounded-3xl p-8 md:p-14 shadow-2xl",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
