import Image from "next/image";
import Link from "next/link";
import { Blog } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { format } from "date-fns";

interface BlogCardProps {
  blog: Blog;
  isAdmin?: boolean;
}

export const BlogCard = ({ blog, isAdmin }: BlogCardProps) => {
  const href = isAdmin ? `/admin/blogs/${blog.id}` : `/blogs/${blog.slug}`;

  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 border-none bg-muted/30">
      <Link href={href} className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          {blog.isPublished ? (
            <Badge className="bg-green-500/90 text-white backdrop-blur-sm border-none">Published</Badge>
          ) : (
            <Badge variant="secondary" className="bg-yellow-500/90 text-white backdrop-blur-sm border-none">Draft</Badge>
          )}
        </div>
      </Link>
      <CardHeader className="space-y-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground border-muted-foreground/30">
               {tag}
            </Badge>
          ))}
        </div>
        <Link href={href}>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {blog.metadata || "Read more about this article..."}
        </p>
      </CardContent>
      <CardFooter className="pt-0 mt-auto flex items-center justify-between border-t border-border/50 py-4 px-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{format(new Date(blog.createdAt), "MMM d, yyyy")}</span>
          </div>
        </div>
        {!isAdmin && (
           <Link href={href} className="text-primary font-semibold text-sm flex items-center gap-1 group/btn">
             Details
             <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
           </Link>
        )}
      </CardFooter>
    </Card>
  );
};
