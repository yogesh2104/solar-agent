import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User as UserIcon, Clock, Share2, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReadingProgress } from "@/components/blog/reading-progress";
import TableOfContents from "@/components/landing/TableOfContents";
import * as motion from "framer-motion/client";

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

  const readingTime = Math.ceil(blog.content.split(/\s+/).length / 200);

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
    <article className="relative min-h-screen bg-white">
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[#f4f8fe] pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(8,17,31,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(8,17,31,0.5)_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
          </motion.div>

          <div className="mt-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.1]"
            >
              {blog.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500"
            >
              <div className="flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full border-2 border-white shadow-sm">
                  {blog.author.image ? (
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100">
                      <UserIcon className="size-6 text-slate-400" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-slate-950">{blog.author.name}</div>
                  <div className="text-xs">Project Consultant</div>
                </div>
              </div>

              <div className="flex items-center gap-6 border-l border-slate-200 pl-8">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-slate-400" />
                  <span>{format(new Date(blog.createdAt), "MMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-slate-400" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto -mt-12 px-6 lg:-mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative aspect-[21/9] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-[0_32px_64px_-16px_rgba(8,17,31,0.2)] md:rounded-[3.5rem]"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-16 px-6 pb-24 md:mt-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-none lg:w-[calc(100%-320px)]"
          >
            <div
              className="prose prose-xl prose-slate max-w-none 
                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-950
                prose-p:text-[1.125rem] prose-p:leading-[1.8] prose-p:text-slate-600
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:rounded-r-xl
                prose-img:rounded-[2rem] prose-img:shadow-xl
                prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Author Footer Card */}
            <div className="mt-20 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-[#f8fafc] p-8 md:p-12">
              <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md">
                  {blog.author.image ? (
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100">
                      <UserIcon className="size-12 text-slate-400" />
                    </div>
                  )}
                </div>
                <div className="grow">
                  <div className="text-sm font-bold uppercase tracking-widest text-primary">About the author</div>
                  <h3 className="mt-1 text-2xl font-bold text-slate-950">{blog.author.name}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
                    Dedicated to advancing renewable energy adoption across India. Specialized in commercial solar procurement and enterprise-grade energy strategy.
                  </p>
                  <div className="mt-6 flex justify-center gap-3 md:justify-start">
                    <Button variant="outline" size="icon" className="rounded-full shadow-sm">
                      {/* <Linkedin className="size-4" /> */}
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full shadow-sm">
                      {/* <Twitter className="size-4" /> */}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Global CTA */}
            <div className="mt-8 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl">Ready to switch to solar?</h2>
                  <p className="mt-2 text-slate-400">Get a custom commercial solar analysis for your facility.</p>
                </div>
                <div className="flex shrink-0 gap-4">
                  <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14">
                    <Link href="/get-quote">Get Enterprise Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-32 space-y-10">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <TableOfContents />
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  <Share2 className="h-4 w-4" />
                  Share article
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" size="icon" className="group rounded-full bg-slate-50 hover:bg-primary/10 hover:text-primary transition-all">
                    L{/* <Linkedin className="size-4" /> */}
                  </Button>
                  <Button variant="secondary" size="icon" className="group rounded-full bg-slate-50 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] transition-all">
                    T{/* <Twitter className="size-4" /> */}
                  </Button>
                  <Button variant="secondary" size="icon" className="group rounded-full bg-slate-50 hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-all">
                    F{/* <Facebook className="size-4" /> */}
                  </Button>
                </div>
              </div>

              <Link
                href="/blog"
                className="flex items-center justify-between rounded-3xl bg-primary/5 p-6 transition-colors hover:bg-primary/10 group"
              >
                <div>
                  <div className="text-sm font-semibold text-primary">Explore More</div>
                  <div className="text-slate-900 font-bold">Latest Insights</div>
                </div>
                <ArrowLeft className="size-5 rotate-180 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
