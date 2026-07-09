import type { Metadata } from "next";
import Link from "next/link";
import { TexturePanel } from "@/components/TexturePanel";
import { workshops } from "@/lib/workshops";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Produktion & Transparenz — Wertstück",
};

export default function ProduktionPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 lg:px-10">
        <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">
          Produktion &amp; Transparenz
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink text-balance sm:text-5xl">
          Vier Werkstätten. Keine Geheimnisse.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft/80">
          Wir fertigen ausschließlich in Europa, in kleinen, spezialisierten
          Werkstätten. Auf jeder Produktseite sehen Sie genau, wo Ihre Tasche
          entstanden ist.
        </p>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-20">
          {workshops.map((w, i) => {
            const madeHere = products.filter((p) => p.workshopId === w.id);
            return (
              <div
                key={w.id}
                id={w.id}
                className={`grid items-start gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <TexturePanel
                  tone={w.tone}
                  pattern="radial"
                  className="aspect-[16/10] w-full"
                  label={`${w.city}, ${w.country}`}
                />
                <div>
                  <p className="text-xs tracking-[0.2em] text-tan-dark uppercase">
                    {w.country} · seit {w.founded} · {w.artisans} Handwerker:innen
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-ink text-balance">
                    {w.headline}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft/80">
                    {w.description}
                  </p>
                  {madeHere.length > 0 && (
                    <div className="mt-6">
                      <p className="text-xs tracking-[0.2em] text-ink-soft/50 uppercase">
                        Gefertigt hier
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                        {madeHere.map((p) => (
                          <li key={p.slug}>
                            <Link
                              href={`/kollektion/${p.slug}`}
                              className="text-sm text-ink underline underline-offset-4"
                            >
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
