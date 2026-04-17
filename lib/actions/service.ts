"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getServices() {
  try {
    const services = await db.Service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data: services };
  } catch (error) {
    console.error("[GET_SERVICES]", error);
    return { success: false, error: "Failed to fetch services" };
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const service = await db.Service.findUnique({
      where: { slug },
      include: {
        faqs: {
          where: { isPublished: true },
          orderBy: { order: "asc" },
        },
      },
    });
    return { success: true, data: service };
  } catch (error) {
    console.error("[GET_SERVICE_BY_SLUG]", error);
    return { success: false, error: "Failed to fetch service" };
  }
}

export async function createService(data: {
  title: string;
  slug: string;
  description: string;
  content?: string;
  image?: string;
  icon?: string;
  features: string[];
}) {
  try {
    const service = await db.Service.create({
      data,
    });
    revalidatePath("/services");
    revalidatePath("/admin/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("[CREATE_SERVICE]", error);
    return { success: false, error: "Failed to create service" };
  }
}

export async function updateService(
  id: string,
  data: {
    title?: string;
    slug?: string;
    description?: string;
    content?: string;
    image?: string;
    icon?: string;
    features?: string[];
  },
) {
  try {
    const service = await db.Service.update({
      where: { id },
      data,
    });
    revalidatePath("/services");
    revalidatePath(`/services/${service.slug}`);
    revalidatePath("/admin/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("[UPDATE_SERVICE]", error);
    return { success: false, error: "Failed to update service" };
  }
}

export async function deleteService(id: string) {
  try {
    const service = await db.Service.delete({
      where: { id },
    });
    revalidatePath("/services");
    revalidatePath("/admin/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("[DELETE_SERVICE]", error);
    return { success: false, error: "Failed to delete service" };
  }
}
