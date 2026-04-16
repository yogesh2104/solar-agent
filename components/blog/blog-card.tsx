import Image from "next/image";
import Link from "next/link";
import { Blog } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";

interface BlogCardProps {
  blog: Blog;
  isAdmin?: boolean;
}

export const BlogCard = ({ blog, isAdmin }: BlogCardProps) => {
  const href = isAdmin ? `/admin/blogs/${blog.id}` : `/blogs/${blog.slug}`;

  return (
    <div className="group flex flex-col gap-6">
      <Link
        href={href}
        className="relative aspect-16/10 overflow-hidden rounded-[2.5rem]"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 right-6">
          <Badge className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            {blog.tags[0] || "Insight"}
          </Badge>
        </div>
      </Link>

      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
          <span>{format(new Date(blog.createdAt), "MMMM d, yyyy")}</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>5 min read</span>
        </div>

        <Link href={href}>
          <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {blog.metadata ||
            "Discover how sustainable energy solutions are transforming our world and driving innovation across industries."}
        </p>

        {!isAdmin && (
          <Link
            href={href}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center mt-2 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all self-end"
          >
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};
