import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { PublicQuotationRequestSchema } from "@/lib/schemas";
import { QuotationStatus } from "@prisma/client";
import { normalizeOptionalString } from "@/lib/quotation";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = PublicQuotationRequestSchema.parse(body);

    const quotation = await db.quotation.create({
      data: {
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: normalizeOptionalString(data.email),
        location: data.location.trim(),
        billAmount: data.billAmount,
        requirement: data.requirement.trim(),
        status: QuotationStatus.inquiry,
        subtotalAmount: 0,
        discountAmount: 0,
        totalAmount: 0,
      },
    });

    return NextResponse.json(quotation);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.flatten(),
        },
        { status: 400 }
      );
    }

    console.error("[QUOTATION_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
