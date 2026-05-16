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
    <article className="relative min-h-screen bg-[#f7faf9]">
      <FAQSchema faqs={faqs} />
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <header className="relative overflow-hidden bg-gradient-to-b from-[#f7faf9] via-white to-white pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(8,17,31,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(8,17,31,0.5)_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to Insights
            </Link>
          </motion.div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-wrap justify-center gap-3"
            >
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/10 bg-primary/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-primary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.1]"
            >
              {blog.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-slate-200 pt-8 text-sm text-slate-600"
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
      <section className="container mx-auto -mt-8 px-6 md:-mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/10] overflow-hidden rounded-[2rem] border-8 border-white bg-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.10)] ring-1 ring-slate-200 md:rounded-[2.5rem]"
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
      <div className="container mx-auto mt-12 px-6 pb-10 md:mt-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:gap-10">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mb-4 mt-8 flex items-center gap-4 text-2xl font-semibold tracking-tight text-slate-950 first:mt-0">
                    <span className="h-10 w-1.5 rounded-full bg-primary" />
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-3 mt-6 text-lg font-semibold text-slate-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-base leading-8 text-slate-600 last:mb-0">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 grid grid-cols-1 gap-x-8 gap-y-4 p-0 md:grid-cols-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-6 list-inside list-decimal space-y-2 text-base text-slate-600">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="group flex items-start gap-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary ring-4 ring-primary/10" />
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                hr: () => <hr className="my-10 h-px border-0" />,
                blockquote: ({ children }) => (
                  <blockquote className="my-10 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-[#f7faf9] p-6 text-base font-medium italic leading-8 text-slate-900 md:p-8">
                    <div className="flex gap-6">
                      <Quote className="size-10 shrink-0 text-primary opacity-20" />
                      <div>{children}</div>
                    </div>
                  </blockquote>
                ),
                table: ({ children }) => (
                  <div className="my-10 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm">
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
                  <td className="border-b border-slate-50 px-8 py-6 text-base font-medium text-slate-600">
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
            <div className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7faf9] p-8 md:p-10">
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
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div>
                  <h2 className="mt-0 border-0 text-3xl font-semibold text-slate-950 md:text-4xl">
                    Ready to switch to solar?
                  </h2>
                  <p className="mt-2 text-slate-600">
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
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-32 space-y-10">
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <TableOfContents />
              </div>

              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  <Share2 className="h-4 w-4" />
                  Share article
                </div>
                <ShareButtons title={blog.title} slug={blog.slug} />
              </div>

              <Link
                href="/blog"
                className="group flex items-center justify-between rounded-[1.6rem] border border-primary/10 bg-white p-6 transition-colors hover:bg-primary/5"
              >
                <div>
                  <div className="text-sm font-semibold text-primary">
                    Explore More
                  </div>
                  <div className="text-slate-900 font-bold">
                    Latest Insights
                  </div>
                </div>
                <ArrowLeft className="size-5 rotate-180 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="container mx-auto border-t border-slate-200 px-6 py-16 md:py-24">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Continue Reading
            </div>
            <h2 className="border-0 text-4xl font-semibold text-slate-950 md:text-5xl">
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
