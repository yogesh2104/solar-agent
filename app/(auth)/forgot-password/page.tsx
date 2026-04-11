"use client";

import { useActionState } from "react";
import Link from "next/link";
import { forgotPasswordAction } from "@/lib/actions/auth-actions";

export default function ForgotPasswordPage() {
  const [state, formAction, isPending] = useActionState(
    forgotPasswordAction,
    undefined
  );

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
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
          </svg>
        </div>
        <h1 className="auth-title">Forgot Password</h1>
        <p className="auth-subtitle">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      {/* Messages */}
      {state?.error && <div className="auth-alert auth-alert-error">{state.error}</div>}
      {state?.success && (
        <div className="auth-alert auth-alert-success">{state.success}</div>
      )}

      {/* Form */}
      <form action={formAction} className="auth-form">
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

        <button type="submit" disabled={isPending} className="auth-btn">
          {isPending ? (
            <span className="auth-btn-loading">
              <span className="auth-spinner" />
              Sending...
            </span>
          ) : (
            "Send Reset Link"
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="auth-footer">
        <p>
          Remember your password?{" "}
          <Link href="/sign-in" className="auth-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
