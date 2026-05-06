export type MatchItem = {
  id: string;
  league: string;
  time: string;
  home: string;
  away: string;
  odds: [number, number, number];
  live?: boolean;
  /** Royalty-free sports imagery (Unsplash) */
  imageUrl: string;
};

export type BetItem = {
  id: string;
  date: string;
  selection: string;
  odd: number;
  stake: number;
  potentialWin: number;
  status: "Pending" | "Won" | "Lost";
};

export const featuredMatches: MatchItem[] = [
  {
    id: "m1",
    league: "Super Lig",
    time: "19:00",
    home: "Galatasaray",
    away: "Besiktas",
    odds: [1.95, 3.2, 3.6],
    live: true,
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m2",
    league: "Super Lig",
    time: "21:30",
    home: "Fenerbahce",
    away: "Trabzonspor",
    odds: [1.7, 3.5, 4.4],
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m3",
    league: "1. Lig",
    time: "18:30",
    home: "Eyupspor",
    away: "Goztepe",
    odds: [2.25, 3.0, 2.95],
    imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m4",
    league: "Premier League",
    time: "20:00",
    home: "Arsenal",
    away: "Tottenham",
    odds: [2.1, 3.35, 3.1],
    imageUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m5",
    league: "La Liga",
    time: "22:15",
    home: "Valencia",
    away: "Sevilla",
    odds: [2.05, 3.15, 3.45],
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m6",
    league: "Serie A",
    time: "20:45",
    home: "Napoli",
    away: "Lazio",
    odds: [1.88, 3.4, 3.9],
    live: true,
    imageUrl: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m7",
    league: "Bundesliga",
    time: "17:30",
    home: "Dortmund",
    away: "Leipzig",
    odds: [2.35, 3.25, 2.85],
    imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m8",
    league: "NBA",
    time: "03:00",
    home: "Lakers",
    away: "Celtics",
    odds: [2.55, 1.95, 2.1],
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m9",
    league: "NHL",
    time: "01:00",
    home: "Rangers",
    away: "Devils",
    odds: [1.72, 4.1, 3.8],
    imageUrl: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m10",
    league: "Tennis • ATP",
    time: "16:00",
    home: "Sinner",
    away: "Medvedev",
    odds: [1.65, 3.8, 4.5],
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m11",
    league: "UFC",
    time: "23:00",
    home: "Fighter A",
    away: "Fighter B",
    odds: [1.9, 3.5, 3.2],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=75&auto=format&fit=crop",
  },
  {
    id: "m12",
    league: "Esports • Demo",
    time: "19:30",
    home: "Team North",
    away: "Team South",
    odds: [1.75, 3.1, 4.2],
    live: true,
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=75&auto=format&fit=crop",
  },
];

export const myBets: BetItem[] = [
  { id: "b1", date: "2026-05-06 18:02", selection: "Galatasaray Win", odd: 1.95, stake: 500, potentialWin: 975, status: "Pending" },
  { id: "b2", date: "2026-05-05 22:41", selection: "Fenerbahce Win", odd: 1.72, stake: 1000, potentialWin: 1720, status: "Won" },
  { id: "b3", date: "2026-05-05 20:30", selection: "Besiktas +1.5", odd: 1.61, stake: 300, potentialWin: 483, status: "Lost" },
];
