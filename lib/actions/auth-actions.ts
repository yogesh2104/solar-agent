"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import {
  SignInSchema,
  SignUpSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
} from "@/lib/schemas";
import { generatePasswordResetToken } from "@/lib/tokens";
import { getPasswordResetTokenByToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";
import { v4 as uuidv4 } from "uuid";

// ─── Types ───────────────────────────────────────────────────────────────────

type ActionResult = {
  success?: string;
  error?: string;
  errors?: Record<string, string[]>;
};

// ─── Sign Up ─────────────────────────────────────────────────────────────────

export async function signUpAction(
  _prevState: ActionResult | undefined,
  formData: FormData
): Promise<ActionResult> {
  const values = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    phone: formData.get("phone") as string,
    gender: formData.get("gender") as string,
  };

  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { name, email, password, phone, gender } = validatedFields.data;

  // Check if user already exists
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "An account with this email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const uniqueId = uuidv4().slice(0, 8).toUpperCase();

  await db.user.create({
    data: {
      name,
      email,
      hashedPassword,
      phone,
      gender: gender as "male" | "female",
      uniqueId,
    },
  });

  return { success: "Account created successfully! Please sign in." };
}

// ─── Sign In ─────────────────────────────────────────────────────────────────

export async function signInAction(
  _prevState: ActionResult | undefined,
  formData: FormData
): Promise<ActionResult> {
  const values = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { email, password } = validatedFields.data;

  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user || !user.hashedPassword) {
    return { error: "Invalid email or password" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    return { error: "Invalid email or password" };
  }

  if (user.isActive === false) {
    return { error: "Your account has been deactivated" };
  }

  // Return success — the client will call signIn() from next-auth/react
  return { success: "Login successful!" };
}

// ─── Forgot Password ────────────────────────────────────────────────────────

export async function forgotPasswordAction(
  _prevState: ActionResult | undefined,
  formData: FormData
): Promise<ActionResult> {
  const values = {
    email: formData.get("email") as string,
  };

  const validatedFields = ForgotPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    // Don't reveal whether the email exists
    return { success: "If an account exists, a reset link has been sent." };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(email, passwordResetToken.token);

  return { success: "If an account exists, a reset link has been sent." };
}

// ─── Reset Password ─────────────────────────────────────────────────────────

export async function resetPasswordAction(
  _prevState: ActionResult | undefined,
  formData: FormData
): Promise<ActionResult> {
  const token = formData.get("token") as string;

  if (!token) {
    return { error: "Missing reset token" };
  }

  const values = {
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid or expired reset token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Reset token has expired. Please request a new one." };
  }

  const existingUser = await db.user.findUnique({
    where: { email: existingToken.email },
  });

  if (!existingUser) {
    return { error: "User not found" };
  }

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated successfully! You can now sign in." };
}
