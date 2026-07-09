export type ModelOption = {
  id: string;
  label: string;
  description: string;
  basePrice: number;
};

export type LeatherOption = {
  id: string;
  label: string;
  description: string;
  delta: number;
};

export type ColorOption = {
  id: string;
  label: string;
  hex: string;
  hexDark: string;
};

export type HardwareOption = {
  id: string;
  label: string;
  delta: number;
  hex: string;
};

export const MODELS: ModelOption[] = [
  { id: "tote", label: "Tote", description: "Offen, geräumig, für den Alltag.", basePrice: 560 },
  { id: "rucksack", label: "Rucksack", description: "Beidhändig frei, klar strukturiert.", basePrice: 620 },
  { id: "umhaenge", label: "Umhängetasche", description: "Kompakt, quer getragen.", basePrice: 480 },
];

export const LEATHERS: LeatherOption[] = [
  { id: "vollnarben", label: "Vollnarbenleder", description: "Dicht, robust, entwickelt Patina.", delta: 80 },
  { id: "nubuk", label: "Nubukleder", description: "Samtig matt, weicher Griff.", delta: 40 },
  { id: "vegtan", label: "Veg-Tan-Leder", description: "Pflanzlich gegerbt, hell im Neuzustand.", delta: 60 },
];

export const COLORS: ColorOption[] = [
  { id: "cognac", label: "Cognac", hex: "#a97a4c", hexDark: "#8a6039" },
  { id: "walnuss", label: "Walnuss", hex: "#4a3324", hexDark: "#2a1c12" },
  { id: "schwarz", label: "Schwarz", hex: "#221d18", hexDark: "#0d0b09" },
  { id: "sand", label: "Sand", hex: "#e4d5bd", hexDark: "#cbb790" },
];

export const HARDWARE: HardwareOption[] = [
  { id: "messing", label: "Messing", delta: 0, hex: "#9c8552" },
  { id: "silber", label: "Silber", delta: 20, hex: "#b8bcc2" },
  { id: "anthrazit", label: "Anthrazit", delta: 20, hex: "#3a3a3a" },
];

export const MONOGRAM_PRICE = 45;

export function calculatePrice(input: {
  modelId: string;
  leatherId: string;
  hardwareId: string;
  monogram: string;
}) {
  const model = MODELS.find((m) => m.id === input.modelId) ?? MODELS[0];
  const leather = LEATHERS.find((l) => l.id === input.leatherId) ?? LEATHERS[0];
  const hardware = HARDWARE.find((h) => h.id === input.hardwareId) ?? HARDWARE[0];
  const monogramFee = input.monogram.trim() ? MONOGRAM_PRICE : 0;
  return model.basePrice + leather.delta + hardware.delta + monogramFee;
}
