"use client";

export function ChatFab() {
  return (
    <button
      type="button"
      className="fixed bottom-24 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-orange)] text-white shadow-lg shadow-black/40 transition hover:brightness-110 md:bottom-8"
      aria-label="Open chat"
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
      </svg>
    </button>
  );
}
