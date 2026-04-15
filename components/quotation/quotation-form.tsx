"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar as CalendarIcon, Loader2, Plus, ReceiptText, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  calculateLineTotal,
  calculateQuotationTotals,
  EditableQuotationItem,
  formatCurrency,
  generateQuotationNumber,
} from "@/lib/quotation";
import {
  createQuotation,
  updateQuotation,
} from "@/lib/actions/quotation";

interface QuotationFormProps {
  initialData?: {
    id: string;
    name: string;
    phone: string;
    email?: string | null;
    customerCompany?: string | null;
    address?: string | null;
    location: string;
    billAmount: number;
    requirement: string;
    quoteNumber?: string | null;
    status?: "inquiry" | "draft" | "finalized" | null;
    notes?: string | null;
    validUntil?: Date | null;
    items?: Array<{
      productName: string;
      description?: string | null;
      quantity: number;
      unitPrice: number;
      discountPercent: number;
    }>;
  };
}

interface LocalQuotationItem extends EditableQuotationItem {
  id: string;
}

function createEmptyItem(): LocalQuotationItem {
  return {
    id: crypto.randomUUID(),
    productName: "",
    description: "",
    quantity: 1,
    unitPrice: 0,
    discountPercent: 0,
  };
}

export function QuotationForm({ initialData }: QuotationFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(initialData?.name || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [customerCompany, setCustomerCompany] = useState(
    initialData?.customerCompany || ""
  );
  const [address, setAddress] = useState(initialData?.address || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [billAmount, setBillAmount] = useState(
    initialData?.billAmount?.toString() || "0"
  );
  const [requirement, setRequirement] = useState(
    initialData?.requirement || ""
  );
  const [quoteNumber, setQuoteNumber] = useState(
    initialData?.quoteNumber || generateQuotationNumber()
  );
  const [status, setStatus] = useState<"inquiry" | "draft" | "finalized">(
    initialData?.status || "draft"
  );
  const [notes, setNotes] = useState(initialData?.notes || "");
  const [validUntil, setValidUntil] = useState<Date | undefined>(
    initialData?.validUntil ? new Date(initialData.validUntil) : undefined
  );
  const [items, setItems] = useState<LocalQuotationItem[]>(
    initialData?.items && initialData.items.length > 0
      ? initialData.items.map((item) => ({
          ...item,
          id: crypto.randomUUID(),
          description: item.description || "",
        }))
      : [createEmptyItem()]
  );

  const totals = useMemo(() => calculateQuotationTotals(items), [items]);

  const updateItem = <K extends keyof EditableQuotationItem>(
    index: number,
    field: K,
    value: EditableQuotationItem[K]
  ) => {
    setItems((currentItems) =>
      currentItems.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () => {
    setItems((currentItems) => [...currentItems, createEmptyItem()]);
  };

  const removeItem = (index: number) => {
    setItems((currentItems) =>
      currentItems.length === 1
        ? [createEmptyItem()]
        : currentItems.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const payload = {
        name,
        phone,
        email,
        customerCompany,
        address,
        location,
        billAmount: Number(billAmount) || 0,
        requirement,
        quoteNumber,
        status,
        notes,
        validUntil: validUntil?.toISOString(),
        items: items
          .filter(
            (item) =>
              item.productName.trim() ||
              item.description?.trim() ||
              item.quantity > 0 ||
              item.unitPrice > 0
          )
          .map(({ id: _id, ...item }) => item),
      };

      const result = initialData?.id
        ? await updateQuotation(initialData.id, payload)
        : await createQuotation(payload);

      if (!result.success || !result.quotation) {
        toast.error(result.error || "Failed to save quotation");
        return;
      }

      toast.success(
        initialData ? "Quotation updated successfully" : "Quotation created successfully"
      );
      router.push(`/admin/quotations/${result.quotation.id}`);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save quotation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8 max-w-6xl mx-auto pb-20">
      <div className="flex flex-col gap-4 border-b bg-background/80 py-4 backdrop-blur-md md:sticky md:top-0 md:z-20 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {initialData ? "Edit Quotation" : "Create New Quotation"}
          </h1>
          <p className="text-muted-foreground">
            Build a customer-ready quotation with products, discounts, and totals.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {initialData?.id ? (
            <Button variant="outline" asChild>
              <a href={`/api/quotation/${initialData.id}/pdf`}>
                <ReceiptText className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          ) : null}

          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/quotations")}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {initialData ? "Update Quotation" : "Save Quotation"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-8">
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Customer Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter customer name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Customer Company</Label>
                  <Input
                    id="company"
                    value={customerCompany}
                    onChange={(event) => setCustomerCompany(event.target.value)}
                    placeholder="Optional company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="customer@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="City, State"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billAmount">Monthly Electricity Bill</Label>
                  <Input
                    id="billAmount"
                    type="number"
                    min="0"
                    value={billAmount}
                    onChange={(event) => setBillAmount(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Street address or site address"
                  className="min-h-[90px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirement">Requirement</Label>
                <Textarea
                  id="requirement"
                  value={requirement}
                  onChange={(event) => setRequirement(event.target.value)}
                  placeholder="Residential, commercial, industrial, maintenance, etc."
                  className="min-h-[90px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Quotation Items</h2>
                  <p className="text-sm text-muted-foreground">
                    Add products, unit prices, quantities, and item-level discounts.
                  </p>
                </div>
                <Button type="button" variant="outline" onClick={addItem}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-border/70 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-semibold">Item {index + 1}</h3>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:bg-destructive/10"
                        onClick={() => removeItem(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2 md:col-span-2">
                        <Label>Product Name</Label>
                        <Input
                          value={item.productName}
                          onChange={(event) =>
                            updateItem(index, "productName", event.target.value)
                          }
                          placeholder="Solar panel, inverter, structure, installation, etc."
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label>Description</Label>
                        <Textarea
                          value={item.description}
                          onChange={(event) =>
                            updateItem(index, "description", event.target.value)
                          }
                          placeholder="Optional line-item notes"
                          className="min-h-[84px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(event) =>
                            updateItem(
                              index,
                              "quantity",
                              Math.max(1, Number(event.target.value) || 1)
                            )
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Unit Price</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.unitPrice}
                          onChange={(event) =>
                            updateItem(
                              index,
                              "unitPrice",
                              Math.max(0, Number(event.target.value) || 0)
                            )
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Discount (%)</Label>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          step="0.01"
                          value={item.discountPercent}
                          onChange={(event) =>
                            updateItem(
                              index,
                              "discountPercent",
                              Math.min(100, Math.max(0, Number(event.target.value) || 0))
                            )
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Line Total</Label>
                        <div className="flex h-9 items-center rounded-lg border border-border bg-muted/30 px-3 text-sm font-semibold">
                          {formatCurrency(calculateLineTotal(item))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="quoteNumber">Quote Number</Label>
                <Input
                  id="quoteNumber"
                  value={quoteNumber}
                  onChange={(event) => setQuoteNumber(event.target.value)}
                  placeholder="Auto-generated quotation number"
                />
              </div>

              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={(value) => setStatus(value as typeof status)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inquiry">Inquiry</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="finalized">Finalized</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="validUntil">Valid Until</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !validUntil && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {validUntil ? format(validUntil, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={validUntil}
                      onSelect={setValidUntil}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Terms, payment schedule, delivery notes, or warranty details"
                  className="min-h-[140px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">Pricing Summary</h2>

              <div className="space-y-3 rounded-2xl bg-muted/20 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    {formatCurrency(totals.subtotalAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-medium">
                    {formatCurrency(totals.discountAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t pt-3 text-base font-semibold">
                  <span>Grand Total</span>
                  <span>{formatCurrency(totals.totalAmount)}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                PDF downloads use these saved totals and line items exactly as shown here.
              </p>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {initialData ? "Save Changes" : "Create Quotation"}
              </Button>

              <Button type="button" variant="outline" className="w-full" asChild>
                <Link href="/admin/quotations">Back to quotation list</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}

