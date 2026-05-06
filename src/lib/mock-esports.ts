export type EsportGameId = "cs2" | "valorant" | "dota2" | "lol" | "r6" | "nba2k";

export type EsportGameMeta = {
  id: EsportGameId;
  label: string;
  shortLabel: string;
};

export const esportGames: EsportGameMeta[] = [
  { id: "nba2k", label: "NBA 2K24", shortLabel: "NBA 2K" },
  { id: "cs2", label: "Counter-Strike 2", shortLabel: "CS2" },
  { id: "valorant", label: "Valorant", shortLabel: "VAL" },
  { id: "dota2", label: "Dota 2", shortLabel: "Dota 2" },
  { id: "lol", label: "League of Legends", shortLabel: "LoL" },
  { id: "r6", label: "Rainbow Six", shortLabel: "R6" },
];

export type EsportMatch = {
  id: string;
  gameId: EsportGameId;
  tournament: string;
  startLabel: string;
  teamA: { name: string; score?: number };
  teamB: { name: string; score?: number };
  isLive: boolean;
  mapLabel?: string;
  odd1: string;
  odd2: string;
  expandMarkets?: boolean;
  marketsOnly?: boolean;
};

export const esportMatches: EsportMatch[] = [
  {
    id: "m1",
    gameId: "cs2",
    tournament: "Counter-Strike 2 › EU › Demo League Season 2",
    startLabel: "Live",
    teamA: { name: "Demo North", score: 9 },
    teamB: { name: "Istanbul Stars", score: 7 },
    isLive: true,
    mapLabel: "1st map",
    odd1: "-118",
    odd2: "+102",
    expandMarkets: true,
  },
  {
    id: "m2",
    gameId: "cs2",
    tournament: "Counter-Strike 2 › CCT South America 2026 Series #1",
    startLabel: "Today, 07:30",
    teamA: { name: "Bestia Academy" },
    teamB: { name: "Vasco Esports" },
    isLive: false,
    odd1: "-142",
    odd2: "+118",
    expandMarkets: true,
  },
  {
    id: "m3",
    gameId: "cs2",
    tournament: "Counter-Strike 2 › TR › Anatolia Cup",
    startLabel: "Today, 19:00",
    teamA: { name: "Bosphorus 5" },
    teamB: { name: "Ankara Aces" },
    isLive: false,
    odd1: "+105",
    odd2: "-128",
  },
  {
    id: "m4",
    gameId: "valorant",
    tournament: "Valorant › EMEA › Kickoff Stage",
    startLabel: "Tomorrow, 18:45",
    teamA: { name: "Team Aurora" },
    teamB: { name: "Neon Line" },
    isLive: false,
    odd1: "-110",
    odd2: "-110",
  },
  {
    id: "m5",
    gameId: "dota2",
    tournament: "Dota 2 › WEU › Regional closed qualifier",
    startLabel: "Today, 14:15",
    teamA: { name: "Stack Nine" },
    teamB: { name: "Core Delta" },
    isLive: false,
    odd1: "—",
    odd2: "—",
    marketsOnly: true,
  },
  {
    id: "m6",
    gameId: "lol",
    tournament: "League of Legends › LEC › Winter split",
    startLabel: "Today, 21:00",
    teamA: { name: "Rift Runners" },
    teamB: { name: "Cloud Drakes" },
    isLive: false,
    odd1: "+145",
    odd2: "-185",
    expandMarkets: true,
  },
  {
    id: "m7",
    gameId: "r6",
    tournament: "Rainbow Six › EU › Open bracket",
    startLabel: "Tomorrow, 16:00",
    teamA: { name: "Breach Unit" },
    teamB: { name: "Shieldline" },
    isLive: false,
    odd1: "-105",
    odd2: "-115",
  },
  {
    id: "m8",
    gameId: "nba2k",
    tournament: "NBA 2K24 › Pro-Am › Demo night",
    startLabel: "Today, 22:30",
    teamA: { name: "City Kings" },
    teamB: { name: "Harbor Heat" },
    isLive: false,
    odd1: "-122",
    odd2: "+100",
  },
];

export type EsportLiveFeature = {
  gameId: EsportGameId;
  leagueLine: string;
  streamImageUrl: string;
  teamA: { name: string };
  teamB: { name: string };
  scoreA: number;
  scoreB: number;
};

export const esportLiveFeature: EsportLiveFeature = {
  gameId: "cs2",
  leagueLine: "Counter-Strike 2 — CI | H2H 2×2 (MR8)",
  streamImageUrl:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=75&auto=format&fit=crop",
  teamA: { name: "Phoenix Unit" },
  teamB: { name: "Falcon Crew" },
  scoreA: 0,
  scoreB: 0,
};

export type EsportFeaturedSlide =
  | { id: string; kind: "boost"; title: string; market: string; odd: string }
  | {
      id: string;
      kind: "match";
      league: string;
      time: string;
      team1: string;
      team2: string;
      odd1: string;
      odd2: string;
      imageUrl: string;
    };

export const esportFeaturedSlides: EsportFeaturedSlide[] = [
  {
    id: "f1",
    kind: "boost",
    title: "Constructor pick — demo futures",
    market: "Illustrative outright",
    odd: "+950",
  },
  {
    id: "f2",
    kind: "boost",
    title: "Stage MVP — boosted",
    market: "Playoffs demo",
    odd: "+720",
  },
  {
    id: "f3",
    kind: "match",
    league: "USA — Demo League",
    time: "Tonight 20:00",
    team1: "Metro FC",
    team2: "Riverside SC",
    odd1: "-164",
    odd2: "+132",
    imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=70&auto=format&fit=crop",
  },
  {
    id: "f4",
    kind: "match",
    league: "EU — Demo Cup",
    time: "Tomorrow 18:30",
    team1: "Northline",
    team2: "Southgate",
    odd1: "+110",
    odd2: "-130",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=70&auto=format&fit=crop",
  },
  {
    id: "f5",
    kind: "match",
    league: "KR — Demo Series",
    time: "Today 12:00",
    team1: "Storm LAN",
    team2: "Pixel Five",
    odd1: "-142",
    odd2: "+118",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=70&auto=format&fit=crop",
  },
  {
    id: "f6",
    kind: "match",
    league: "Global — Showmatch",
    time: "Sun 16:00",
    team1: "Alpha Squad",
    team2: "Bravo Crew",
    odd1: "+105",
    odd2: "-125",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=70&auto=format&fit=crop",
  },
  {
    id: "f7",
    kind: "match",
    league: "TR — Anatolia Cup",
    time: "Tonight 22:30",
    team1: "Bosphorus",
    team2: "Capital Esports",
    odd1: "-108",
    odd2: "-108",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=70&auto=format&fit=crop",
  },
  {
    id: "f8",
    kind: "boost",
    title: "Map 1 kills — combo",
    market: "Illustrative special",
    odd: "+340",
  },
];

export type EsportOutright = {
  id: string;
  gameId: EsportGameId;
  title: string;
  odd: string;
};

export const esportOutrights: EsportOutright[] = [
  { id: "o1", gameId: "cs2", title: "Demo League — tournament winner", odd: "+400" },
  { id: "o2", gameId: "cs2", title: "MVP — Stage 1", odd: "+1200" },
  { id: "o3", gameId: "valorant", title: "Kickoff — region champion", odd: "+275" },
  { id: "o4", gameId: "lol", title: "Winter split — first blood leader", odd: "+650" },
];

export function countMatchesForGame(gameId: EsportGameId): number {
  return esportMatches.filter((m) => m.gameId === gameId).length;
}
