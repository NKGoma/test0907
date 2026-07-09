import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-display text-lg tracking-[0.15em] uppercase">Wertstück</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/70">
            Zeitlose Taschen aus pflanzlich gegerbtem Leder. Entworfen, um Jahrzehnte
            zu halten – nicht Saisons. Gefertigt in vier Werkstätten in Europa.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-bone/50 uppercase">Entdecken</p>
          <ul className="mt-4 space-y-2 text-sm text-bone/80">
            <li><Link href="/kollektion">Kollektion</Link></li>
            <li><Link href="/konfigurator">Konfigurator</Link></li>
            <li><Link href="/wertanlage">Wertanlage</Link></li>
            <li><Link href="/produktion">Produktion</Link></li>
            <li><Link href="/tasche-der-woche">Tasche der Woche</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-bone/50 uppercase">Service</p>
          <ul className="mt-4 space-y-2 text-sm text-bone/80">
            <li>Reparatur &amp; Pflege</li>
            <li>Versand &amp; Rückgabe</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line-inverse px-6 py-6 text-xs text-bone/50 lg:px-10">
        © {new Date().getFullYear()} Wertstück. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
