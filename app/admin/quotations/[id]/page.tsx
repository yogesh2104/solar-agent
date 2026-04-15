import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { QuotationForm } from "@/components/quotation/quotation-form";

interface EditQuotationPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditQuotationPage({
  params,
}: EditQuotationPageProps) {
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
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <QuotationForm
        initialData={{
          id: quotation.id,
          name: quotation.name,
          phone: quotation.phone,
          email: quotation.email,
          customerCompany: quotation.customerCompany,
          address: quotation.address,
          location: quotation.location,
          billAmount: quotation.billAmount,
          requirement: quotation.requirement,
          quoteNumber: quotation.quoteNumber,
          status:
            (quotation.status as "inquiry" | "draft" | "finalized" | null) ||
            "inquiry",
          notes: quotation.notes,
          validUntil: quotation.validUntil,
          items: quotation.items.map((item) => ({
            productName: item.productName,
            description: item.description,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            discountPercent: item.discountPercent,
          })),
        }}
      />
    </div>
  );
}

