# Wertstück

Ein Prototyp für einen Onlineshop für zeitlose Ledertaschen — gebaut mit
Next.js (App Router), TypeScript und Tailwind CSS.

## Konzept

- **Zeitlos, stark visuell**: reduziertes Layout, große Typografie, generierte
  Leder-Ton-Flächen statt Stockfotos (siehe `TexturePanel`-Komponente).
- **Wertanlage**: eigene Seite (`/wertanlage`) zur Markenphilosophie.
- **Webshop**: Kollektion, Produktseiten, Warenkorb und eine Demo-Kasse
  (keine echte Zahlungsabwicklung).
- **Konfigurator** (`/konfigurator`): eigene Tasche aus Modell, Leder, Farbe,
  Beschlägen und Monogramm zusammenstellen — Vorschau und Preis live.
- **Produktionstransparenz** (`/produktion`): alle vier Werkstätten mit Ort,
  Historie und den dort gefertigten Modellen.
- **Tasche der Woche** (`/tasche-der-woche`): wöchentliche Abstimmung mit
  Live-Leaderboard (`app/api/vote/route.ts`, In-Memory-Speicher).
- **Musik**: dezenter Ambient-Loop-Player im Header (lokal generiert, siehe
  `public/audio/ambient-loop.wav`).

Dies ist ein Frontend-Prototyp: Produktdaten sind Mock-Daten
(`src/lib/`), der Warenkorb wird in `localStorage` gehalten, und es gibt
keine Datenbank oder echte Zahlungsanbindung.

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

```bash
npm run lint   # ESLint
npm run build  # Produktions-Build inkl. Typecheck
```
