import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "erbstueck-tote",
    name: "Erbstück Tote",
    category: "Tote",
    leather: "Vollnarbenleder",
    colorway: "Cognac",
    price: 640,
    workshopId: "toskana",
    description:
      "Der klare Schnitt und das dichte Vollnarbenleder machen die Erbstück Tote zur Konstante im Alltag – gedacht, um Jahrzehnte zu überdauern, nicht Saisons.",
    details: [
      "Pflanzlich gegerbtes Vollnarbenleder aus der Toskana",
      "Handgenähte Kanten, massives Messing-Beschlag",
      "Innentasche aus Bio-Baumwollcanvas",
      "Maße: 38 × 30 × 14 cm",
    ],
    tone: ["#a97a4c", "#4a3324"],
  },
  {
    slug: "kontor-rucksack",
    name: "Kontor Rucksack",
    category: "Rucksack",
    leather: "Nubukleder",
    colorway: "Anthrazit",
    price: 780,
    workshopId: "offenbach",
    description:
      "Reduziert auf das Wesentliche: Der Kontor Rucksack trägt Laptop, Aktenordner und Wasserflasche in klar getrennten Fächern, ohne an Silhouette zu verlieren.",
    details: [
      "Genarbtes Nubukleder, wasserabweisend imprägniert",
      "Gepolstertes Laptopfach bis 16 Zoll",
      "Verstellbare Lederriemen mit Aluminiumschnallen",
      "Maße: 44 × 30 × 13 cm",
    ],
    tone: ["#2a241c", "#16130f"],
  },
  {
    slug: "meridian-umhaengetasche",
    name: "Meridian Umhängetasche",
    category: "Umhängetasche",
    leather: "Veg-Tan-Leder",
    colorway: "Walnuss",
    price: 480,
    workshopId: "leon",
    description:
      "Die Meridian begleitet einen langen Tag mit kurzer Klappe, verstellbarem Riemen und einer Patina, die mit jedem Jahr wächst.",
    details: [
      "Vegetabil gegerbtes Leder aus León",
      "Verstellbarer, abnehmbarer Schulterriemen",
      "Magnetverschluss, ein Hauptfach, zwei Steckfächer",
      "Maße: 27 × 21 × 9 cm",
    ],
    tone: ["#9c8552", "#4a3324"],
  },
  {
    slug: "atelier-weekender",
    name: "Atelier Weekender",
    category: "Weekender",
    leather: "Vollnarbenleder",
    colorway: "Espresso",
    price: 940,
    workshopId: "toskana",
    description:
      "Für die kurze Reise gebaut: Der Atelier Weekender fasst zwei Tage Gepäck, ohne seine Form zu verlieren, und wird mit jedem Flug charaktervoller.",
    details: [
      "Vollnarbenleder, Riegelverschluss aus Messing",
      "Herausnehmbares Schuhfach, Nassfach",
      "Verstärkter Boden, verstellbarer Tragegurt",
      "Maße: 52 × 28 × 24 cm",
    ],
    tone: ["#4a3324", "#2a241c"],
  },
  {
    slug: "praesenz-aktentasche",
    name: "Präsenz Aktentasche",
    category: "Aktentasche",
    leather: "Vollnarbenleder",
    colorway: "Schwarz",
    price: 820,
    workshopId: "offenbach",
    description:
      "Streng geschnitten, ruhig in der Ausstrahlung – die Präsenz ist für Menschen gemacht, die morgens keine Zeit für Entscheidungen verlieren wollen.",
    details: [
      "Vollnarbenleder mit mattem Finish",
      "Organisationsfach für Dokumente und Tablet",
      "Verdeckte Reißverschlüsse aus Messing",
      "Maße: 40 × 29 × 9 cm",
    ],
    tone: ["#16130f", "#2a241c"],
  },
  {
    slug: "ufer-tote",
    name: "Ufer Tote",
    category: "Tote",
    leather: "Nubukleder",
    colorway: "Sand",
    price: 560,
    workshopId: "porto",
    description:
      "Die Ufer Tote ist die leichtere Schwester der Erbstück Tote: weicheres Leder, offene Silhouette, für Tage, die weniger Struktur brauchen.",
    details: [
      "Weiches Nubukleder aus Porto",
      "Doppelte Henkel, verstärkte Nähte",
      "Herausnehmbarer Innenbeutel",
      "Maße: 40 × 32 × 12 cm",
    ],
    tone: ["#e4d5bd", "#a97a4c"],
  },
  {
    slug: "kurier-umhaengetasche",
    name: "Kurier Umhängetasche",
    category: "Umhängetasche",
    leather: "Vollnarbenleder",
    colorway: "Kastanie",
    price: 520,
    workshopId: "porto",
    description:
      "Breiter Riemen, tiefe Klappe, ruhiger Auftritt: Die Kurier Umhängetasche ist für den täglichen Weg ins Büro gemacht.",
    details: [
      "Vollnarbenleder, handgenähte Riemenkanten",
      "Gepolstertes Fach für 14-Zoll-Laptop",
      "Verstellbarer Riemen mit Kastenschnalle",
      "Maße: 34 × 26 × 10 cm",
    ],
    tone: ["#8a6039", "#16130f"],
  },
  {
    slug: "rucksack-mono",
    name: "Mono Rucksack",
    category: "Rucksack",
    leather: "Veg-Tan-Leder",
    colorway: "Cognac",
    price: 690,
    workshopId: "leon",
    description:
      "Ein Volumen, eine Klappe, eine Farbe: Der Mono Rucksack ist die reduzierteste Form in unserer Kollektion und altert am sichtbarsten.",
    details: [
      "Vegetabil gegerbtes Leder aus León",
      "Rollverschluss, ein durchgehendes Hauptfach",
      "Handpolierte Beschläge",
      "Maße: 30 × 42 × 14 cm",
    ],
    tone: ["#a97a4c", "#9c8552"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
