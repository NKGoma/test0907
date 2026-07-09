import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = {
  title: "Warenkorb — Wertstück",
};

export default function WarenkorbPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">Warenkorb</p>
      <h1 className="mt-4 font-display text-4xl text-ink">Ihr Warenkorb</h1>
      <div className="mt-12">
        <CartView />
      </div>
    </div>
  );
}
