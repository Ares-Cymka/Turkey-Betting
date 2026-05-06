import { FilterChips } from "@/components/filter-chips";
import { HighlightsRow } from "@/components/highlights-row";
import { MatchCard, MobileBottomNav, TopHeader } from "@/components/platform-ui";
import { SportsSubnav } from "@/components/sports-subnav";
import { featuredMatches } from "@/lib/mock-data";

export default function EventsPage() {
  return (
    <div className="page-doodles pb-20 md:pb-0">
      <TopHeader />
      <SportsSubnav />
      <main className="container-shell py-4">
        <section className="panel mb-3 p-4">
          <h1 className="text-xl font-black text-slate-100">Sportsbook</h1>
          <p className="text-sm text-[var(--muted)]">Live and upcoming events — filter by league</p>
          <FilterChips items={["All", "Live", "Super Lig", "1. Lig", "Premier League"]} />
        </section>
        <HighlightsRow />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {featuredMatches.map((match, idx) => (
            <MatchCard key={match.id} match={match} staggerIndex={idx} />
          ))}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
