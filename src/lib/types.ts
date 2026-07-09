export type WorkshopId =
  | "toskana"
  | "porto"
  | "offenbach"
  | "leon";

export type Workshop = {
  id: WorkshopId;
  city: string;
  country: string;
  headline: string;
  description: string;
  founded: number;
  artisans: number;
  tone: [string, string];
};

export type LeatherType = "Vollnarbenleder" | "Nubukleder" | "Veg-Tan-Leder";

export type Product = {
  slug: string;
  name: string;
  category: "Tote" | "Rucksack" | "Umhängetasche" | "Weekender" | "Aktentasche";
  leather: LeatherType;
  colorway: string;
  price: number;
  workshopId: WorkshopId;
  description: string;
  details: string[];
  tone: [string, string];
};

export type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  tone: [string, string];
};
