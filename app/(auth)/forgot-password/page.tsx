"use client";

import { useActionState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { KeyRound, Mail, ArrowRight, Loader2, ChevronLeft } from "lucide-react";
import { forgotPasswordAction } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [state, formAction, isPending] = useActionState(
    forgotPasswordAction,
    undefined
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <KeyRound className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password</h1>
        <p className="text-muted-foreground">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      {/* Messages */}
      {state?.error && (
        <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm mb-6 border border-destructive/20 text-center animate-shake">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-4 rounded-xl bg-primary/10 text-primary text-sm mb-6 border border-primary/20 text-center">
          {state.success}
        </div>
      )}

      {/* Form */}
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 h-12 rounded-xl bg-background border-border"
              required
            />
          </div>
          {state?.errors?.email && (
            <p className="text-xs text-destructive mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <Button type="submit" disabled={isPending} className="w-full h-12 rounded-xl text-lg font-bold group">
          {isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </span>
          ) : (
            <>
              Send Reset Link
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
