"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { AdminQuotationSchema } from "@/lib/schemas";
import {
  calculateLineTotal,
  calculateQuotationTotals,
  generateQuotationNumber,
  normalizeOptionalString,
} from "@/lib/quotation";
import { QuotationStatus } from "@prisma/client";

interface QuotationItemInput {
  productName: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  discountPercent: number;
}

interface QuotationPayload {
  name: string;
  phone: string;
  email?: string;
  customerCompany?: string;
  address?: string;
  location: string;
  billAmount: number;
  requirement: string;
  quoteNumber?: string;
  status: "inquiry" | "draft" | "finalized";
  notes?: string;
  validUntil?: string;
  items: QuotationItemInput[];
}

function buildQuotationData(payload: QuotationPayload, fallbackQuoteNumber?: string) {
  const parsed = AdminQuotationSchema.parse(payload);
  const items = parsed.items.map((item) => ({
    productName: item.productName.trim(),
    description: normalizeOptionalString(item.description),
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    discountPercent: item.discountPercent,
    lineTotal: calculateLineTotal(item),
  }));
  const totals = calculateQuotationTotals(parsed.items);

  return {
    name: parsed.name.trim(),
    phone: parsed.phone.trim(),
    email: normalizeOptionalString(parsed.email),
    customerCompany: normalizeOptionalString(parsed.customerCompany),
    address: normalizeOptionalString(parsed.address),
    location: parsed.location.trim(),
    billAmount: parsed.billAmount,
    requirement: parsed.requirement.trim(),
    quoteNumber:
      normalizeOptionalString(parsed.quoteNumber) ??
      fallbackQuoteNumber ??
      generateQuotationNumber(),
    status: parsed.status as QuotationStatus,
    notes: normalizeOptionalString(parsed.notes),
    validUntil: parsed.validUntil ? new Date(parsed.validUntil) : null,
    subtotalAmount: totals.subtotalAmount,
    discountAmount: totals.discountAmount,
    totalAmount: totals.totalAmount,
    items,
  };
}

export async function createQuotation(payload: QuotationPayload) {
  try {
    const data = buildQuotationData(payload);

    const quotation = await db.quotation.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        customerCompany: data.customerCompany,
        address: data.address,
        location: data.location,
        billAmount: data.billAmount,
        requirement: data.requirement,
        quoteNumber: data.quoteNumber,
        status: data.status,
        notes: data.notes,
        validUntil: data.validUntil,
        subtotalAmount: data.subtotalAmount,
        discountAmount: data.discountAmount,
        totalAmount: data.totalAmount,
        items: data.items.length > 0 ? { create: data.items } : undefined,
      },
    });

    revalidatePath("/admin/quotations");
    revalidatePath(`/admin/quotations/${quotation.id}`);
    return { success: true, quotation };
  } catch (error) {
    console.error("Error creating quotation:", error);
    return { success: false, error: "Failed to create quotation" };
  }
}

export async function updateQuotation(id: string, payload: QuotationPayload) {
  try {
    const existing = await db.quotation.findUnique({
      where: { id },
      select: { id: true, quoteNumber: true },
    });

    if (!existing) {
      return { success: false, error: "Quotation not found" };
    }

    const data = buildQuotationData(payload, existing.quoteNumber ?? undefined);

    const quotation = await db.quotation.update({
      where: { id },
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        customerCompany: data.customerCompany,
        address: data.address,
        location: data.location,
        billAmount: data.billAmount,
        requirement: data.requirement,
        quoteNumber: data.quoteNumber,
        status: data.status,
        notes: data.notes,
        validUntil: data.validUntil,
        subtotalAmount: data.subtotalAmount,
        discountAmount: data.discountAmount,
        totalAmount: data.totalAmount,
        items: {
          deleteMany: {},
          ...(data.items.length > 0 ? { create: data.items } : {}),
        },
      },
    });

    revalidatePath("/admin/quotations");
    revalidatePath(`/admin/quotations/${quotation.id}`);
    return { success: true, quotation };
  } catch (error) {
    console.error("Error updating quotation:", error);
    return { success: false, error: "Failed to update quotation" };
  }
}

export async function deleteQuotation(id: string) {
  try {
    await db.quotationItem.deleteMany({
      where: { quotationId: id },
    });

    await db.quotation.delete({
      where: { id },
    });

    revalidatePath("/admin/quotations");
    return { success: true };
  } catch (error) {
    console.error("Error deleting quotation:", error);
    return { success: false, error: "Failed to delete quotation" };
  }
}
