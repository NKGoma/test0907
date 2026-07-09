import type { Workshop } from "./types";

export const workshops: Workshop[] = [
  {
    id: "toskana",
    city: "Santa Croce sull'Arno",
    country: "Italien",
    headline: "Gerberei-Tradition seit vier Generationen",
    description:
      "In der Toskana, im Herzen des italienischen Gerberviertels, vollgerben wir unser Vollnarbenleder pflanzlich und lassen es von Hand aufziehen. Kleine Werkstätten, große Sorgfalt.",
    founded: 1962,
    artisans: 14,
    tone: ["#8a6039", "#4a3324"],
  },
  {
    id: "porto",
    city: "Porto",
    country: "Portugal",
    headline: "Nähte, die ein Leben lang halten",
    description:
      "Unsere Näherei in Porto verbindet traditionelles Sattlerhandwerk mit moderner Präzision. Jede Naht wird doppelt geprüft, jede Tasche einzeln signiert von der Person, die sie gefertigt hat.",
    founded: 1978,
    artisans: 22,
    tone: ["#a97a4c", "#2a241c"],
  },
  {
    id: "offenbach",
    city: "Offenbach am Main",
    country: "Deutschland",
    headline: "Zuschnitt und Qualitätskontrolle",
    description:
      "In der traditionsreichen deutschen Lederstadt Offenbach entstehen Zuschnitt, Hardware-Montage und die letzte Qualitätskontrolle, bevor jede Tasche unser Haus verlässt.",
    founded: 2011,
    artisans: 9,
    tone: ["#4a3324", "#16130f"],
  },
  {
    id: "leon",
    city: "León",
    country: "Spanien",
    headline: "Veg-Tan-Leder und Handpolitur",
    description:
      "León ist seit Jahrhunderten für sein pflanzlich gegerbtes Leder bekannt. Hier reift unser Veg-Tan-Leder in offenen Gruben und wird abschließend von Hand poliert.",
    founded: 1995,
    artisans: 11,
    tone: ["#9c8552", "#4a3324"],
  },
];

export function getWorkshop(id: string) {
  return workshops.find((w) => w.id === id);
}
