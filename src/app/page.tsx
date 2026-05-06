import Link from "next/link";
import { AdultVerificationGate } from "@/components/adult-verification-gate";
import { CasinoSection } from "@/components/casino-section";
import { FeaturesStrip } from "@/components/features-strip";
import { HighlightsRow } from "@/components/highlights-row";
import { HomeHero } from "@/components/home-hero";
import { InfoBlock } from "@/components/info-block";
import { LiveDealersSection } from "@/components/live-dealers-section";
import { LiveMatchesBanner } from "@/components/live-matches-banner";
import { MatchCard, MobileBottomNav, TopHeader } from "@/components/platform-ui";
import { PaymentStrip } from "@/components/payment-strip";
import { PromoBannerCarousel } from "@/components/promo-banner-carousel";
import { SportCategoryRow } from "@/components/sport-category-row";
import { featuredMatches } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="page-doodles pb-20 md:pb-0">
      <AdultVerificationGate />
      <TopHeader />
      <main className="container-shell py-4">
        <HomeHero />
        <LiveMatchesBanner />
        <FeaturesStrip />
        <PaymentStrip />
        <SportCategoryRow />

        <HighlightsRow />

        <div className="mb-3 flex items-end justify-between gap-2">
          <div>
            <h2 className="text-lg font-black uppercase tracking-wide text-white md:text-xl">Featured odds</h2>
            <p className="text-sm text-gray-500">Sharp lines — demo data only</p>
          </div>
          <Link href="/events" className="hidden text-sm font-bold text-[var(--accent)] hover:underline sm:inline">
            View all
          </Link>
        </div>

        <div className="mb-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredMatches.map((match, index) => (
            <MatchCard key={match.id} match={match} staggerIndex={index} />
          ))}
        </div>

        <CasinoSection />
        <PromoBannerCarousel />
        <LiveDealersSection />
        <InfoBlock />
      </main>
      <MobileBottomNav />
    </div>
  );
}
