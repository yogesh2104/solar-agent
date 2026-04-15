"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ArrowRight, Loader2, ChevronLeft, AlertCircle } from "lucide-react";
import { resetPasswordAction } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, formAction, isPending] = useActionState(
    resetPasswordAction,
    undefined
  );

  if (!token) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border p-8 rounded-[2.5rem] shadow-2xl text-center"
      >
        <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-2xl flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-4">Invalid Link</h1>
        <p className="text-muted-foreground mb-8">
          This reset link is invalid or has expired. Please request a new one.
        </p>
        <Link href="/forgot-password" className="w-full">
          <Button variant="outline" className="w-full rounded-xl h-12">
            Request New Link
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
        <p className="text-muted-foreground">Secure your account with a new password</p>
      </div>

      {/* Messages */}
      {state?.error && (
        <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm mb-6 border border-destructive/20 text-center animate-shake">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-4 rounded-xl bg-primary/10 text-primary text-sm mb-6 border border-primary/20 text-center">
          {state.success}{" "}
          <Link href="/sign-in" className="font-bold underline ml-1 text-primary hover:text-primary/80">
            Sign in now →
          </Link>
        </div>
      )}

      {/* Form */}
      <form action={formAction} className="space-y-6">
        <input type="hidden" name="token" value={token} />

        <div className="space-y-2">
          <Label htmlFor="password">New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-12 rounded-xl bg-background border-border"
              required
            />
          </div>
          {state?.errors?.password && (
            <p className="text-xs text-destructive mt-1">{state.errors.password[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-12 rounded-xl bg-background border-border"
              required
            />
          </div>
          {state?.errors?.confirmPassword && (
            <p className="text-xs text-destructive mt-1">{state.errors.confirmPassword[0]}</p>
          )}
        </div>

        <Button type="submit" disabled={isPending} className="w-full h-12 rounded-xl text-lg font-bold group">
          {isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Resetting...
            </span>
          ) : (
            <>
              Reset Password
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 pt-8 border-t border-border/50 text-center">
        <Link 
          href="/sign-in" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>
    </motion.div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-card border border-border p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground font-medium">Preparing your request...</p>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
