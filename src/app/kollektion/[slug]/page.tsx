import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TexturePanel } from "@/components/TexturePanel";
import { AddToCartButton } from "@/components/AddToCartButton";
import { getProduct, products } from "@/lib/products";
import { getWorkshop } from "@/lib/workshops";
import { formatPrice } from "@/lib/format";

const CATEGORY_TO_MODEL_ID: Record<string, string> = {
  Tote: "tote",
  Rucksack: "rucksack",
  Umhängetasche: "umhaenge",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} — Wertstück` : "Wertstück" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const workshop = getWorkshop(product.workshopId);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <TexturePanel tone={product.tone} pattern="stitch" className="aspect-[4/5] w-full" />

        <div>
          <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">
            {product.category}
          </p>
          <h1 className="mt-4 font-display text-4xl text-ink text-balance">
            {product.name}
          </h1>
          <p className="mt-2 text-sm tracking-wide text-ink-soft/70 uppercase">
            {product.leather} · {product.colorway}
          </p>
          <p className="mt-6 font-display text-2xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-soft/90">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2">
            {product.details.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-ink-soft/80">
                <span className="text-tan">—</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <AddToCartButton
              id={product.slug}
              name={product.name}
              description={`${product.leather} · ${product.colorway}`}
              price={product.price}
              tone={product.tone}
            />
          </div>

          <Link
            href={
              CATEGORY_TO_MODEL_ID[product.category]
                ? `/konfigurator?modell=${CATEGORY_TO_MODEL_ID[product.category]}`
                : "/konfigurator"
            }
            className="mt-4 inline-block text-sm tracking-wide text-ink-soft underline underline-offset-4"
          >
            Ähnliches Modell individuell konfigurieren →
          </Link>

          {workshop && (
            <div className="mt-12 border-t border-line pt-6">
              <p className="text-xs tracking-[0.2em] text-tan-dark uppercase">
                Hergestellt in
              </p>
              <p className="mt-2 font-display text-lg text-ink">
                {workshop.city}, {workshop.country}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft/80">
                {workshop.description}
              </p>
              <Link
                href="/produktion"
                className="mt-3 inline-block text-sm tracking-wide text-ink underline underline-offset-4"
              >
                Werkstatt entdecken →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
