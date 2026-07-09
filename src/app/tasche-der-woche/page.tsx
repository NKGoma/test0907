import type { Metadata } from "next";
import { Leaderboard } from "@/components/Leaderboard";
import { getProduct } from "@/lib/products";
import { weeklyCandidateSlugs, weekLabel } from "@/lib/weekly-candidates";

export const metadata: Metadata = {
  title: "Tasche der Woche — Wertstück",
};

const candidates = weeklyCandidateSlugs
  .map((slug) => getProduct(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function TascheDerWochePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
      <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">
        Tasche der Woche · {weekLabel}
      </p>
      <h1 className="mt-4 max-w-xl font-display text-4xl text-ink text-balance">
        Welche Tasche verdient diese Woche die Bühne?
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft/80">
        Jede Woche nominieren wir fünf Modelle aus der Kollektion. Stimmen Sie
        für Ihren Favoriten — einmal pro Woche und Browser.
      </p>

      <div className="mt-16">
        <Leaderboard candidates={candidates} />
      </div>
    </div>
  );
}
