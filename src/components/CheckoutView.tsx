"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

function generateOrderNumber() {
  return `WS-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function CheckoutView() {
  const { items, subtotal, clear } = useCart();
  const [confirmation, setConfirmation] = useState<{ orderNumber: string; total: number } | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmation({ orderNumber: generateOrderNumber(), total: subtotal });
    clear();
  };

  if (confirmation) {
    return (
      <div className="max-w-md py-12">
        <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">Bestellung aufgegeben</p>
        <h2 className="mt-4 font-display text-3xl text-ink">Vielen Dank.</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft/80">
          Ihre Bestellung <span className="text-ink">{confirmation.orderNumber}</span> über{" "}
          {formatPrice(confirmation.total)} wurde aufgenommen. Dies ist eine
          Demo-Bestellung — es wurde keine Zahlung verarbeitet.
        </p>
        <Link
          href="/kollektion"
          className="mt-8 inline-block bg-ink px-7 py-3 text-sm tracking-wide text-bone"
        >
          Weiter einkaufen
        </Link>
      </div>
    );
  }

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
    <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-[1fr_360px]">
      <div className="space-y-8">
        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">Kontakt</legend>
          <div className="mt-4 grid gap-4">
            <input required type="text" placeholder="Vor- und Nachname" className="border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
            <input required type="email" placeholder="E-Mail-Adresse" className="border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">Lieferadresse</legend>
          <div className="mt-4 grid gap-4">
            <input required type="text" placeholder="Straße und Hausnummer" className="border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="Postleitzahl" className="border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
              <input required type="text" placeholder="Stadt" className="border border-line bg-transparent px-4 py-3 text-sm outline-none focus:border-ink" />
            </div>
          </div>
        </fieldset>
        <p className="text-xs text-ink-soft/50">
          Dies ist eine Demo-Kasse ohne echte Zahlungsabwicklung.
        </p>
      </div>

      <div className="h-fit border border-line p-6">
        <p className="text-xs tracking-[0.2em] text-tan-dark uppercase">Ihre Bestellung</p>
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between text-sm text-ink-soft/80">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg text-ink">
          <span>Gesamt</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-ink px-7 py-3 text-sm tracking-wide text-bone transition hover:bg-ink-soft"
        >
          Bestellung abschließen
        </button>
      </div>
    </form>
  );
}
