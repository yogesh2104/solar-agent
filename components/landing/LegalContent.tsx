import { cn } from "@/lib/utils";

interface LegalContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalContent({ children, className }: LegalContentProps) {
  return (
    <div
      className={cn(
        "prose prose-slate dark:prose-invert max-w-none lg:prose-lg",
        "prose-headings:text-foreground prose-headings:font-bold",
        "prose-p:text-muted-foreground prose-p:leading-relaxed",
        "prose-li:text-muted-foreground",
        "prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline",
        "py-16 px-6 container mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
