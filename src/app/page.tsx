import Link from "next/link";
import { TexturePanel } from "@/components/TexturePanel";
import { ProductCard } from "@/components/ProductCard";
import { products, getProduct } from "@/lib/products";
import { workshops } from "@/lib/workshops";
import { weeklyCandidateSlugs, weekLabel } from "@/lib/weekly-candidates";

const featured = products.slice(0, 3);
const weeklyPick = getProduct(weeklyCandidateSlugs[0]);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <TexturePanel
          tone={["#4a3324", "#16130f"]}
          pattern="radial"
          align="center"
          className="h-[88vh] min-h-[560px] w-full"
        >
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
            <p className="text-xs tracking-[0.3em] text-bone/70 uppercase">
              Ledertaschen als Wertanlage
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] text-bone text-balance sm:text-6xl lg:text-7xl">
              Zeitlos geschnitten.
              <br />
              <span className="italic">Für Jahrzehnte</span> gemacht.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/70">
              Jede Tasche entsteht aus pflanzlich gegerbtem Leder in vier
              europäischen Werkstätten – entworfen, um zu bleiben, nicht um zu
              vergehen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/kollektion"
                className="bg-bone px-7 py-3 text-sm tracking-wide text-ink transition hover:bg-sand"
              >
                Kollektion entdecken
              </Link>
              <Link
                href="/konfigurator"
                className="border border-bone/40 px-7 py-3 text-sm tracking-wide text-bone transition hover:border-bone"
              >
                Eigene Tasche konfigurieren
              </Link>
            </div>
          </div>
        </TexturePanel>
      </section>

      {/* Wertanlage philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">
              Unsere Haltung
            </p>
            <h2 className="mt-4 font-display text-3xl text-ink text-balance">
              Eine Tasche als Wertanlage.
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                title: "Material",
                text: "Vollnarben- und Veg-Tan-Leder, das mit Gebrauch schöner wird statt schlechter.",
              },
              {
                title: "Handwerk",
                text: "Handgenähte Kanten, massive Beschläge, geprüft von den Menschen, die sie fertigen.",
              },
              {
                title: "Langlebigkeit",
                text: "Reparierbar statt wegwerfbar – mit Reparaturservice über die gesamte Lebensdauer.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/wertanlage"
          className="mt-12 inline-block border-b border-ink pb-1 text-sm tracking-wide text-ink"
        >
          Mehr über unsere Wertanlage-Philosophie →
        </Link>
      </section>

      {/* Bag of the week teaser */}
      {weeklyPick && (
        <section className="border-y border-line bg-sand/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
            <TexturePanel
              tone={weeklyPick.tone}
              pattern="stitch"
              className="aspect-[4/5] w-full"
              label={weekLabel}
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">
                Tasche der Woche · {weekLabel}
              </p>
              <h2 className="mt-4 font-display text-3xl text-ink text-balance">
                {weeklyPick.name} ist nominiert
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft/80">
                Jede Woche stellen wir fünf Taschen zur Wahl. Stimmen Sie ab und
                sehen Sie live, welche Tasche gerade führt.
              </p>
              <Link
                href="/tasche-der-woche"
                className="mt-8 inline-block w-fit bg-ink px-7 py-3 text-sm tracking-wide text-bone transition hover:bg-ink-soft"
              >
                Jetzt abstimmen
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured collection */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">
              Auswahl
            </p>
            <h2 className="mt-4 font-display text-3xl text-ink">
              Aus der Kollektion
            </h2>
          </div>
          <Link href="/kollektion" className="hidden text-sm tracking-wide text-ink sm:block">
            Alle ansehen →
          </Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Production transparency teaser */}
      <section className="bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-xs tracking-[0.3em] text-bone/50 uppercase">
            Transparenz
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl text-balance">
            Wir zeigen, wo jede Tasche entsteht.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workshops.map((w) => (
              <div key={w.id} className="border-t border-line-inverse pt-5">
                <p className="font-display text-lg">{w.city}</p>
                <p className="text-xs tracking-wide text-bone/50 uppercase">
                  {w.country} · seit {w.founded}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/produktion"
            className="mt-12 inline-block border-b border-bone/50 pb-1 text-sm tracking-wide"
          >
            Alle Werkstätten entdecken →
          </Link>
        </div>
      </section>
    </>
  );
}
