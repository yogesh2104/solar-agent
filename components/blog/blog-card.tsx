import Image from "next/image";
import Link from "next/link";
import { Blog } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";

interface BlogCardProps {
  blog: Blog;
  isAdmin?: boolean;
}

export const BlogCard = ({ blog, isAdmin }: BlogCardProps) => {
  const href = isAdmin ? `/admin/blogs/${blog.id}` : `/blogs/${blog.slug}`;

  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(8,17,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(8,17,31,0.08)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
          <div className="absolute left-5 top-5">
            <Badge className="rounded-full border border-white/40 bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-none">
              {blog.tags[0] || "Insight"}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Calendar className="size-3.5 text-slate-400" />
            <span>{format(new Date(blog.createdAt), "MMMM d, yyyy")}</span>
            <span className="size-1 rounded-full bg-slate-300" />
            <span>5 min read</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-slate-700">
            {blog.title}
          </h3>

          <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
            {blog.metadata ||
              "Discover how sustainable energy solutions are transforming commercial energy decisions and modern infrastructure."}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-950">
            {isAdmin ? "Open article" : "Read article"}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
};
