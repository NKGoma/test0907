type TexturePanelProps = {
  tone: [string, string];
  label?: string;
  pattern?: "diagonal" | "radial" | "stitch";
  className?: string;
  children?: React.ReactNode;
  align?: "start" | "center" | "end";
};

/**
 * TODO(photography): replace with real product photography once available.
 * Renders a generated leather-toned panel (gradient + grain + optional
 * stitch lines) so every visual slot in the site has a strong, consistent
 * look without relying on stock images.
 */
export function TexturePanel({
  tone,
  label,
  pattern = "diagonal",
  className = "",
  children,
  align = "end",
}: TexturePanelProps) {
  const background =
    pattern === "radial"
      ? `radial-gradient(circle at 30% 20%, ${tone[0]}, ${tone[1]})`
      : `linear-gradient(135deg, ${tone[0]} 0%, ${tone[1]} 100%)`;

  const alignClass =
    align === "center" ? "items-center" : align === "start" ? "items-start" : "items-end";

  return (
    <div
      className={`grain relative flex ${alignClass} overflow-hidden ${className}`}
      style={{ background }}
    >
      {pattern === "stitch" && (
        <div
          className="pointer-events-none absolute inset-4 border border-dashed"
          style={{ borderColor: "rgba(245,239,228,0.35)" }}
        />
      )}
      {label && (
        <span className="relative z-10 m-6 font-display text-sm tracking-[0.2em] text-bone/80 uppercase">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
