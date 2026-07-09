"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import {
  MODELS,
  LEATHERS,
  COLORS,
  HARDWARE,
  MONOGRAM_PRICE,
  calculatePrice,
} from "@/lib/configurator";
import { PreviewPanel } from "@/components/Configurator/PreviewPanel";

export function ConfiguratorClient({ initialModelId }: { initialModelId?: string }) {
  const [modelId, setModelId] = useState(initialModelId ?? MODELS[0].id);
  const [leatherId, setLeatherId] = useState(LEATHERS[0].id);
  const [colorId, setColorId] = useState(COLORS[0].id);
  const [hardwareId, setHardwareId] = useState(HARDWARE[0].id);
  const [monogram, setMonogram] = useState("");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const model = MODELS.find((m) => m.id === modelId) ?? MODELS[0];
  const leather = LEATHERS.find((l) => l.id === leatherId) ?? LEATHERS[0];
  const color = COLORS.find((c) => c.id === colorId) ?? COLORS[0];
  const hardware = HARDWARE.find((h) => h.id === hardwareId) ?? HARDWARE[0];

  const price = useMemo(
    () => calculatePrice({ modelId, leatherId, hardwareId, monogram }),
    [modelId, leatherId, hardwareId, monogram]
  );

  const handleAdd = () => {
    const name = `${model.label} — Konfiguriert`;
    addItem({
      id: `custom-${modelId}-${leatherId}-${colorId}-${hardwareId}-${monogram.trim()}`,
      name,
      description: `${leather.label} · ${color.label} · ${hardware.label}${
        monogram.trim() ? ` · Monogramm „${monogram.trim().toUpperCase()}“` : ""
      }`,
      price,
      tone: [color.hex, color.hexDark],
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <PreviewPanel
          modelId={modelId}
          colorHex={color.hex}
          colorHexDark={color.hexDark}
          hardwareHex={hardware.hex}
          monogram={monogram}
        />
        <div className="mt-6 flex items-baseline justify-between border-t border-line pt-6">
          <p className="text-sm tracking-wide text-ink-soft/70 uppercase">
            {model.label} · {leather.label} · {color.label}
          </p>
          <p className="font-display text-2xl text-ink">{formatPrice(price)}</p>
        </div>
      </div>

      <div className="space-y-12">
        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">1 — Modell</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => setModelId(m.id)}
                className={`border p-4 text-left transition ${
                  modelId === m.id ? "border-ink bg-ink text-bone" : "border-line hover:border-ink"
                }`}
              >
                <p className="font-display text-base">{m.label}</p>
                <p className={`mt-1 text-xs ${modelId === m.id ? "text-bone/70" : "text-ink-soft/70"}`}>
                  {m.description}
                </p>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">2 — Leder</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {LEATHERS.map((l) => (
              <button
                key={l.id}
                onClick={() => setLeatherId(l.id)}
                className={`border p-4 text-left transition ${
                  leatherId === l.id ? "border-ink bg-ink text-bone" : "border-line hover:border-ink"
                }`}
              >
                <p className="font-display text-base">{l.label}</p>
                <p className={`mt-1 text-xs ${leatherId === l.id ? "text-bone/70" : "text-ink-soft/70"}`}>
                  {l.description}
                </p>
                <p className={`mt-2 text-xs ${leatherId === l.id ? "text-bone/70" : "text-ink-soft/60"}`}>
                  +{l.delta} €
                </p>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">3 — Farbe</legend>
          <div className="mt-4 flex flex-wrap gap-4">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setColorId(c.id)}
                aria-label={c.label}
                aria-pressed={colorId === c.id}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className="h-10 w-10 rounded-full border-2 transition"
                  style={{
                    background: `linear-gradient(135deg, ${c.hex}, ${c.hexDark})`,
                    borderColor: colorId === c.id ? "var(--color-ink)" : "transparent",
                  }}
                />
                <span className="text-xs text-ink-soft/70">{c.label}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">4 — Beschläge</legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {HARDWARE.map((h) => (
              <button
                key={h.id}
                onClick={() => setHardwareId(h.id)}
                className={`flex items-center gap-2 border px-4 py-2 text-sm transition ${
                  hardwareId === h.id ? "border-ink bg-ink text-bone" : "border-line hover:border-ink"
                }`}
              >
                <span className="h-3 w-3 rounded-full" style={{ background: h.hex }} />
                {h.label}
                {h.delta > 0 && <span className="text-xs opacity-70">+{h.delta} €</span>}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-xs tracking-[0.3em] text-tan-dark uppercase">
            5 — Monogramm (optional, +{MONOGRAM_PRICE} €)
          </legend>
          <input
            type="text"
            maxLength={4}
            value={monogram}
            onChange={(e) => setMonogram(e.target.value)}
            placeholder="z. B. AM"
            className="mt-4 w-full max-w-xs border border-line bg-transparent px-4 py-3 text-sm tracking-widest uppercase outline-none focus:border-ink"
          />
        </fieldset>

        <button
          onClick={handleAdd}
          className="w-full bg-ink px-7 py-4 text-sm tracking-[0.15em] text-bone uppercase transition hover:bg-ink-soft sm:w-auto sm:min-w-64"
        >
          {added ? "Zum Warenkorb hinzugefügt" : `Für ${formatPrice(price)} hinzufügen`}
        </button>
      </div>
    </div>
  );
}
