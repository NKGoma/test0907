import type { Metadata } from "next";
import { TexturePanel } from "@/components/TexturePanel";

export const metadata: Metadata = {
  title: "Wertanlage — Wertstück",
};

const PILLARS = [
  {
    title: "Material vor Trend",
    text: "Wir verwenden ausschließlich pflanzlich gegerbtes Vollnarben-, Nubuk- und Veg-Tan-Leder. Kein synthetisches Finish, keine kurzlebigen Kollektionen — nur Materialien, die mit den Jahren an Charakter gewinnen.",
    tone: ["#a97a4c", "#4a3324"] as [string, string],
  },
  {
    title: "Handwerk statt Massenware",
    text: "Jede Tasche wird in kleinen Werkstätten von Hand genäht, geprüft und signiert. Wir produzieren bewusst in begrenzter Stückzahl, nicht auf Vorrat.",
    tone: ["#2a241c", "#16130f"] as [string, string],
  },
  {
    title: "Reparatur statt Ersatz",
    text: "Jedes Wertstück kommt mit lebenslangem Reparaturservice. Ein Riss, eine gelockerte Naht, ein ausgetauschter Riemen — wir bringen Ihre Tasche zurück, statt eine neue zu verkaufen.",
    tone: ["#9c8552", "#4a3324"] as [string, string],
  },
  {
    title: "Wert, der bleibt",
    text: "Zeitloses Design verliert nicht an Aktualität. Unsere Taschen behalten ihren Wiederverkaufswert, weil sie nie aus der Mode kommen — sie werden nur persönlicher.",
    tone: ["#4a3324", "#2a1c12"] as [string, string],
  },
];

export default function WertanlagePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 lg:px-10">
        <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">Wertanlage</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink text-balance sm:text-5xl">
          Eine Tasche ist eine Entscheidung für Jahrzehnte.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft/80">
          Wir glauben, dass eine Ledertasche kein Verbrauchsgut ist, sondern
          eine Anschaffung — vergleichbar mit einer guten Uhr oder einem
          handgefertigten Möbelstück. Deshalb bauen wir jedes Modell so, dass
          es Ihnen länger gehört als jeder Trend.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <TexturePanel tone={pillar.tone} className="aspect-[16/10] w-full" />
              <div>
                <h2 className="font-display text-2xl text-ink text-balance">{pillar.title}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft/80">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
          <h2 className="mx-auto max-w-xl font-display text-3xl text-balance">
            Kaufen Sie weniger. Wählen Sie besser.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-bone/70">
            Jedes Wertstück wird mit einem Herkunftsnachweis und einer
            Pflegeanleitung ausgeliefert — damit Sie genau wissen, was Sie
            besitzen.
          </p>
        </div>
      </section>
    </div>
  );
}
