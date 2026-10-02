import { Frown, Meh, Smile } from "lucide-react";
export function MoodSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="moods">
      {[Frown, Meh, Smile].map((Icon, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={value === i ? "chosen" : ""}
          aria-label={["Low", "Steady", "Good"][i]}
          aria-pressed={value === i}
        >
          <Icon strokeWidth={1.25} size={24} />
          <span>{["Low", "Steady", "Good"][i]}</span>
        </button>
      ))}
    </div>
  );
}
