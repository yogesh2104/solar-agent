import { db } from "./db";
import { STATIC_BLOGS } from "./static-blogs-data";

export interface UnifiedBlog {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  metadata: string | null;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  isPublished: boolean;
  isStatic: boolean;
  author: {
    id: string;
    name: string;
    image: string | null;
  };
}

export async function getUnifiedBlogs(
  includeUnpublished = false,
): Promise<UnifiedBlog[]> {
  // 1. Fetch DB blogs
  const dbBlogs = await db.blog.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // 2. Map DB blogs to Unified format
  const mappedDbBlogs: UnifiedBlog[] = dbBlogs.map((blog) => ({
    ...blog,
    isStatic: false,
    author: {
      id: blog.author.id,
      name: blog.author.name,
      image: blog.author.image,
    },
  }));

  // 3. Map Static Blogs (Always Published)
  const mappedStaticBlogs: UnifiedBlog[] = STATIC_BLOGS.map((blog) => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    image: blog.image,
    metadata: blog.metadata,
    tags: blog.tags,
    createdAt: new Date(blog.createdAt),
    updatedAt: new Date(blog.createdAt),
    isPublished: true,
    isStatic: true,
    authorId: "system",
    author: {
      id: "system",
      name: "ELIZ ENERGY Editorial",
      image: "/Logo1.png",
    },
  }));

  let allBlogs = [...mappedDbBlogs, ...mappedStaticBlogs];

  if (!includeUnpublished) {
    allBlogs = allBlogs.filter((b) => b.isPublished);
  }

  // Sort by date desc
  return allBlogs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getBlogBySlug(slug: string): Promise<UnifiedBlog | null> {
  // 1. Check Static List First (Priority for curated content)
  const staticBlog = STATIC_BLOGS.find((b) => b.slug === slug);
  if (staticBlog) {
    return {
      id: staticBlog.id,
      title: staticBlog.title,
      slug: staticBlog.slug,
      content: staticBlog.content,
      image: staticBlog.image,
      metadata: staticBlog.metadata,
      tags: staticBlog.tags,
      authorId: "system",
      createdAt: new Date(staticBlog.createdAt),
      updatedAt: new Date(staticBlog.createdAt),
      isPublished: true,
      isStatic: true,
      author: {
        id: "system",
        name: "ELIZ ENERGY Editorial",
        image: "/Logo1.png",
      },
    };
  }

  // 2. Fallback to DB Blog
  const dbBlog = await db.blog.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  if (dbBlog) {
    return {
      ...dbBlog,
      isStatic: false,
      author: {
        id: dbBlog.author.id,
        name: dbBlog.author.name,
        image: dbBlog.author.image,
      },
    };
  }

  return null;
}
