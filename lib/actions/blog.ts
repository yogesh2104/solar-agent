"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

export async function createBlog(data: {
  title: string;
  content: string;
  image: string;
  tags: string[];
  authorId: string;
  metadata?: string;
  isPublished?: boolean;
}) {
  try {
    const slug = slugify(data.title);
    
    // Check for slug collision
    let uniqueSlug = slug;
    let counter = 1;
    while (await db.blog.findUnique({ where: { slug: uniqueSlug } })) {
      uniqueSlug = `${slug}-${counter}`;
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
    revalidatePath("/blogs");
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
    isPublished: boolean;
    metadata: string;
  }>
) {
  try {
    const updateData: Partial<{
      title: string;
      content: string;
      image: string;
      tags: string[];
      isPublished: boolean;
      metadata: string;
    }> = { ...data };
    
    if (data.title) {
        // We might not want to change the slug after creation, 
        // but if we do, we should handle collisions.
        // For now, let's keep the slug stable or only change if explicitly needed.
    }

    const blog = await db.blog.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/blogs");
    revalidatePath(`/blogs/${blog.slug}`);
    revalidatePath("/blogs");
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
    revalidatePath("/blogs");
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
    revalidatePath(`/blogs/${blog.slug}`);
    revalidatePath("/blogs");
    revalidatePath("/");
    return { success: true, blog };
  } catch (error) {
    console.error("Error toggling publish status:", error);
    return { success: false, error: "Failed to update status" };
  }
}
