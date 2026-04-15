import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { buildQuotationPdfBuffer } from "@/lib/pdf/quotation-pdf";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    const userRole = (session?.user as { role?: string } | undefined)?.role;

    if (!session || userRole !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { id } = await params;
    const quotation = await db.quotation.findUnique({
      where: { id },
      include: {
        items: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!quotation) {
      return new NextResponse("Quotation not found", { status: 404 });
    }

    const pdfBuffer = buildQuotationPdfBuffer({
      ...quotation,
      items: quotation.items.map((item) => ({
        productName: item.productName,
        description: item.description ?? undefined,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        discountPercent: item.discountPercent,
        lineTotal: item.lineTotal,
      })),
      subtotalAmount: quotation.subtotalAmount ?? 0,
      discountAmount: quotation.discountAmount ?? 0,
      totalAmount: quotation.totalAmount ?? 0,
    });

    const fileName =
      quotation.quoteNumber?.replace(/\s+/g, "-") ||
      `quotation-${quotation.id.slice(-6)}`;

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}.pdf"`,
      },
    });
  } catch (error) {
    console.error("[QUOTATION_PDF_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

