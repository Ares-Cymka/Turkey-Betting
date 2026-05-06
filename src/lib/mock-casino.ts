export type CasinoGame = {
  id: string;
  title: string;
  image: string;
};

/** Featured strip — demo art only */
export const popularCasinoGames: CasinoGame[] = [
  { id: "p1", title: "Max Catch Bay", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80&auto=format&fit=crop" },
  { id: "p2", title: "Jester Nights", image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&q=80&auto=format&fit=crop" },
  { id: "p3", title: "Gold Rush Dig", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80&auto=format&fit=crop" },
  { id: "p4", title: "Jungle King", image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&q=80&auto=format&fit=crop" },
  { id: "p5", title: "Buffalo Thunder", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80&auto=format&fit=crop" },
  { id: "p6", title: "Gold Express", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80&auto=format&fit=crop" },
  { id: "p7", title: "Crystal Mine", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&q=80&auto=format&fit=crop" },
  { id: "p8", title: "Desert Bloom", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80&auto=format&fit=crop" },
  { id: "p9", title: "Arctic Loot", image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=400&q=80&auto=format&fit=crop" },
  { id: "p10", title: "Samurai Spin", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80&auto=format&fit=crop" },
];

const IMG = [
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80",
];

const TITLES = [
  "Empire Blades",
  "Carnival Rush",
  "Hold n Spark",
  "Bubble Bloom",
  "Nile After Dark",
  "Bamboo Luck",
  "Storm of Olympus",
  "Pharaoh Duel",
  "XO Galaxy",
  "Ancient Scrolls",
  "Frost Crown",
  "Stallion Year",
  "Viking Hoard",
  "Copper Rattle",
  "Neon Safari",
  "Solar Relic",
  "Midnight Manor",
  "Turbo Vault",
  "Star Nomad",
  "Woodland Fortune",
  "Desert Paws",
  "Circuit Win",
  "Seer Gold",
  "Lucky Piggy",
];

function buildGrid(): CasinoGame[] {
  return TITLES.map((title, i) => ({
    id: `g${i + 1}`,
    title,
    image: IMG[i % IMG.length],
  }));
}

export const casinoGameGrid: CasinoGame[] = buildGrid();
