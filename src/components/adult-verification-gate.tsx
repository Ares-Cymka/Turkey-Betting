"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "turkeybet-adult-confirmed";
const ADULT_STORE_EVENT = "turkeybet-adult-changed";

function readStoredVerified(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function subscribeToAdultStore(onChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const handler = () => onChange();
  window.addEventListener("storage", handler);
  window.addEventListener(ADULT_STORE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(ADULT_STORE_EVENT, handler);
  };
}

function useAdultVerifiedFromStorage(): boolean {
  return useSyncExternalStore(subscribeToAdultStore, readStoredVerified, () => false);
}

export function AdultVerificationGate() {
  const storedVerified = useAdultVerifiedFromStorage();
  const [fallbackPass, setFallbackPass] = useState(false);
  const [underageNotice, setUnderageNotice] = useState(false);

  const verified = storedVerified || fallbackPass;

  useEffect(() => {
    if (!verified) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [verified]);

  function confirmAdult() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      setFallbackPass(true);
    }
    window.dispatchEvent(new Event(ADULT_STORE_EVENT));
  }

  function decline() {
    setUnderageNotice(true);
  }

  function leaveSite() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = "about:blank";
  }

  if (verified) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/88 p-4 backdrop-blur-md"
      role="presentation"
    >
      <div
        className="panel age-gate-modal max-h-[90vh] w-full max-w-md overflow-y-auto border-[var(--line)] p-6 shadow-[0_24px_80px_-20px_rgba(20,184,166,0.12)] md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
      >
        <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--accent-bright)]">
          Responsible gaming
        </p>
        <h2 id="age-gate-title" className="mt-2 text-center text-2xl font-black text-slate-50">
          Age verification
        </h2>
        <p className="mt-3 text-center text-sm leading-relaxed text-slate-400">
          This website is intended for adults <strong className="text-slate-200">18 years or older</strong>. Betting may be
          restricted or illegal in your jurisdiction. By entering, you confirm that you meet the legal age requirement.
        </p>

        {underageNotice ? (
          <p className="mt-4 rounded-lg border border-amber-500/35 bg-amber-500/10 px-3 py-2 text-center text-sm font-medium text-amber-200">
            You must be of legal age to continue. If you are under 18, please leave this site.
          </p>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse sm:justify-center">
          <button
            type="button"
            onClick={confirmAdult}
            className="btn-cta-primary w-full rounded-full py-3 text-sm font-black uppercase tracking-wide text-[var(--cta-text)] sm:w-auto sm:min-w-[200px]"
          >
            I am 18 or older
          </button>
          <button
            type="button"
            onClick={decline}
            className="w-full rounded-full border border-white/20 bg-black/80 py-3 text-sm font-bold text-slate-200 transition hover:border-[var(--accent)]/50 hover:bg-[var(--panel)] sm:w-auto sm:min-w-[160px]"
          >
            I am under 18
          </button>
        </div>

        {underageNotice ? (
          <button
            type="button"
            onClick={leaveSite}
            className="mt-3 w-full text-center text-xs font-semibold text-slate-500 underline-offset-2 hover:text-[var(--accent-bright)] hover:underline"
          >
            Leave this site
          </button>
        ) : null}

        <p className="mt-6 text-center text-[0.65rem] leading-snug text-slate-500">
          If you or someone you know has a gambling problem, seek help from local support services.
        </p>
      </div>
    </div>
  );
}
