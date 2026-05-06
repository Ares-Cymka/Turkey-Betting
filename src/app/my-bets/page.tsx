import { MyBetsHero } from "@/components/my-bets-hero";
import { BetHistoryCard, MobileBottomNav, TopHeader } from "@/components/platform-ui";
import { myBets } from "@/lib/mock-data";

export default function MyBetsPage() {
  return (
    <div className="page-doodles pb-20 md:pb-0">
      <TopHeader />
      <main className="container-shell py-4">
        <MyBetsHero />
        <div className="space-y-3">
          {myBets.map((bet, index) => (
            <div
              key={bet.id}
              className="match-card-enter"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <BetHistoryCard bet={bet} />
            </div>
          ))}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
