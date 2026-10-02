import { Plus, Leaf, MoveUpRight } from "lucide-react";
import { Panel, Chip, Metric } from "../components/primitives";
import type { CompanionState } from "../hooks/useCompanion";

import { FocusChart } from "../components/FocusChart";
export function InsightsScreen({
  state,
  onReflect,
}: {
  state: CompanionState;
  onReflect: () => void;
}) {
  const { month, setMonth, mood } = state;
  return (
    <>
      <header className="app-header compact">
        <span className="wordmark">
          tend<span>.</span>
        </span>
        <span className="overline">YOUR PERSONAL RHYTHM</span>
      </header>
      <div className="profile">
        <button
          className="avatar"
          onClick={onReflect}
          aria-label="Add a personal reflection"
        >
          A
        </button>
        <div>
          <h2>Alex Morgan</h2>
          <p>A little more yourself, every day.</p>
        </div>
      </div>
      <div className="period">
        <h3>Your {month ? "month" : "week"}, gently.</h3>
        <div className="segmented">
          <Chip active={!month} onClick={() => setMonth(false)}>
            Week
          </Chip>
          <Chip active={month} onClick={() => setMonth(true)}>
            Month
          </Chip>
        </div>
      </div>
      <Panel className="insight-main">
        <div className="section-title">
          <div>
            <span className="overline">TIME WELL SPENT</span>
            <strong className="big-metric">
              {month ? "32.4" : "8.5"}
              <small> hrs</small>
            </strong>
          </div>
          <span className="trend">
            +{month ? "24" : "12"}%<MoveUpRight size={12} />
          </span>
        </div>
        <FocusChart month={month} />
        <div className="chart-caption">
          <span>Focus, at your own pace</span>
          <span>A little more consistent</span>
        </div>
      </Panel>
      <div className="metric-row">
        <Panel>
          <Metric
            value={month ? "24" : "5"}
            label="Mindful days"
            detail="Small moments count"
          />
        </Panel>
        <Panel>
          <Metric
            value={month ? "42" : "12"}
            label="Intentions met"
            detail="Progress, not pressure"
          />
        </Panel>
      </div>
      <Panel className="reflection">
        <div className="section-title">
          <h4>
            <Leaf size={16} /> Growing, quietly.
          </h4>
          <span>✦</span>
        </div>
        <p>
          {mood === 2
            ? "You’re feeling good today. Notice what is making room for that."
            : "Your calmest days begin with a little space. Keep that morning moment for yourself."}
        </p>
        <button onClick={onReflect}>
          Save a reflection <Plus size={13} />
        </button>
      </Panel>
    </>
  );
}
