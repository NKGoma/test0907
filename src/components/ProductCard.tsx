import Link from "next/link";
import { TexturePanel } from "@/components/TexturePanel";
import { formatPrice } from "@/lib/format";
import { getWorkshop } from "@/lib/workshops";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const workshop = getWorkshop(product.workshopId);

  return (
    <Link href={`/kollektion/${product.slug}`} className="group block">
      <TexturePanel tone={product.tone} className="aspect-[4/5] w-full" />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg text-ink">{product.name}</h3>
          <p className="mt-1 text-xs tracking-wide text-ink-soft/70 uppercase">
            {product.leather} · {product.colorway}
          </p>
          {workshop && (
            <p className="mt-1 text-xs text-ink-soft/60">
              Hergestellt in {workshop.city}, {workshop.country}
            </p>
          )}
        </div>
        <p className="whitespace-nowrap font-display text-base text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
