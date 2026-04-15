import {
  COMPANY_PROFILE,
  EditableQuotationItem,
  formatCurrency,
} from "@/lib/quotation";

interface PdfQuotation extends Record<string, unknown> {
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
  notes?: string | null;
  validUntil?: Date | null;
  subtotalAmount?: number | null;
  discountAmount?: number | null;
  totalAmount?: number | null;
  createdAt: Date;
  items: Array<
    EditableQuotationItem & {
      lineTotal?: number | null;
    }
  >;
}

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const PAGE_MARGIN = 48;
const PAGE_BOTTOM_MARGIN = 56;

function escapePdfText(value: string) {
  return value
    .replace(/\u20B9/g, "Rs. ") // Replace Indian Rupee symbol with Rs. for PDF compatibility
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function formatDate(value?: Date | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(value);
}

function formatPercentage(value: number) {
  return `${value.toFixed(0)}%`;
}

function formatOptional(value?: string | null) {
  return value?.trim() || "-";
}

class PdfDocument {
  private readonly pages: string[][] = [[]];
  private currentPage = 0;

  addPage() {
    this.pages.push([]);
    this.currentPage = this.pages.length - 1;
  }

  drawText(
    text: string,
    x: number,
    y: number,
    options?: {
      size?: number;
      font?: "F1" | "F2";
      color?: [number, number, number];
    }
  ) {
    const size = options?.size ?? 12;
    const font = options?.font ?? "F1";
    const color = options?.color ?? [0, 0, 0];

    this.pages[this.currentPage].push(
      `BT ${color[0].toFixed(3)} ${color[1].toFixed(3)} ${color[2].toFixed(
        3
      )} rg /${font} ${size.toFixed(2)} Tf 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(
        2
      )} Tm (${escapePdfText(text)}) Tj ET`
    );
  }

  drawLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    width = 1,
    color: [number, number, number] = [0, 0, 0]
  ) {
    this.pages[this.currentPage].push(
      `${color[0].toFixed(3)} ${color[1].toFixed(3)} ${color[2].toFixed(
        3
      )} RG ${width.toFixed(2)} w ${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(
        2
      )} ${y2.toFixed(2)} l S`
    );
  }

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: [number, number, number]
  ) {
    this.pages[this.currentPage].push(
      `${color[0].toFixed(3)} ${color[1].toFixed(3)} ${color[2].toFixed(
        3
      )} rg ${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(
        2
      )} re f`
    );
  }

  wrapText(text: string, maxWidth: number, fontSize = 12) {
    const safeText = text.trim();
    if (!safeText) {
      return [""];
    }

    const approxCharWidth = fontSize * 0.52;
    const maxChars = Math.max(8, Math.floor(maxWidth / approxCharWidth));
    const words = safeText.split(/\s+/);
    const lines: string[] = [];
    let current = "";

    for (const word of words) {
      if (word.length > maxChars) {
        if (current) {
          lines.push(current);
          current = "";
        }

        for (let index = 0; index < word.length; index += maxChars) {
          lines.push(word.slice(index, index + maxChars));
        }
        continue;
      }

      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length <= maxChars) {
        current = candidate;
      } else {
        if (current) {
          lines.push(current);
        }
        current = word;
      }
    }

    if (current) {
      lines.push(current);
    }

    return lines.length > 0 ? lines : [safeText];
  }

  addPageNumbers() {
    const totalPages = this.pages.length;

    this.pages.forEach((page, index) => {
      const pageLabel = `Page ${index + 1} of ${totalPages}`;
      page.push(
        `BT 0.450 0.450 0.450 rg /F1 10 Tf 1 0 0 1 ${(
          PAGE_WIDTH / 2 - 28
        ).toFixed(2)} 24.00 Tm (${escapePdfText(pageLabel)}) Tj ET`
      );
    });
  }

  toBuffer() {
    this.addPageNumbers();

    const objects: string[] = [];
    const pageObjectNumbers: number[] = [];
    const contentObjectNumbers: number[] = [];
    const fontRegularObjectNumber = 3;
    const fontBoldObjectNumber = 4;

    objects[1] = `<< /Type /Catalog /Pages 2 0 R >>`;
    objects[2] = `<< /Type /Pages /Count ${this.pages.length} /Kids [${this.pages
      .map((_, index) => `${5 + index * 2} 0 R`)
      .join(" ")}] >>`;
    objects[fontRegularObjectNumber] =
      `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;
    objects[fontBoldObjectNumber] =
      `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`;

    this.pages.forEach((contentCommands, index) => {
      const pageObjectNumber = 5 + index * 2;
      const contentObjectNumber = pageObjectNumber + 1;
      const contentStream = contentCommands.join("\n");

      pageObjectNumbers.push(pageObjectNumber);
      contentObjectNumbers.push(contentObjectNumber);

      objects[pageObjectNumber] =
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH.toFixed(
          2
        )} ${PAGE_HEIGHT.toFixed(
          2
        )}] /Resources << /Font << /F1 ${fontRegularObjectNumber} 0 R /F2 ${fontBoldObjectNumber} 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`;
      objects[contentObjectNumber] =
        `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`;
    });

    let pdf = "%PDF-1.4\n";
    const offsets: number[] = [0];

    for (let index = 1; index < objects.length; index++) {
      const object = objects[index];
      if (!object) {
        continue;
      }

      offsets[index] = Buffer.byteLength(pdf, "utf8");
      pdf += `${index} 0 obj\n${object}\nendobj\n`;
    }

    const xrefOffset = Buffer.byteLength(pdf, "utf8");
    pdf += `xref\n0 ${objects.length}\n`;
    pdf += "0000000000 65535 f \n";

    for (let index = 1; index < objects.length; index++) {
      const offset = offsets[index] ?? 0;
      pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
    }

    pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    return Buffer.from(pdf, "utf8");
  }
}

function drawHeader(doc: PdfDocument, quotation: PdfQuotation) {
  doc.drawText(COMPANY_PROFILE.name, PAGE_MARGIN, 798, {
    size: 22,
    font: "F2",
  });
  doc.drawText("Solar Quotation", PAGE_WIDTH - 182, 800, {
    size: 18,
    font: "F2",
  });
  doc.drawText(COMPANY_PROFILE.address, PAGE_MARGIN, 780, {
    size: 10.5,
    color: [0.33, 0.33, 0.33],
  });
  doc.drawText(
    `${COMPANY_PROFILE.email} | ${COMPANY_PROFILE.phone}`,
    PAGE_MARGIN,
    766,
    {
      size: 10.5,
      color: [0.33, 0.33, 0.33],
    }
  );
  doc.drawLine(PAGE_MARGIN, 752, PAGE_WIDTH - PAGE_MARGIN, 752, 1.1, [
    0.11,
    0.35,
    0.15,
  ]);

  doc.drawText(
    `Quotation No: ${
      quotation.quoteNumber || `Draft-${quotation.id.slice(-6).toUpperCase()}`
    }`,
    PAGE_MARGIN,
    730,
    {
      size: 11,
      font: "F2",
    }
  );
  doc.drawText(`Issue Date: ${formatDate(quotation.createdAt)}`, 360, 730, {
    size: 11,
  });
  doc.drawText(`Valid Until: ${formatDate(quotation.validUntil)}`, 360, 714, {
    size: 11,
  });
}

function drawSectionTitle(doc: PdfDocument, title: string, y: number) {
  doc.drawText(title, PAGE_MARGIN, y, {
    size: 12,
    font: "F2",
  });
  doc.drawLine(PAGE_MARGIN, y - 4, PAGE_WIDTH - PAGE_MARGIN, y - 4, 0.6, [
    0.88,
    0.9,
    0.92,
  ]);
}

function drawWrappedText(
  doc: PdfDocument,
  label: string,
  value: string,
  x: number,
  y: number,
  width: number
) {
  doc.drawText(label, x, y, {
    size: 10,
    font: "F2",
  });
  const lines = doc.wrapText(value, width - 72, 10.5);
  lines.forEach((line, index) => {
    doc.drawText(line, x + 72, y - index * 13, {
      size: 10.5,
      color: [0.2, 0.2, 0.2],
    });
  });
  return Math.max(1, lines.length) * 13;
}

export function buildQuotationPdfBuffer(quotation: PdfQuotation) {
  const doc = new PdfDocument();
  drawHeader(doc, quotation);

  let y = 680;
  drawSectionTitle(doc, "Customer Details", y);
  y -= 24;

  y -= drawWrappedText(doc, "Name", quotation.name, PAGE_MARGIN, y, 500);
  y -= drawWrappedText(
    doc,
    "Company",
    formatOptional(quotation.customerCompany),
    PAGE_MARGIN,
    y,
    500
  );
  y -= drawWrappedText(doc, "Phone", quotation.phone, PAGE_MARGIN, y, 500);
  y -= drawWrappedText(
    doc,
    "Email",
    formatOptional(quotation.email),
    PAGE_MARGIN,
    y,
    500
  );
  y -= drawWrappedText(
    doc,
    "Address",
    formatOptional(quotation.address || quotation.location),
    PAGE_MARGIN,
    y,
    500
  );

  y -= 10;
  drawSectionTitle(doc, "Project Summary", y);
  y -= 24;
  y -= drawWrappedText(doc, "Location", quotation.location, PAGE_MARGIN, y, 500);
  y -= drawWrappedText(
    doc,
    "Requirement",
    quotation.requirement,
    PAGE_MARGIN,
    y,
    500
  );
  y -= drawWrappedText(
    doc,
    "Monthly Bill",
    formatCurrency(quotation.billAmount),
    PAGE_MARGIN,
    y,
    500
  );

  y -= 18;
  drawSectionTitle(doc, "Quotation Items", y);
  y -= 18;

  const drawItemsHeader = (headerY: number) => {
    doc.fillRect(PAGE_MARGIN, headerY - 14, PAGE_WIDTH - PAGE_MARGIN * 2, 20, [
      0.94,
      0.97,
      0.95,
    ]);
    doc.drawText("Product", 56, headerY - 1, { size: 10, font: "F2" });
    doc.drawText("Qty", 306, headerY - 1, { size: 10, font: "F2" });
    doc.drawText("Price", 346, headerY - 1, { size: 10, font: "F2" });
    doc.drawText("Discount", 422, headerY - 1, { size: 10, font: "F2" });
    doc.drawText("Total", 506, headerY - 1, { size: 10, font: "F2" });
  };

  drawItemsHeader(y);
  y -= 30;

  const items = quotation.items.length
    ? quotation.items
    : [
        {
          productName: "Quotation pending product configuration",
          description: "The admin has not added line items yet.",
          quantity: 1,
          unitPrice: 0,
          discountPercent: 0,
          lineTotal: 0,
        },
      ];

  for (const item of items) {
    const productLines = doc.wrapText(item.productName, 228, 10.5);
    const descriptionLines = item.description
      ? doc.wrapText(item.description, 228, 9.5)
      : [];
    const rowHeight = Math.max(
      24,
      productLines.length * 13 + descriptionLines.length * 11 + 8
    );

    if (y - rowHeight < PAGE_BOTTOM_MARGIN) {
      doc.addPage();
      drawHeader(doc, quotation);
      y = 700;
      drawSectionTitle(doc, "Quotation Items (continued)", y);
      y -= 18;
      drawItemsHeader(y);
      y -= 30;
    }

    productLines.forEach((line, index) => {
      doc.drawText(line, 56, y - index * 13, {
        size: 10.5,
      });
    });

    descriptionLines.forEach((line, index) => {
      doc.drawText(line, 56, y - productLines.length * 13 - 4 - index * 11, {
        size: 9.5,
        color: [0.4, 0.4, 0.4],
      });
    });

    doc.drawText(String(item.quantity), 310, y, {
      size: 10.5,
    });
    doc.drawText(formatCurrency(item.unitPrice), 346, y, {
      size: 10.5,
    });
    doc.drawText(formatPercentage(item.discountPercent), 426, y, {
      size: 10.5,
    });
    doc.drawText(
      formatCurrency(item.lineTotal ?? 0),
      498,
      y,
      {
        size: 10.5,
        font: "F2",
      }
    );

    doc.drawLine(PAGE_MARGIN, y - rowHeight + 6, PAGE_WIDTH - PAGE_MARGIN, y - rowHeight + 6, 0.5, [
      0.9,
      0.9,
      0.9,
    ]);
    y -= rowHeight;
  }

  const totalsY = Math.max(PAGE_BOTTOM_MARGIN + 90, y - 10);
  if (totalsY < PAGE_BOTTOM_MARGIN + 80) {
    doc.addPage();
    drawHeader(doc, quotation);
    y = 700;
  } else {
    y = totalsY;
  }

  const subtotal = quotation.subtotalAmount ?? 0;
  const discount = quotation.discountAmount ?? 0;
  const total = quotation.totalAmount ?? 0;

  doc.fillRect(330, y - 58, 217, 70, [0.97, 0.98, 0.99]);
  doc.drawText("Subtotal", 348, y, { size: 10.5, font: "F2" });
  doc.drawText(formatCurrency(subtotal), 470, y, { size: 10.5 });
  doc.drawText("Discount", 348, y - 18, { size: 10.5, font: "F2" });
  doc.drawText(formatCurrency(discount), 470, y - 18, { size: 10.5 });
  doc.drawLine(344, y - 28, 534, y - 28, 0.7, [0.8, 0.84, 0.88]);
  doc.drawText("Grand Total", 348, y - 46, { size: 12, font: "F2" });
  doc.drawText(formatCurrency(total), 456, y - 46, {
    size: 12,
    font: "F2",
  });

  if (quotation.notes) {
    let notesY = y - 100;
    if (notesY < PAGE_BOTTOM_MARGIN + 50) {
      doc.addPage();
      drawHeader(doc, quotation);
      notesY = 700;
    }

    drawSectionTitle(doc, "Notes", notesY);
    const noteLines = doc.wrapText(quotation.notes, PAGE_WIDTH - PAGE_MARGIN * 2, 10.5);
    noteLines.forEach((line, index) => {
      doc.drawText(line, PAGE_MARGIN, notesY - 24 - index * 13, {
        size: 10.5,
        color: [0.25, 0.25, 0.25],
      });
    });
  }

  return doc.toBuffer();
}

