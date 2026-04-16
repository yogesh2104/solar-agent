import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Tag, ArrowLeft, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await db.blog.findUnique({
    where: { slug, isPublished: true },
  });

  if (!blog) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${blog.title} | Solar Company`,
    description: blog.metadata || "Read more about solar energy.",
    openGraph: {
        title: blog.title,
        description: blog.metadata || "",
        images: [blog.image],
    }
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await db.blog.findUnique({
    where: { slug, isPublished: true },
    include: {
      author: true,
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <Link href="/blogs">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Button>
        </Link>

        <div className="space-y-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             {blog.tags.map(tag => (
                 <Badge key={tag} variant="secondary" className="px-3 py-1 uppercase tracking-wider text-[10px] font-bold">
                     {tag}
                 </Badge>
             ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                {blog.author.image ? (
                   <Image src={blog.author.image} alt={blog.author.name} width={40} height={40} className="object-cover" />
                ) : (
                    <UserIcon className="h-5 w-5 text-primary" />
                )}
              </div>
              <span className="font-medium text-foreground">{blog.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(blog.createdAt), "MMMM d, yyyy")}</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="mt-20 pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
                 <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    {blog.author.image ? (
                        <Image src={blog.author.image} alt={blog.author.name} width={64} height={64} className="object-cover" />
                    ) : (
                        <UserIcon className="h-8 w-8 text-primary" />
                    )}
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">Written by</p>
                    <p className="text-xl font-bold">{blog.author.name}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full">Share Article</Button>
                <Link href="/contact">
                   <Button size="lg" className="rounded-full px-8">Contact Us</Button>
                </Link>
            </div>
        </div>
      </div>
    </article>
  );
}
