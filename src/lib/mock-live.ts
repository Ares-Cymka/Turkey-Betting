export type LiveMatch = {
  id: string;
  league: string;
  statusLine: string;
  isLive: boolean;
  ended?: boolean;
  home: { name: string; score?: number; abbr: string; jersey: string };
  away: { name: string; score?: number; abbr: string; jersey: string };
  market: string;
  odds: [string, string];
  /** Hero art for card header */
  imageUrl: string;
};

export const liveMatches: LiveMatch[] = [
  {
    id: "l1",
    league: "Senegal • Division 1",
    statusLine: "14' 2nd quarter",
    isLive: true,
    home: { name: "ASC Jaraaf", score: 42, abbr: "JAR", jersey: "#22c55e" },
    away: { name: "US Ouakam", score: 38, abbr: "OUA", jersey: "#3b82f6" },
    market: "Winner (incl. overtime)",
    odds: ["+210", "+168"],
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l2",
    league: "eBasketball • FIBA Europe",
    statusLine: "Ended",
    isLive: false,
    ended: true,
    home: { name: "Euro Stars (E)", score: 71, abbr: "EST", jersey: "#eab308" },
    away: { name: "Balkan Elite (E)", score: 68, abbr: "BEL", jersey: "#a855f7" },
    market: "Handicap (incl. overtime)",
    odds: ["-122", "+102"],
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l3",
    league: "USA • NBA",
    statusLine: "Today, 08:00",
    isLive: false,
    home: { name: "Detroit Pistons", abbr: "DET", jersey: "#0ea5e9" },
    away: { name: "Cleveland Cavaliers", abbr: "CLE", jersey: "#b91c1c" },
    market: "Winner (incl. overtime)",
    odds: ["-161", "+130"],
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l4",
    league: "eAmerican Football • NFC North (4x2 min)",
    statusLine: "Today, 06:46",
    isLive: true,
    home: { name: "Green Bay (E)", score: 14, abbr: "GB", jersey: "#15803d" },
    away: { name: "Minnesota (E)", score: 10, abbr: "MIN", jersey: "#7c3aed" },
    market: "Winner (incl. overtime)",
    odds: ["-167", "+116"],
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l5",
    league: "USA • UFL",
    statusLine: "May 9, 09:00",
    isLive: false,
    home: { name: "Birmingham Stallions", abbr: "BIR", jersey: "#dc2626" },
    away: { name: "Arlington Renegades", abbr: "ARL", jersey: "#2563eb" },
    market: "Winner (incl. overtime)",
    odds: ["-108", "-102"],
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l6",
    league: "International • Tennis",
    statusLine: "Set 2 • 3-2",
    isLive: true,
    home: { name: "Player A", score: 6, abbr: "A", jersey: "#f97316" },
    away: { name: "Player B", score: 4, abbr: "B", jersey: "#06b6d4" },
    market: "Match winner",
    odds: ["-145", "+118"],
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l7",
    league: "Turkey • Super Lig",
    statusLine: "Live • 67'",
    isLive: true,
    home: { name: "Galatasaray SK", score: 2, abbr: "GAL", jersey: "#facc15" },
    away: { name: "Besiktas JK", score: 1, abbr: "BJK", jersey: "#000000" },
    market: "Match result",
    odds: ["-105", "+280"],
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l8",
    league: "England • Premier League",
    statusLine: "Tomorrow, 17:30",
    isLive: false,
    home: { name: "North City", abbr: "NCT", jersey: "#1e40af" },
    away: { name: "South United", abbr: "STU", jersey: "#b45309" },
    market: "1X2",
    odds: ["+145", "+185"],
    imageUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l9",
    league: "Spain • La Liga",
    statusLine: "Today, 22:00",
    isLive: false,
    home: { name: "Coastal CF", abbr: "CCF", jersey: "#0d9488" },
    away: { name: "Capital FC", abbr: "CAP", jersey: "#be123c" },
    market: "Winner",
    odds: ["-133", "+340"],
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l10",
    league: "Italy • Serie A",
    statusLine: "Live • HT",
    isLive: true,
    home: { name: "Roma North", score: 0, abbr: "RMN", jersey: "#991b1b" },
    away: { name: "Milan South", score: 0, abbr: "MLS", jersey: "#1d4ed8" },
    market: "Next goal",
    odds: ["+120", "+110"],
    imageUrl: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l11",
    league: "Germany • Bundesliga",
    statusLine: "Sat, 15:30",
    isLive: false,
    home: { name: "Rhine Athletic", abbr: "RHA", jersey: "#ca8a04" },
    away: { name: "Bavaria City", abbr: "BVC", jersey: "#dc2626" },
    market: "Double chance",
    odds: ["-210", "+165"],
    imageUrl:
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "l12",
    league: "Esports • Demo League",
    statusLine: "Map 2 • 12-9",
    isLive: true,
    home: { name: "Team Aurora", score: 1, abbr: "AUR", jersey: "#8b5cf6" },
    away: { name: "Team Nova", score: 0, abbr: "NOV", jersey: "#ec4899" },
    market: "Map winner",
    odds: ["-118", "-102"],
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=75&auto=format&fit=crop",
  },
];

export type BoostedPick = {
  id: string;
  title: string;
  market: string;
  date: string;
  odds: string;
  oddsBoosted: string;
  imageUrl: string;
};

export const boostedPicks: BoostedPick[] = [
  {
    id: "b1",
    title: "Sabalenka, Aryna",
    market: "Winner",
    date: "May 18, 21:00",
    odds: "+250",
    oddsBoosted: "+268",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b2",
    title: "Alcaraz vs Sinner",
    market: "Set handicap",
    date: "May 19, 19:30",
    odds: "-110",
    oddsBoosted: "+102",
    imageUrl:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b3",
    title: "Lakers ML",
    market: "Moneyline",
    date: "Today, 22:00",
    odds: "+140",
    oddsBoosted: "+155",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b4",
    title: "Bayern vs Dortmund",
    market: "Both teams score",
    date: "Tomorrow, 18:30",
    odds: "-105",
    oddsBoosted: "+100",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b5",
    title: "Chiefs spread",
    market: "-3.5",
    date: "Sun, 20:00",
    odds: "-115",
    oddsBoosted: "+105",
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b6",
    title: "F1 Constructor",
    market: "Podium finish",
    date: "Next race",
    odds: "+180",
    oddsBoosted: "+195",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b7",
    title: "Istanbul Derby",
    market: "Over 2.5 goals",
    date: "Today, 19:00",
    odds: "+108",
    oddsBoosted: "+118",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b8",
    title: "NHL totals",
    market: "Over 5.5",
    date: "Tonight, 02:00",
    odds: "-108",
    oddsBoosted: "+102",
    imageUrl: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b9",
    title: "UFC main event",
    market: "Winner",
    date: "Sat, 23:00",
    odds: "-142",
    oddsBoosted: "+128",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "b10",
    title: "MLB run line",
    market: "-1.5",
    date: "Tonight, 01:10",
    odds: "+120",
    oddsBoosted: "+135",
    imageUrl: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=600&q=75&auto=format&fit=crop",
  },
];
