import { cn } from "@/lib/utils";

interface LegalContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalContent({ children, className }: LegalContentProps) {
  return (
    <div className="bg-background pb-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 blur-[120px] rounded-full translate-x-1/2 -z-10" />
      
      <div
        className={cn(
          "prose prose-slate dark:prose-invert max-w-4xl lg:prose-xl mx-auto",
          "prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight",
          "prose-p:text-muted-foreground/80 prose-p:leading-relaxed prose-p:text-lg",
          "prose-li:text-muted-foreground/80 prose-li:text-lg",
          "prose-strong:text-foreground/90 prose-strong:font-bold",
          "prose-a:text-primary hover:prose-a:text-primary/80 transition-colors prose-a:no-underline hover:prose-a:underline",
          "bg-card/30 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-8 md:p-16 shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
