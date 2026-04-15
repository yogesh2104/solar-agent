"use client";

import { useActionState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserPlus, User, Mail, Lock, Phone, UserCircle, ArrowRight, Loader2 } from "lucide-react";
import { signUpAction } from "@/lib/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
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
          <UserPlus className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-muted-foreground">Join the renewable energy revolution</p>
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
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              className="pl-10 h-11 rounded-xl bg-background border-border"
              required
            />
          </div>
          {state?.errors?.name && (
            <p className="text-xs text-destructive mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 h-11 rounded-xl bg-background border-border"
              required
            />
          </div>
          {state?.errors?.email && (
            <p className="text-xs text-destructive mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-11 rounded-xl bg-background border-border"
              required
            />
          </div>
          {state?.errors?.password && (
            <p className="text-xs text-destructive mt-1">{state.errors.password[0]}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 987..."
                className="pl-10 h-11 rounded-xl bg-background border-border text-sm"
                required
              />
            </div>
            {state?.errors?.phone && (
              <p className="text-xs text-destructive mt-1">{state.errors.phone[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select 
                id="gender" 
                name="gender" 
                className="flex h-11 w-full rounded-xl border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {state?.errors?.gender && (
              <p className="text-xs text-destructive mt-1">{state.errors.gender[0]}</p>
            )}
          </div>
        </div>

        <Button type="submit" disabled={isPending} className="w-full h-12 rounded-xl text-lg font-bold group mt-4">
          {isPending ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating account...
            </span>
          ) : (
            <>
              Create Account
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 pt-8 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary font-bold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
