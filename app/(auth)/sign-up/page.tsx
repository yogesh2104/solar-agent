"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUpAction } from "@/lib/actions/auth-actions";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        </div>
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Get started with your free account</p>
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
        <div className="auth-field">
          <label htmlFor="name" className="auth-label">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="auth-input"
            required
          />
          {state?.errors?.name && (
            <p className="auth-field-error">{state.errors.name[0]}</p>
          )}
        </div>

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

        <div className="auth-field">
          <label htmlFor="phone" className="auth-label">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 9876543210"
            className="auth-input"
            required
          />
          {state?.errors?.phone && (
            <p className="auth-field-error">{state.errors.phone[0]}</p>
          )}
        </div>

        <div className="auth-field">
          <label htmlFor="gender" className="auth-label">
            Gender
          </label>
          <select id="gender" name="gender" className="auth-input auth-select" required>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {state?.errors?.gender && (
            <p className="auth-field-error">{state.errors.gender[0]}</p>
          )}
        </div>

        <button type="submit" disabled={isPending} className="auth-btn">
          {isPending ? (
            <span className="auth-btn-loading">
              <span className="auth-spinner" />
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="auth-footer">
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="auth-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
