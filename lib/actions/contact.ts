"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteContactMessage(id: string) {
  try {
    await db.contactMessage.delete({
      where: { id },
    });

    revalidatePath("/admin/contacts");
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact message:", error);
    return { success: false, error: "Failed to delete message" };
  }
}
