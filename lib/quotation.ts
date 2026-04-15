export interface EditableQuotationItem {
  productName: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  discountPercent: number;
}

export interface QuotationTotals {
  subtotalAmount: number;
  discountAmount: number;
  totalAmount: number;
}

export const COMPANY_PROFILE = {
  name: "SolarCo",
  email: "energy@solarco.com",
  phone: "+91 98765 43210",
  address: "123 Solar Way, Sunshine City",
};

export function generateQuotationNumber(date = new Date()) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  const seconds = `${date.getSeconds()}`.padStart(2, "0");
  const random = Math.floor(Math.random() * 900 + 100);

  return `QT-${year}${month}${day}-${hours}${minutes}${seconds}-${random}`;
}

export function calculateLineBaseTotal(item: EditableQuotationItem) {
  return item.quantity * item.unitPrice;
}

export function calculateLineDiscountAmount(item: EditableQuotationItem) {
  const baseTotal = calculateLineBaseTotal(item);
  return (baseTotal * item.discountPercent) / 100;
}

export function calculateLineTotal(item: EditableQuotationItem) {
  return Math.max(
    0,
    calculateLineBaseTotal(item) - calculateLineDiscountAmount(item)
  );
}

export function calculateQuotationTotals(
  items: EditableQuotationItem[]
): QuotationTotals {
  return items.reduce(
    (totals, item) => {
      const baseTotal = calculateLineBaseTotal(item);
      const discount = calculateLineDiscountAmount(item);

      totals.subtotalAmount += baseTotal;
      totals.discountAmount += discount;
      totals.totalAmount += Math.max(0, baseTotal - discount);

      return totals;
    },
    {
      subtotalAmount: 0,
      discountAmount: 0,
      totalAmount: 0,
    }
  );
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function normalizeOptionalString(value?: string | null) {
  const normalized = value?.trim();
  return normalized ? normalized : null;
}

