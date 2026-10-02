import { useEffect, useRef, useState } from "react";

const swatches = [
  { label: "Surface", token: "--qf-surface" },
  { label: "Ink", token: "--qf-ink" },
  { label: "Accent", token: "--qf-accent" },
  { label: "Chart", token: "--qf-chart" },
];

export function MaterialPalette() {
  const ref = useRef<HTMLDivElement>(null);
  const [hexCodes, setHexCodes] = useState<string[]>([]);
  useEffect(() => {
    if (!ref.current) return;
    const styles = getComputedStyle(ref.current);
    setHexCodes(
      swatches.map(({ token }) =>
        styles.getPropertyValue(token).trim().toUpperCase(),
      ),
    );
  }, []);
  return (
    <div ref={ref} className="token-swatches">
      {swatches.map(({ label, token }, index) => (
        <div key={token}>
          <span style={{ background: "var(" + token + ")" }} />
          <small>{label}</small>
          <code className="swatch-code">{hexCodes[index] ?? " "}</code>
        </div>
      ))}
    </div>
  );
}
