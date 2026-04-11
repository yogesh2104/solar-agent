"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { resetPasswordAction } from "@/lib/actions/auth-actions";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, formAction, isPending] = useActionState(
    resetPasswordAction,
    undefined
  );

  if (!token) {
    return (
      <div className="auth-card">
        <div className="auth-card-header">
          <h1 className="auth-title">Invalid Link</h1>
          <p className="auth-subtitle">
            This reset link is invalid or has expired.
          </p>
        </div>
        <div className="auth-footer">
          <Link href="/forgot-password" className="auth-link">
            Request a new link →
          </Link>
        </div>
      </div>
    );
  }

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
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h1 className="auth-title">Reset Password</h1>
        <p className="auth-subtitle">Enter your new password below</p>
      </div>

      {/* Messages */}
      {state?.error && <div className="auth-alert auth-alert-error">{state.error}</div>}
      {state?.success && (
        <div className="auth-alert auth-alert-success">
          {state.success}{" "}
          <Link href="/sign-in" className="auth-link">
            Sign in now →
          </Link>
        </div>
      )}

      {/* Form */}
      <form action={formAction} className="auth-form">
        <input type="hidden" name="token" value={token} />

        <div className="auth-field">
          <label htmlFor="password" className="auth-label">
            New Password
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

        <div className="auth-field">
          <label htmlFor="confirmPassword" className="auth-label">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="auth-input"
            required
          />
          {state?.errors?.confirmPassword && (
            <p className="auth-field-error">
              {state.errors.confirmPassword[0]}
            </p>
          )}
        </div>

        <button type="submit" disabled={isPending} className="auth-btn">
          {isPending ? (
            <span className="auth-btn-loading">
              <span className="auth-spinner" />
              Resetting...
            </span>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="auth-footer">
        <p>
          <Link href="/sign-in" className="auth-link">
            ← Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-spinner auth-spinner-lg" />
            <p className="auth-subtitle" style={{ marginTop: "1rem" }}>
              Loading...
            </p>
          </div>
        </div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
