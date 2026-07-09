import type { Metadata } from "next";
import { CollectionGrid } from "@/components/CollectionGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Kollektion — Wertstück",
};

export default function KollektionPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">Kollektion</p>
      <h1 className="mt-4 max-w-xl font-display text-4xl text-ink text-balance">
        Taschen, die man vererbt statt ersetzt.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft/80">
        Jedes Modell ist in einer unserer vier Werkstätten gefertigt und mit
        seiner Herkunft gekennzeichnet.
      </p>
      <div className="mt-16">
        <CollectionGrid products={products} />
      </div>
    </div>
  );
}
