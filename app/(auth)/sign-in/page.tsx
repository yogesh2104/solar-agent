"use client";

import { useActionState, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { signInAction } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    undefined,
  );
  const [authError, setAuthError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const performSignIn = async () => {
      if (state?.success) {
        setAuthError(null);
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          setAuthError("Authentication failed. Please check your credentials.");
        } else {
          router.push("/");
          router.refresh();
        }
      }
    };
    performSignIn();
  }, [state?.success, router]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <LogIn className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome Back
        </h1>
        <p className="text-muted-foreground">
          Sign in to manage your solar energy
        </p>
      </div>

      {/* Messages */}
      {(state?.error || authError) && (
        <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm mb-6 border border-destructive/20 text-center animate-shake">
          {state?.error || authError}
        </div>
      )}
      {state?.success && (
        <div className="p-4 rounded-xl bg-primary/10 text-primary text-sm mb-6 border border-primary/20 text-center">
          {state.success}
        </div>
      )}

      {/* Form */}
      <form id="signin-form" action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="pl-10 h-12 rounded-xl bg-background border-border focus:ring-primary"
              required
            />
          </div>
          {state?.errors?.email && (
            <p className="text-xs text-destructive mt-1">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="pl-10 h-12 rounded-xl bg-background border-border focus:ring-primary"
              required
            />
          </div>
          {state?.errors?.password && (
            <p className="text-xs text-destructive mt-1">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-12 rounded-xl text-lg font-bold group"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Signing in...
            </span>
          ) : (
            <>
              Sign In
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 pt-8 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-primary font-bold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
