type Props = {
  modelId: string;
  colorHex: string;
  colorHexDark: string;
  hardwareHex: string;
  monogram: string;
};

export function PreviewPanel({ modelId, colorHex, colorHexDark, hardwareHex, monogram }: Props) {
  return (
    <div className="grain relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-sand/50">
      <svg viewBox="0 0 300 360" className="h-4/5 w-4/5" role="img" aria-label="Vorschau der konfigurierten Tasche">
        <defs>
          <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colorHex} />
            <stop offset="100%" stopColor={colorHexDark} />
          </linearGradient>
        </defs>

        {modelId === "rucksack" && (
          <>
            <rect x="30" y="10" width="80" height="60" rx="14" fill="url(#body)" stroke={colorHexDark} strokeWidth="2" />
            <rect x="60" y="90" width="180" height="230" rx="26" fill="url(#body)" />
            <rect x="60" y="90" width="180" height="230" rx="26" fill="none" stroke={colorHexDark} strokeWidth="2" opacity="0.4" />
            <rect x="70" y="140" width="160" height="4" fill={colorHexDark} opacity="0.5" />
          </>
        )}

        {modelId === "tote" && (
          <>
            <path d="M100 70 C100 20 200 20 200 70" stroke={colorHex} strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M115 55 C115 15 185 15 185 55" stroke={colorHexDark} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.6" />
            <path
              d="M55 100 L245 100 L225 320 Q150 335 75 320 Z"
              fill="url(#body)"
            />
          </>
        )}

        {modelId === "umhaenge" && (
          <>
            <path d="M60 60 L240 60 L255 320 L45 320 Z" fill="none" />
            <path
              d="M50 90 C50 40 250 40 250 90 L250 320 L50 320 Z"
              fill="url(#body)"
            />
            <path d="M50 150 L250 150" stroke={colorHexDark} strokeWidth="2" opacity="0.4" />
            <path d="M90 150 Q150 190 210 150" stroke={colorHexDark} strokeWidth="2" fill="none" opacity="0.5" />
          </>
        )}

        {/* hardware accent */}
        <circle cx="150" cy={modelId === "rucksack" ? 190 : 165} r="8" fill={hardwareHex} stroke="#00000022" strokeWidth="1" />

        {monogram.trim() && (
          <text
            x="150"
            y="270"
            textAnchor="middle"
            fontFamily="var(--font-display, serif)"
            fontStyle="italic"
            fontSize="22"
            fill={hardwareHex}
          >
            {monogram.trim().slice(0, 4).toUpperCase()}
          </text>
        )}
      </svg>
    </div>
  );
}
