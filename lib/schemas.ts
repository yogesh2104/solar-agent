import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .trim(),
  gender: z.enum(["male", "female"], {
    message: "Please select a gender",
  }),
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const PublicQuotationRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  email: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Please enter a valid email address",
    }),
  location: z.string().min(2, { message: "Location is required" }),
  billAmount: z.coerce
    .number()
    .int()
    .min(0, { message: "Bill amount must be 0 or more" }),
  requirement: z.string().min(2, { message: "Requirement is required" }),
});

export const QuotationItemSchema = z.object({
  productName: z
    .string()
    .trim()
    .min(1, { message: "Product name is required" }),
  description: z.string().trim().optional(),
  quantity: z
    .number()
    .int()
    .min(1, { message: "Quantity must be at least 1" }),
  unitPrice: z.number().min(0, { message: "Unit price must be 0 or more" }),
  discountPercent: z
    .number()
    .min(0, { message: "Discount cannot be negative" })
    .max(100, { message: "Discount cannot exceed 100%" }),
});

export const AdminQuotationSchema = z.object({
  name: z.string().trim().min(2, { message: "Customer name is required" }),
  phone: z.string().trim().min(5, { message: "Phone number is required" }),
  email: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Please enter a valid email address",
    }),
  customerCompany: z.string().trim().optional(),
  address: z.string().trim().optional(),
  location: z.string().trim().min(2, { message: "Location is required" }),
  billAmount: z
    .number()
    .int()
    .min(0, { message: "Bill amount must be 0 or more" }),
  requirement: z.string().trim().min(2, { message: "Requirement is required" }),
  quoteNumber: z.string().trim().optional(),
  status: z.enum(["inquiry", "draft", "finalized"]),
  notes: z.string().trim().optional(),
  validUntil: z.string().optional(),
  items: z.array(QuotationItemSchema),
});
