"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Demo only — no real authentication. Redirecting to home…");
    window.setTimeout(() => router.push("/"), 900);
  }

  return (
    <div className="panel login-card-enter w-full max-w-md border-[var(--line)] p-6 shadow-[0_24px_80px_-24px_rgba(20,184,166,0.15)] md:p-8">
      <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-bright)]">Member access</p>
      <h1 className="mt-2 text-2xl font-black text-slate-50">Sign in</h1>
      <p className="mt-1 text-sm text-[var(--muted)]">Use your member ID or email and password.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-id" className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-400">
            User ID / Email
          </label>
          <input
            id="login-id"
            name="loginId"
            type="text"
            autoComplete="username"
            required
            className="login-input"
            placeholder="Enter your ID or email"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label htmlFor="login-password" className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Password
            </label>
            <button
              type="button"
              className="text-xs font-semibold text-[var(--accent-bright)] underline-offset-2 hover:text-[var(--accent)] hover:underline"
            >
              Forgot?
            </button>
          </div>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="login-input"
            placeholder="••••••••"
          />
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-300">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-slate-600 bg-slate-900 accent-[var(--accent)]"
          />
          Remember me
        </label>
        <button
          type="submit"
          className="btn-cta-primary w-full rounded-full py-3.5 text-sm font-black uppercase tracking-wide text-[var(--cta-text)]"
        >
          Sign in
        </button>
      </form>

      {message ? (
        <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-center text-sm font-medium text-amber-200">
          {message}
        </p>
      ) : null}

      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        No account?{" "}
        <Link href="/" className="font-bold text-[var(--accent-bright)] underline-offset-2 hover:underline">
          Browse as guest
        </Link>
      </p>
    </div>
  );
}
