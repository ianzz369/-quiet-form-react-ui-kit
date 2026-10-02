export function FocusDial({
  seconds,
  total,
  running,
  breathing,
}: {
  seconds: number;
  total: number;
  running: boolean;
  breathing: boolean;
}) {
  const elapsed = Math.max(0, total - seconds),
    progress = Math.min(1, elapsed / total),
    angle = (elapsed / 60) * Math.PI * 2,
    display = Math.ceil(seconds);
  return (
    <div
      className={
        "session-ring " +
        (running ? "running " : "") +
        (breathing ? "breathing" : "")
      }
    >
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <circle className="ring-track" cx="120" cy="120" r="108" />
        <circle
          className="ring-progress"
          cx="120"
          cy="120"
          r="108"
          strokeDasharray="679"
          strokeDashoffset={679 * progress}
        />
        {
          <>
            {Array.from({ length: 60 }, (_, i) => (
              <line
                key={i}
                x1="120"
                y1="22"
                x2="120"
                y2={i % 5 === 0 ? 33 : 27}
                transform={"rotate(" + i * 6 + " 120 120)"}
              />
            ))}
            <circle className="orbit-track" cx="120" cy="120" r="114" />
            <circle
              className="orbit-progress"
              cx="120"
              cy="120"
              r="114"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={1 - (elapsed % 60) / 60}
              transform="rotate(-90 120 120)"
            />
            <circle
              className="orbit-dot"
              cx={120 + 114 * Math.sin(angle)}
              cy={120 - 114 * Math.cos(angle)}
              r="4.2"
            />
          </>
        }
      </svg>
      <div className="timer-core">
        <span className="overline">
          {breathing
            ? "IN SLOWLY. OUT GENTLY."
            : seconds === 0
              ? "A MOMENT WELL SPENT"
              : running
                ? "IN YOUR FLOW"
                : "YOUR QUIET TIME"}
        </span>
        <strong>
          {breathing
            ? running
              ? elapsed % 8 < 4
                ? "Breathe in"
                : "Breathe out"
              : "Breathe"
            : Math.floor(display / 60)
                .toString()
                .padStart(2, "0") +
              ":" +
              (display % 60).toString().padStart(2, "0")}
        </strong>
        <span>
          {seconds === 0
            ? "Well done. Take a little break."
            : running
              ? "One thing at a time"
              : elapsed > 0
                ? "Your moment is waiting"
                : "No rush. Just begin."}
        </span>
      </div>
    </div>
  );
}
