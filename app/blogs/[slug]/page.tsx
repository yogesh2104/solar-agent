import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, ArrowLeft, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await db.blog.findUnique({ where: { slug, isPublished: true } });
  if (!blog) return { title: "Post Not Found" };
  return {
    title: `${blog.title} | Suntrix`,
    description: blog.metadata || "Read more about solar energy.",
    openGraph: {
      title: blog.title,
      description: blog.metadata || "",
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await db.blog.findUnique({
    where: { slug, isPublished: true },
    include: { author: true },
  });

  if (!blog) notFound();

  return (
    <article className="min-h-screen bg-[#050a14] pb-28">
      {/* Top nav area */}
      <div className="bg-[#050a14] pt-28 pb-12 border-b border-white/8">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link href="/blogs">
            <Button
              variant="ghost"
              className="mb-8 group text-white/50 hover:text-white hover:bg-white/5 rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Button>
          </Link>

          {/* Tags */}
          <div className="flex items-center gap-2 mb-6">
            {blog.tags.map((tag) => (
              <Badge
                key={tag}
                className="px-3 py-1 uppercase tracking-wider text-[10px] font-bold bg-[#f5a623]/10 border border-[#f5a623]/20 text-[#f5a623] hover:bg-[#f5a623]/20"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-8">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center overflow-hidden">
                {blog.author.image ? (
                  <Image src={blog.author.image} alt={blog.author.name} width={40} height={40} className="object-cover" />
                ) : (
                  <UserIcon className="h-5 w-5 text-[#f5a623]" />
                )}
              </div>
              <span className="font-medium text-white/60">{blog.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(blog.createdAt), "MMMM d, yyyy")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl py-12">
        {/* Hero image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16 border border-white/8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/40 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-white/55 prose-p:leading-relaxed
            prose-a:text-[#f5a623] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white/80
            prose-li:text-white/55
            prose-img:rounded-2xl
            prose-blockquote:border-white/40 prose-blockquote:text-white/40
            prose-code:text-white prose-code:bg-white/5"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Author footer */}
        <div className="mt-20 pt-10 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-[#f5a623]/10 border border-[#f5a623]/20 flex items-center justify-center overflow-hidden">
              {blog.author.image ? (
                <Image src={blog.author.image} alt={blog.author.name} width={64} height={64} className="object-cover" />
              ) : (
                <UserIcon className="h-8 w-8 text-[#f5a623]" />
              )}
            </div>
            <div>
              <p className="text-sm text-white/30">Written by</p>
              <p className="text-xl font-bold text-white">{blog.author.name}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/15 text-white/60 bg-white/5 hover:bg-white/10"
            >
              Share Article
            </Button>
            <Link href="/get-quote">
              <Button
                size="lg"
                className="rounded-full px-8 bg-[#f5a623] hover:bg-[#e09520] text-black font-bold"
              >
                Get Enterprise Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
