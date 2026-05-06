export type RacebookBreed = "horse" | "greyhound" | "harness";

export type RacebookRunner = {
  num: number;
  name: string;
  jockey: string;
  trainer: string;
  win: string;
  top2: string;
  place: string;
};

export type RacebookRace = {
  id: string;
  breed: RacebookBreed;
  track: string;
  /** ISO-style region label for UI (no flag graphics). */
  regionCode: string;
  raceNo: string;
  timeLabel: string;
  timeKind: "scheduled" | "countdown";
  runners: RacebookRunner[];
};

export const racebookRaces: RacebookRace[] = [
  {
    id: "r1",
    breed: "horse",
    track: "Demo Park",
    regionCode: "TR",
    raceNo: "R3",
    timeLabel: "Today 10:38",
    timeKind: "scheduled",
    runners: [
      { num: 2, name: "The Spaniard", jockey: "A. Yılmaz", trainer: "M. Kaya", win: "+135", top2: "-182", place: "-333" },
      { num: 5, name: "Kelli Girl", jockey: "E. Demir", trainer: "S. Öz", win: "+210", top2: "-111", place: "-200" },
      { num: 7, name: "North Wind", jockey: "L. Arslan", trainer: "H. Çelik", win: "+450", top2: "+120", place: "-105" },
    ],
  },
  {
    id: "r2",
    breed: "horse",
    track: "Coastal Downs",
    regionCode: "GB",
    raceNo: "R9",
    timeLabel: "1:04",
    timeKind: "countdown",
    runners: [
      { num: 1, name: "Silver Crest", jockey: "J. Smith", trainer: "R. Lane", win: "+180", top2: "-150", place: "-275" },
      { num: 4, name: "Midnight Run", jockey: "P. Cole", trainer: "D. West", win: "+220", top2: "-130", place: "-190" },
      { num: 8, name: "Blue Horizon", jockey: "T. Reed", trainer: "K. Moss", win: "+310", top2: "+105", place: "-140" },
    ],
  },
  {
    id: "r3",
    breed: "horse",
    track: "Highland Turf",
    regionCode: "IE",
    raceNo: "R5",
    timeLabel: "Today 14:12",
    timeKind: "scheduled",
    runners: [
      { num: 3, name: "River Song", jockey: "N. Burke", trainer: "F. O'Neil", win: "+165", top2: "-175", place: "-310" },
      { num: 6, name: "Castle Rock", jockey: "B. Hayes", trainer: "G. Finn", win: "+275", top2: "-118", place: "-165" },
    ],
  },
  {
    id: "r4",
    breed: "greyhound",
    track: "Swift Oval",
    regionCode: "AU",
    raceNo: "R2",
    timeLabel: "0:42",
    timeKind: "countdown",
    runners: [
      { num: 1, name: "Bolt Lane", jockey: "—", trainer: "Trainer A", win: "+140", top2: "-160", place: "-290" },
      { num: 3, name: "Red Comet", jockey: "—", trainer: "Trainer B", win: "+195", top2: "-125", place: "-210" },
    ],
  },
  {
    id: "r4b",
    breed: "greyhound",
    track: "Metro Sprint",
    regionCode: "NZ",
    raceNo: "R6",
    timeLabel: "Today 11:20",
    timeKind: "scheduled",
    runners: [
      { num: 2, name: "Flash Wire", jockey: "—", trainer: "Trainer C", win: "+155", top2: "-170", place: "-300" },
    ],
  },
  {
    id: "r5",
    breed: "harness",
    track: "Pace Arena",
    regionCode: "US",
    raceNo: "R7",
    timeLabel: "Tomorrow 18:00",
    timeKind: "scheduled",
    runners: [
      { num: 2, name: "Trot King", jockey: "Driver X", trainer: "Stable Y", win: "+125", top2: "-190", place: "-340" },
      { num: 5, name: "Lane Star", jockey: "Driver Z", trainer: "Stable W", win: "+240", top2: "-115", place: "-185" },
    ],
  },
];
