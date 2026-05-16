import Image from "next/image";
import Link from "next/link";
import { Blog } from "@prisma/client";
import { ArrowUpRight, Calendar } from "lucide-react";
import { format } from "date-fns";

interface BlogCardProps {
  blog: Blog;
  isAdmin?: boolean;
}

export const BlogCard = ({ blog, isAdmin }: BlogCardProps) => {
  const href = isAdmin ? `/admin/blogs/${blog.id}` : `/blog/${blog.slug}`;

  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(15,23,42,0.08)] bg-white transition-shadow hover:shadow-[0_10px_32px_rgba(15,23,42,0.07)]">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute left-4 top-4">
            <span className="inline-flex rounded-full border border-[rgba(15,23,42,0.10)] bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#475569] backdrop-blur-sm">
              {blog.tags[0] || "Insight"}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2 text-[11px] font-medium text-[#94a3b8]">
            <Calendar className="size-3" />
            <span>{format(new Date(blog.createdAt), "MMMM d, yyyy")}</span>
          </div>

          <h3
            className="mt-3 text-base font-black leading-snug tracking-tight text-[#0f172a] transition-colors group-hover:text-[#22c55e]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {blog.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#64748b]">
            {blog.metadata ||
              "Discover how sustainable energy solutions are transforming commercial energy decisions."}
          </p>

          <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#22c55e]">
            {isAdmin ? "Open article" : "Read article"}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </article>
    </Link>
  );
};
