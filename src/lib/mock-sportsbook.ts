export type HighlightCard = {
  id: string;
  title: string;
  market: string;
  when: string;
  oddA: string;
  oddB: string;
  imageUrl: string;
};

export type GridMatch = {
  id: string;
  league: string;
  time: string;
  home: string;
  away: string;
  homeColor: string;
  awayColor: string;
  market: string;
  odd1: string;
  odd2: string;
  live?: boolean;
};

export const highlightCards: HighlightCard[] = [
  {
    id: "h1",
    title: "Sabalenka, Aryna",
    market: "Winner",
    when: "Today · 18:00",
    oddA: "+250",
    oddB: "+268",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h2",
    title: "New York Liberty",
    market: "Spread",
    when: "Today · 21:30",
    oddA: "-110",
    oddB: "-108",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h3",
    title: "Bayern München",
    market: "Winner",
    when: "Tomorrow · 20:00",
    oddA: "-145",
    oddB: "+380",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h4",
    title: "CA Rosario Central",
    market: "Moneyline",
    when: "Sat · 22:00",
    oddA: "-278",
    oddB: "+740",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h5",
    title: "Champions League final",
    market: "Both score",
    when: "Sat · 21:00",
    oddA: "+115",
    oddB: "-135",
    imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h6",
    title: "Formula 1 sprint",
    market: "Podium",
    when: "Sun · 14:00",
    oddA: "+220",
    oddB: "+195",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h7",
    title: "Wimbledon — men's",
    market: "Set betting",
    when: "Mon · 15:30",
    oddA: "-125",
    oddB: "+108",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=75&auto=format&fit=crop",
  },
  {
    id: "h8",
    title: "NHL Stanley Cup",
    market: "Puck line",
    when: "Tonight · 02:00",
    oddA: "+102",
    oddB: "-118",
    imageUrl: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=600&q=75&auto=format&fit=crop",
  },
];

export const popularMatches: GridMatch[] = [
  {
    id: "g1",
    league: "USA · NBA",
    time: "Today, 20:00",
    home: "Detroit Pistons",
    away: "Cleveland Cavaliers",
    homeColor: "#1d4ed8",
    awayColor: "#b91c1c",
    market: "Winner (incl. overtime)",
    odd1: "-161",
    odd2: "+130",
  },
  {
    id: "g2",
    league: "China · CBA",
    time: "Today, 14:00",
    home: "Liaoning Flying",
    away: "Guangdong Southern",
    homeColor: "#ea580c",
    awayColor: "#16a34a",
    market: "Winner (incl. overtime)",
    odd1: "-195",
    odd2: "+158",
  },
  {
    id: "g3",
    league: "Turkey · Super Lig",
    time: "Tomorrow, 19:00",
    home: "Galatasaray SK",
    away: "Beşiktaş JK",
    homeColor: "#facc15",
    awayColor: "#000000",
    market: "Winner",
    odd1: "-120",
    odd2: "+310",
  },
  {
    id: "g4",
    league: "Copa Libertadores · CONMEBOL",
    time: "Live · Q2",
    home: "Team North",
    away: "Team South",
    homeColor: "#6366f1",
    awayColor: "#ec4899",
    market: "Handicap (incl. OT)",
    odd1: "+210",
    odd2: "-109",
    live: true,
  },
  {
    id: "g5",
    league: "USA · UFL",
    time: "May 9, 09:00",
    home: "Green Bay Packers (E)",
    away: "Minnesota Vikings (E)",
    homeColor: "#15803d",
    awayColor: "#7c3aed",
    market: "Winner (incl. overtime)",
    odd1: "-167",
    odd2: "+116",
  },
  {
    id: "g6",
    league: "eAmerican Football · NFC North",
    time: "Today, 06:46",
    home: "Chicago Bears (E)",
    away: "Detroit Lions (E)",
    homeColor: "#0369a1",
    awayColor: "#ca8a04",
    market: "Winner (incl. overtime)",
    odd1: "+142",
    odd2: "-118",
  },
  {
    id: "g7",
    league: "Senegal · Division 1",
    time: "Live · 14' 2nd",
    home: "ASC Jaraaf",
    away: "Génération Foot",
    homeColor: "#0d9488",
    awayColor: "#dc2626",
    market: "Winner",
    odd1: "+105",
    odd2: "+118",
    live: true,
  },
  {
    id: "g8",
    league: "France · Roland Garros",
    time: "Today, 16:00",
    home: "Sinner, Jannik",
    away: "Alcaraz, Carlos",
    homeColor: "#22c55e",
    awayColor: "#eab308",
    market: "Match winner",
    odd1: "-102",
    odd2: "+112",
  },
];
