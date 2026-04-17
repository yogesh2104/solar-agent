"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getFaqs() {
  try {
    const faqs = await db.fAQ.findMany({
      include: {
        service: true,
      },
      orderBy: [{ category: "asc" }, { order: "asc" }],
    });
    return { success: true, data: faqs };
  } catch (error) {
    console.error("[GET_FAQS]", error);
    return { success: false, error: "Failed to fetch FAQs" };
  }
}

export async function createFaq(data: {
  question: string;
  answer: string;
  category?: string;
  order?: number;
  serviceId?: string;
  isPublished?: boolean;
}) {
  try {
    const faq = await db.fAQ.create({
      data,
    });
    revalidatePath("/faq");
    revalidatePath("/admin/faqs");
    if (data.serviceId) {
      const service = await db.service.findUnique({
        where: { id: data.serviceId },
      });
      if (service) revalidatePath(`/services/${service.slug}`);
    }
    return { success: true, data: faq };
  } catch (error) {
    console.error("[CREATE_FAQ]", error);
    return { success: false, error: "Failed to create FAQ" };
  }
}

export async function updateFaq(
  id: string,
  data: {
    question?: string;
    answer?: string;
    category?: string;
    order?: number;
    serviceId?: string;
    isPublished?: boolean;
  },
) {
  try {
    const faq = await db.fAQ.update({
      where: { id },
      data,
    });
    revalidatePath("/faq");
    revalidatePath("/admin/faqs");
    if (faq.serviceId) {
      const service = await db.service.findUnique({
        where: { id: faq.serviceId },
      });
      if (service) revalidatePath(`/services/${service.slug}`);
    }
    return { success: true, data: faq };
  } catch (error) {
    console.error("[UPDATE_FAQ]", error);
    return { success: false, error: "Failed to update FAQ" };
  }
}

export async function deleteFaq(id: string) {
  try {
    const faq = await db.fAQ.delete({
      where: { id },
    });
    revalidatePath("/faq");
    revalidatePath("/admin/faqs");
    return { success: true, data: faq };
  } catch (error) {
    console.error("[DELETE_FAQ]", error);
    return { success: false, error: "Failed to delete FAQ" };
  }
}
