"use client";

import { useActionState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signInAction } from "@/lib/actions/auth-actions";

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      // Get form values and call next-auth signIn
      const form = document.getElementById("signin-form") as HTMLFormElement;
      const formData = new FormData(form);
      signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        callbackUrl: "/",
      });
    }
  }, [state?.success, router]);

  return (
    <div className="auth-card">
      {/* Header */}
      <div className="auth-card-header">
        <div className="auth-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="auth-icon-svg"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to your account</p>
      </div>

      {/* Error/Success Messages */}
      {state?.error && <div className="auth-alert auth-alert-error">{state.error}</div>}
      {state?.success && (
        <div className="auth-alert auth-alert-success">{state.success}</div>
      )}

      {/* Form */}
      <form id="signin-form" action={formAction} className="auth-form">
        <div className="auth-field">
          <label htmlFor="email" className="auth-label">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="auth-input"
            required
          />
          {state?.errors?.email && (
            <p className="auth-field-error">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="password" className="auth-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="auth-input"
            required
          />
          {state?.errors?.password && (
            <p className="auth-field-error">{state.errors.password[0]}</p>
          )}
        </div>

        <div className="auth-forgot-link">
          <Link href="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" disabled={isPending} className="auth-btn">
          {isPending ? (
            <span className="auth-btn-loading">
              <span className="auth-spinner" />
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="auth-footer">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="auth-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
