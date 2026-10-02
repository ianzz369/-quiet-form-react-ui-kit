import {
  House,
  CircleDashed,
  ChartNoAxesColumnIncreasing,
  BookOpen,
} from "lucide-react";
export function BottomNav({
  active,
  go,
  checkin,
}: {
  active: number;
  go: (n: number) => void;
  checkin: () => void;
}) {
  return (
    <nav className="bottom-nav nav-b" aria-label="App navigation">
      {[
        { text: "Today", icon: House, n: 0 },
        { text: "Focus", icon: CircleDashed, n: 1 },
        { text: "Journal", icon: BookOpen, n: 3 },
        { text: "You", icon: ChartNoAxesColumnIncreasing, n: 2 },
      ].map(({ text, icon: Icon, n }) => (
        <button
          key={text}
          className={active === n ? "active" : ""}
          onClick={() => (n === 3 ? checkin() : go(n))}
          aria-label={text}
          aria-current={active === n ? "page" : undefined}
        >
          <Icon size={21} strokeWidth={1.5} />
          <span>{text}</span>
        </button>
      ))}
    </nav>
  );
}
