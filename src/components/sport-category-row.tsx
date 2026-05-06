import Link from "next/link";

const CATS = [
  { code: "NFL", label: "Pro Football", href: "/events" },
  { code: "NBA", label: "Basketball", href: "/events" },
  { code: "MLB", label: "Baseball", href: "/events" },
  { code: "NHL", label: "Hockey", href: "/events" },
  { code: "UFC", label: "Combat", href: "/events" },
  { code: "Esports", label: "Esports", href: "/esports" },
] as const;

function CategoryIcon({ code }: { code: string }) {
  const common = "h-10 w-10 text-[var(--accent)] md:h-12 md:w-12";
  switch (code) {
    case "NFL":
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
          <ellipse cx="24" cy="28" rx="14" ry="10" stroke="currentColor" strokeWidth="2" />
          <path d="M18 18l4-6h8l4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "NBA":
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <path d="M10 24h28M24 10c-4 8-4 20 0 28M24 10c4 8 4 20 0 28" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "MLB":
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
          <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
          <path d="M14 30c8-4 12-4 20 0M18 18l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "NHL":
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
          <ellipse cx="24" cy="24" rx="16" ry="8" stroke="currentColor" strokeWidth="2" />
          <path d="M12 24h24" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "UFC":
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
          <path d="M18 32c0-8 4-14 12-14s12 6 12 14" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="28" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
          <rect x="10" y="18" width="28" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M16 14v4M32 14v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function SportCategoryRow() {
  return (
    <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {CATS.map((c) => (
        <Link
          key={c.code}
          href={c.href}
          className="sport-cat-card flex flex-col items-center gap-2 px-3 py-5 text-center"
        >
          <CategoryIcon code={c.code} />
          <span className="text-lg font-black text-[var(--accent-bright)]">{c.code}</span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-gray-400">{c.label}</span>
        </Link>
      ))}
    </section>
  );
}
