const FEATURES = [
  {
    title: "30+ sports to bet on",
    body: "The most extensive selection of sports to pick from — pre-match and in-play.",
    icon: (
      <svg className="h-9 w-9 text-[var(--accent)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="14" cy="28" r="6" />
        <path d="M22 12l-4 10M26 22h10M32 8v8" strokeLinecap="round" />
        <circle cx="38" cy="30" r="4" />
      </svg>
    ),
  },
  {
    title: "Amazing bonuses",
    body: "Matching offers, freebets-style promos, and weekly boosts for active accounts.",
    icon: (
      <svg className="h-9 w-9 text-[var(--accent)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="14" width="32" height="24" rx="3" />
        <path d="M16 14v-4a4 4 0 0 1 8 0v4M24 26l-2 4h4l-2 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fastest payouts",
    body: "Straightforward verification and quick withdrawals on supported methods.",
    icon: (
      <svg className="h-9 w-9 text-[var(--accent)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 16v10l6 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10l4 4M38 38l-4-4" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
] as const;

export function FeaturesStrip() {
  return (
    <section className="mb-6 grid md:grid-cols-3 md:divide-x md:divide-[var(--line)]">
      {FEATURES.map((f, i) => (
        <div
          key={f.title}
          className={`feature-card flex gap-4 px-2 py-4 md:flex-col md:px-6 md:py-2 ${i > 0 ? "border-t border-[var(--line)] md:border-t-0" : ""}`}
        >
          <div className="feature-icon-ring flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
            {f.icon}
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide text-white md:text-base">{f.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-500">{f.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
