"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createBlog(data: {
  title: string;
  content: string;
  image: string;
  tags: string[];
  authorId: string;
  slug?: string;
  metadata?: string;
  isPublished?: boolean;
}) {
  try {
    const baseSlug =
      data.slug && data.slug.trim() !== ""
        ? slugify(data.slug)
        : slugify(data.title);

    // Check for slug collision
    let uniqueSlug = baseSlug;
    let counter = 1;
    while (await db.blog.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    const blog = await db.blog.create({
      data: {
        ...data,
        isPublished: data.isPublished ?? false,
        slug: uniqueSlug,
      },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");
    revalidatePath("/");
    return { success: true, blog };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: "Failed to create blog" };
  }
}

export async function updateBlog(
  id: string,
  data: Partial<{
    title: string;
    content: string;
    image: string;
    tags: string[];
    slug: string;
    isPublished: boolean;
    metadata: string;
  }>,
) {
  try {
    const updateData: Partial<{
      title: string;
      content: string;
      image: string;
      tags: string[];
      isPublished: boolean;
      metadata: string;
      slug: string;
    }> = { ...data };

    if (data.slug) {
      const baseSlug = slugify(data.slug);
      let uniqueSlug = baseSlug;
      let counter = 1;

      // Check if the slug is actually different from the current one
      const currentBlog = await db.blog.findUnique({ where: { id } });

      if (currentBlog && currentBlog.slug !== baseSlug) {
        while (await db.blog.findUnique({ where: { slug: uniqueSlug } })) {
          uniqueSlug = `${baseSlug}-${counter}`;
          counter++;
        }
        updateData.slug = uniqueSlug;
      }
    }

    const blog = await db.blog.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/blogs");
    revalidatePath(`/blog/${blog.slug}`);
    revalidatePath("/blog");
    revalidatePath("/");
    return { success: true, blog };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, error: "Failed to update blog" };
  }
}

export async function deleteBlog(id: string) {
  try {
    await db.blog.delete({
      where: { id },
    });

    revalidatePath("/admin/blogs");
    revalidatePath("/blog");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: "Failed to delete blog" };
  }
}

export async function togglePublish(id: string, isPublished: boolean) {
  try {
    const blog = await db.blog.update({
      where: { id },
      data: { isPublished },
    });

    revalidatePath("/admin/blogs");
    revalidatePath(`/blog/${blog.slug}`);
    revalidatePath("/blog");
    revalidatePath("/");
    return { success: true, blog };
  } catch (error) {
    console.error("Error toggling publish status:", error);
    return { success: false, error: "Failed to update status" };
  }
}
