import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  User as UserIcon,
  Clock,
  Share2,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { ShareButtons } from "@/components/blog/share-buttons";
import TableOfContents from "@/components/landing/TableOfContents";
import * as motion from "framer-motion/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogBySlug, getUnifiedBlogs } from "@/lib/blog-service";
import { BlogCard } from "@/components/blog/blog-card";
import HomeFAQ from "@/components/landing/HomeFAQ";
import siteConfig from "@/lib/siteConfig";
import FAQSchema from "@/components/FAQSchema";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || (!blog.isPublished && !blog.isStatic)) {
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
  const blog = await getBlogBySlug(slug);

  if (!blog || (!blog.isPublished && !blog.isStatic)) {
    notFound();
  }

  const blogs = await getUnifiedBlogs();
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const readingTime = Math.ceil(blog.content.split(/\s+/).length / 200);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metadata || blog.title,
    author: {
      "@type": "Organization",
      name: "ELIZ ENERGY",
    },
    publisher: {
      "@type": "Organization",
      name: "ELIZ ENERGY",
    },
    image: blog.image,
    datePublished: blog.createdAt.toISOString().split("T")[0],
    areaServed: "India",
  };

  const faqs = siteConfig.faqs;

  return (
    <article className="relative min-h-screen">
      <FAQSchema faqs={faqs} />
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Hero Section - Header */}
      <header className="relative bg-white pt-28 pb-12 md:pt-36 md:pb-14 border-b border-[rgba(15,23,42,0.07)]">

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748b] hover:text-[#22c55e] transition-colors mb-8"
            >
              <ArrowLeft className="size-3.5" />
              Back to Blog
            </Link>
          </motion.div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(34,197,94,0.15)] bg-[rgba(34,197,94,0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#22c55e]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight text-[#0f172a] md:text-5xl md:leading-[1.08] mb-10 max-w-3xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {blog.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-600 border-t border-slate-200 pt-8"
            >
              <div className="flex items-center gap-4">
                <div className="relative size-12 overflow-hidden rounded-full border-2 border-white shadow-sm ring-4 ring-slate-50">
                  {blog.author.image ? (
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 uppercase font-bold text-slate-400">
                      {blog.author.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-950">
                    {blog.author.name}
                  </div>
                  <div className="text-xs font-medium text-slate-400">
                    {blog.isStatic
                      ? "ELIZ ENERGY Editorial"
                      : "Renewable Energy Strategist"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="size-4 text-primary" />
                <span className="font-medium tracking-tight">
                  {format(new Date(blog.createdAt), "MMMM d, yyyy")}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="size-4 text-primary" />
                <span className="font-medium tracking-tight">
                  {readingTime} min read
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Featured Large Image Section */}
      <section className="container mx-auto px-6 -mt-8 md:-mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-21/10 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-slate-100 border-8 border-white ring-1 ring-slate-200"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto mt-16 px-6 pb-10 md:mt-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:gap-10">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl border border-[rgba(15,23,42,0.07)] rounded-[1.75rem] p-6 md:p-10"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl font-bold tracking-tight text-slate-950 mt-2 mb-2 first:mt-0 flex items-center gap-4">
                    <span className="h-10 w-1.5 rounded-full bg-primary" />
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-md font-bold text-slate-900 mt-2 mb-2 text-center lg:text-left">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-sm leading-[1.8] text-slate-600 mb-3 font-medium last:mb-0">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-4 p-0">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-2 mb-4 list-decimal list-inside text-xl font-medium text-slate-600">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-4 text-md font-medium text-slate-600 group transition-colors hover:text-slate-950">
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary ring-4 ring-primary/10" />
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                hr: () => <hr className="my-10 h-px border-0" />,
                blockquote: ({ children }) => (
                  <blockquote className="my-10 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-[#f8fafc] p-8 md:p-10 text-md font-semibold italic leading-relaxed text-slate-900">
                    <div className="flex gap-6">
                      <Quote className="size-10 shrink-0 text-primary opacity-20" />
                      <div>{children}</div>
                    </div>
                  </blockquote>
                ),
                table: ({ children }) => (
                  <div className="my-10 overflow-hidden rounded-[2.5rem] border border-border bg-white shadow-2xl shadow-slate-200/50">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left">
                        {children}
                      </table>
                    </div>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-slate-950 text-white">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em]">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-8 py-6 text-lg font-medium text-slate-600 border-b border-slate-50">
                    {children}
                  </td>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="font-bold text-primary underline decoration-primary/20 transition-all hover:decoration-primary underline-offset-4"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>

            {/* Author Footer Card */}
            <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] p-8">
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
                  <div className="text-sm font-bold uppercase tracking-widest text-primary">
                    About the author
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-slate-950">
                    {blog.author.name}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
                    Dedicated to advancing renewable energy adoption across
                    India. Specialized in commercial solar procurement and
                    enterprise-grade energy strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Global CTA */}
            <div className="mt-8 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl text-white mt-0 border-0">
                    Ready to switch to solar?
                  </h2>
                  <p className="mt-2 text-slate-400">
                    Get a custom commercial solar analysis for your facility.
                  </p>
                </div>
                <div className="flex shrink-0 gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-14"
                  >
                    <Link href="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-[1.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] p-5">
                <TableOfContents />
              </div>

              <div className="rounded-[1.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] p-5">
                <div className="flex items-center gap-2 mb-4 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
                  <Share2 className="h-4 w-4" />
                  Share article
                </div>
                <ShareButtons title={blog.title} slug={blog.slug} />
              </div>

              <Link
                href="/blog"
                className="flex items-center justify-between rounded-[1.5rem] border border-[rgba(15,23,42,0.07)] bg-[#f8faf9] p-5 transition-colors hover:bg-[rgba(34,197,94,0.04)] group"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
                    Explore More
                  </div>
                  <div className="text-[#0f172a] font-bold text-sm mt-1">
                    Latest Insights
                  </div>
                </div>
                <ArrowLeft className="size-4 rotate-180 text-[#22c55e] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="container mx-auto px-6 py-20 border-t border-slate-100">
          <div className="flex flex-col items-center text-center mb-16 underline decoration-primary underline-offset-[16px] decoration-4">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-4">
              Continue Reading
            </div>
            <h2 className="text-4xl font-bold text-slate-950 md:text-5xl border-0">
              Related Insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard key={relatedBlog.id} blog={relatedBlog} />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold"
            >
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <div className="border-t border-slate-100">
        <HomeFAQ faqs={faqs.slice(0, 5)} />
      </div>
    </article>
  );
}
