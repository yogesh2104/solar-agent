import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await db.blog.findUnique({ where: { slug, isPublished: true } });

  if (!blog) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${blog.title} | ELIZ ENERGY`,
    description:
      blog.metadata ||
      "Read more about commercial solar and energy infrastructure in Mumbai.",
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

  if (!blog) {
    notFound();
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.metadata || blog.title,
    "author": {
      "@type": "Organization",
      "name": "ELIZ ENERGY"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ELIZ ENERGY"
    },
    "image": blog.image,
    "datePublished": blog.createdAt.toISOString().split('T')[0],
  };

  return (
    <article className="bg-[#f7fbff] pb-20 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="container mx-auto max-w-5xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
        >
          <ArrowLeft className="size-4" />
          Back to articles
        </Link>

        <div className="mt-8 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(8,17,31,0.06)] md:p-10">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase  text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.04]">
            {blog.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-500">
                {blog.author.image ? (
                  <Image
                    src={blog.author.image}
                    alt={blog.author.name}
                    width={44}
                    height={44}
                    className="size-11 object-cover"
                  />
                ) : (
                  <UserIcon className="size-5" />
                )}
              </span>
              <span className="font-medium text-slate-700">
                {blog.author.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-slate-400" />
              <span>{format(new Date(blog.createdAt), "MMMM d, yyyy")}</span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-[0_20px_60px_rgba(8,17,31,0.06)]">
          <div className="relative aspect-[16/8]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(8,17,31,0.06)] md:p-12">
          <div
            className="prose prose-lg prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-950 prose-p:text-slate-600 prose-p:leading-8 prose-li:text-slate-600 prose-li:leading-8 prose-strong:text-slate-900 prose-a:text-slate-950 prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-[2.2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(8,17,31,0.06)] md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-500">
              {blog.author.image ? (
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  width={56}
                  height={56}
                  className="size-14 object-cover"
                />
              ) : (
                <UserIcon className="size-6" />
              )}
            </span>
            <div>
              <div className="text-sm text-slate-500">Written by</div>
              <div className="text-xl font-semibold text-slate-950">
                {blog.author.name}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-slate-200 bg-white px-5 text-slate-950 hover:bg-slate-50"
            >
              <Link href="/blog">More articles</Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800"
            >
              <Link href="/get-quote">Get enterprise quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
