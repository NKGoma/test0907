"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { TexturePanel } from "@/components/TexturePanel";
import { formatPrice } from "@/lib/format";

export function CartView() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-12">
        <p className="text-sm text-ink-soft/70">Ihr Warenkorb ist leer.</p>
        <Link
          href="/kollektion"
          className="mt-6 inline-block bg-ink px-7 py-3 text-sm tracking-wide text-bone"
        >
          Zur Kollektion
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-line">
        {items.map((item) => (
          <li key={item.id} className="flex gap-5 py-6">
            <TexturePanel tone={item.tone} className="h-24 w-20 shrink-0" />
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="font-display text-base text-ink">{item.name}</p>
                <p className="mt-1 text-xs text-ink-soft/60">{item.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center border border-line">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 text-sm"
                    aria-label="Menge verringern"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 text-sm"
                    aria-label="Menge erhöhen"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-ink-soft/60 underline underline-offset-4"
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="h-fit border border-line p-6">
        <p className="text-xs tracking-[0.2em] text-tan-dark uppercase">Zusammenfassung</p>
        <div className="mt-4 flex justify-between text-sm text-ink-soft/80">
          <span>Zwischensumme</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="mt-2 flex justify-between text-sm text-ink-soft/80">
          <span>Versand</span>
          <span>Kostenlos</span>
        </div>
        <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg text-ink">
          <span>Gesamt</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <Link
          href="/checkout"
          className="mt-6 block w-full bg-ink px-7 py-3 text-center text-sm tracking-wide text-bone transition hover:bg-ink-soft"
        >
          Zur Kasse
        </Link>
      </div>
    </div>
  );
}
