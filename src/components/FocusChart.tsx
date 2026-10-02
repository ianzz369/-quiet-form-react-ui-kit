export function FocusChart({ month }: { month: boolean }) {
  return (
    <div
      className="chart"
      role="img"
      aria-label={month ? "Monthly focus activity" : "Weekly focus activity"}
    >
      {(month
        ? [42, 60, 78, 65, 90, 68, 84]
        : [38, 62, 45, 86, 65, 95, 58]
      ).map((v, i) => (
        <div className="chart-column" key={i}>
          <div style={{ height: v + "%" }} className={i === 5 ? "peak" : ""}>
            <span>{v}m</span>
          </div>
          <small>
            {month ? String(i * 4 + 1) : ["M", "T", "W", "T", "F", "S", "S"][i]}
          </small>
        </div>
      ))}
    </div>
  );
}
