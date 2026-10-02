import { Sun, Play } from "lucide-react";
import { Panel, Button } from "../components/primitives";
import type { CompanionState } from "../hooks/useCompanion";

import { MoodWidget } from "../components/MoodWidget";
import { TaskList } from "../components/TaskList";
export function HomeScreen({
  state,
  go,
}: {
  state: CompanionState;
  go: (n: number) => void;
}) {
  const start = () => {
    if (!state.running) state.startSession(1500, false);
    go(1);
  };
  return (
    <>
      <header className="app-header">
        <div>
          <span className="overline">THURSDAY, OCTOBER 8</span>
          <h2>Hello, Alex.</h2>
        </div>
        <button
          type="button"
          className="avatar small"
          aria-label="View your profile"
          onClick={() => go(2)}
        >
          A
        </button>
      </header>
      <Panel className="home-hero">
        <div className="section-title">
          <span className="overline">LESS, BUT BETTER</span>
          <Sun size={19} strokeWidth={1} />
        </div>
        <h3>
          Your day.
          <br />A little lighter.
        </h3>
        <div className="mini-dial">
          <span>25</span>
          <small>MIN</small>
        </div>
        <Button onClick={start}>
          <Play size={14} fill="currentColor" /> Begin a quiet moment
        </Button>
      </Panel>
      <MoodWidget value={state.mood} onChange={state.setMood} />
      <TaskList tasks={state.tasks} onToggle={state.toggleTask} />
    </>
  );
}
