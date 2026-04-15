import Link from "next/link";
import { format } from "date-fns";
import {
  Calendar,
  FileDown,
  MapPin,
  Phone,
  Plus,
  ReceiptText,
} from "lucide-react";
import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/quotation";
import { DeleteQuotationButton } from "@/components/quotation/DeleteQuotationButton";

function getStatusLabel(
  status: "inquiry" | "draft" | "finalized" | null,
  itemCount: number
) {
  if (status) {
    return status;
  }

  return itemCount > 0 ? "draft" : "inquiry";
}

export default async function AdminQuotationsPage() {
  const quotations = await db.quotation.findMany({
    include: {
      items: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Quotations
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Convert lead requests into formal quotations with products,
            discounts, totals, and PDF downloads.
          </p>
        </div>

        <Button asChild className="rounded-full px-8">
          <Link href="/admin/quotations/new">
            <Plus className="mr-2 h-5 w-5" />
            Create Quotation
          </Link>
        </Button>
      </div>

      <Separator className="mb-12 opacity-50" />

      {quotations.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed bg-muted/20 py-24 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <ReceiptText className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold">No quotations yet</h3>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Public quote requests and admin-created quotations will appear here.
          </p>
          <Button asChild variant="outline" className="mt-8 rounded-full px-8">
            <Link href="/admin/quotations/new">Create the first quotation</Link>
          </Button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-xl shadow-primary/5">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="min-w-[170px]">Quote</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotations.map((quote) => {
                const derivedStatus = getStatusLabel(
                  quote.status as "inquiry" | "draft" | "finalized" | null,
                  quote.items.length
                );
                const canDownload = quote.items.length > 0;

                return (
                  <TableRow
                    key={quote.id}
                    className="transition-colors hover:bg-primary/5"
                  >
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-semibold">
                          {quote.quoteNumber || `Draft-${quote.id.slice(-6).toUpperCase()}`}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {quote.email || "No email provided"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-semibold">{quote.name}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-3 w-3 text-primary" />
                          {quote.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3 text-primary" />
                          {quote.location}
                        </div>
                        <div className="line-clamp-1 text-xs text-muted-foreground">
                          {quote.requirement}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          derivedStatus === "finalized"
                            ? "border-green-500/30 bg-green-500/10 text-green-600"
                            : derivedStatus === "draft"
                              ? "border-amber-500/30 bg-amber-500/10 text-amber-600"
                              : "border-sky-500/30 bg-sky-500/10 text-sky-600"
                        }
                      >
                        {derivedStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>{quote.items.length}</TableCell>
                    <TableCell className="font-semibold">
                      {formatCurrency(quote.totalAmount ?? 0)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(quote.createdAt), "MMM d, yyyy")}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        {canDownload ? (
                          <Button variant="outline" size="icon" asChild>
                            <a href={`/api/quotation/${quote.id}/pdf`}>
                              <FileDown className="h-4 w-4" />
                            </a>
                          </Button>
                        ) : null}
                        <Button variant="outline" asChild>
                          <Link href={`/admin/quotations/${quote.id}`}>
                            {quote.items.length > 0 ? "Edit" : "Prepare Quote"}
                          </Link>
                        </Button>
                        <DeleteQuotationButton id={quote.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

