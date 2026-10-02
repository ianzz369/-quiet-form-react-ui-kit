import { Sun, Play, Pause, RotateCcw, Wind, ChevronLeft } from "lucide-react";
import { Panel, Button, Chip } from "../components/primitives";
import type { CompanionState } from "../hooks/useCompanion";

import { FocusDial } from "../components/FocusDial";
export function FocusScreen({
  state,
  go,
}: {
  state: CompanionState;
  go: (n: number) => void;
}) {
  const {
    seconds,
    duration,
    running,
    breathing,
    chooseSession,
    toggleSession,
    resetSession,
    startSession,
  } = state;
  return (
    <>
      <header className="app-header compact">
        <button
          className="icon-button"
          aria-label="Back to today"
          onClick={() => go(0)}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="overline">A MOMENT FOR YOU</span>
        <Sun size={20} strokeWidth={1} />
      </header>
      <div className="focus-heading">
        <h2>One quiet thing.</h2>
        <p>
          {breathing
            ? "Follow your breath for a little while."
            : "Nothing else needs you right now."}
        </p>
      </div>
      <FocusDial
        seconds={seconds}
        total={duration}
        running={running}
        breathing={breathing}
      />
      <div className="duration">
        <Chip
          active={duration === 1500 && !breathing}
          onClick={() => chooseSession(1500)}
        >
          25 min
        </Chip>
        <Chip
          active={duration === 600 && !breathing}
          onClick={() => chooseSession(600)}
        >
          10 min
        </Chip>
        <Chip active={breathing} onClick={() => chooseSession(60, true)}>
          Breathe
        </Chip>
      </div>
      <div className="session-controls">
        <Button onClick={toggleSession}>
          {running ? (
            <Pause size={16} />
          ) : (
            <Play size={16} fill="currentColor" />
          )}
          {running ? "Pause session" : "Begin session"}
        </Button>
        <button
          className="icon-button"
          aria-label="Reset timer"
          onClick={resetSession}
        >
          <RotateCcw size={18} />
        </button>
      </div>
      <Panel className="recommendation">
        <div className="rec-icon">
          <Wind size={23} strokeWidth={1} />
        </div>
        <div>
          <span className="overline">A GENTLER WAY IN</span>
          <h4>Start with your breath</h4>
          <p>One minute to come back to yourself.</p>
        </div>
        <button
          className="icon-button"
          aria-label="Start breathing exercise"
          onClick={() => startSession(60, true)}
        >
          <Play size={14} fill="currentColor" />
        </button>
      </Panel>
      <p className="quiet-note">
        {running
          ? "You’ve already made a little space."
          : "A little stillness goes a long way."}
      </p>
    </>
  );
}
