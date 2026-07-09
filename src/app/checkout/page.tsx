import type { Metadata } from "next";
import { CheckoutView } from "@/components/CheckoutView";

export const metadata: Metadata = {
  title: "Kasse — Wertstück",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">Kasse</p>
      <h1 className="mt-4 font-display text-4xl text-ink">Bestellung abschließen</h1>
      <div className="mt-12">
        <CheckoutView />
      </div>
    </div>
  );
}
