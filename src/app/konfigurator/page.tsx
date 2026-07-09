import type { Metadata } from "next";
import { ConfiguratorClient } from "@/components/Configurator/ConfiguratorClient";
import { MODELS } from "@/lib/configurator";

export const metadata: Metadata = {
  title: "Konfigurator — Wertstück",
};

export default async function KonfiguratorPage({
  searchParams,
}: {
  searchParams: Promise<{ modell?: string }>;
}) {
  const { modell } = await searchParams;
  const initialModelId = MODELS.some((m) => m.id === modell) ? modell : undefined;

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <p className="text-xs tracking-[0.3em] text-tan-dark uppercase">Konfigurator</p>
      <h1 className="mt-4 max-w-xl font-display text-4xl text-ink text-balance">
        Gestalten Sie Ihr eigenes Wertstück.
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft/80">
        Modell, Leder, Farbe, Beschläge und ein optionales Monogramm — die
        Vorschau und der Preis aktualisieren sich live.
      </p>
      <div className="mt-16">
        <ConfiguratorClient initialModelId={initialModelId} />
      </div>
    </div>
  );
}
