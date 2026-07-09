"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  tone: [string, string];
};

export function AddToCartButton({ id, name, description, price, tone }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem({ id, name, description, price, tone });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-ink px-7 py-4 text-sm tracking-[0.15em] text-bone uppercase transition hover:bg-ink-soft sm:w-auto sm:min-w-64"
    >
      {added ? "Zum Warenkorb hinzugefügt" : "In den Warenkorb"}
    </button>
  );
}
