"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/utils";

export async function createProject(data: {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  savings?: string;
  outcome?: string;
  location: string;
  capacity: number;
  category: string;
  images: string[];
}) {
  try {
    const slug = slugify(data.title);
    
    const project = await db.project.create({
      data: {
        ...data,
        slug,
      },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    return { success: true, project };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, error: "Failed to create project" };
  }
}

export async function updateProject(
  id: string,
  data: Partial<{
    title: string;
    description: string;
    problem: string;
    solution: string;
    savings: string;
    outcome: string;
    location: string;
    capacity: number;
    category: string;
    images: string[];
  }>
) {
  try {
    const updateData: any = { ...data };
    if (data.title) {
      updateData.slug = slugify(data.title);
    }

    const project = await db.project.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/projects");
    revalidatePath(`/projects/${project.slug}`);
    revalidatePath("/projects");
    return { success: true, project };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteProject(id: string) {
  try {
    await db.project.delete({
      where: { id },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}
