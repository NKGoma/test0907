"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/types";

export function CollectionGrid({ products }: { products: Product[] }) {
  const categories = useMemo(
    () => ["Alle", ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  );
  const [active, setActive] = useState("Alle");

  const filtered =
    active === "Alle" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`border px-4 py-2 text-xs tracking-[0.15em] uppercase transition ${
              active === c
                ? "border-ink bg-ink text-bone"
                : "border-line text-ink-soft hover:border-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
