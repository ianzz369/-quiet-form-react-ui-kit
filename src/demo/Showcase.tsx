"use client";
import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { MaterialPalette } from "./MaterialPalette";
import {
  Panel,
  Button,
  Chip,
  Metric,
  TextArea,
  FocusDial,
  FocusChart,
  MoodWidget,
  TaskList,
  BottomNav,
  ReflectionDialog,
  PhoneFrame,
  HomeScreen,
  FocusScreen,
  InsightsScreen,
  useCompanion,
} from "../index";
export default function Showcase() {
  const [mode, setMode] = useState<"screens" | "components">("screens"),
    [journal, setJournal] = useState<number | null>(null);
  const state = useCompanion(),
    sample = useCompanion();
  const go = (n: number) =>
    document
      .getElementById("screen-" + n)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  const reflection = (n: number) =>
    journal === n ? (
      <ReflectionDialog
        mood={state.mood}
        onMood={state.setMood}
        note={state.note}
        onNote={state.updateNote}
        saved={state.saved}
        onSave={state.saveNote}
        onClose={() => setJournal(null)}
      />
    ) : undefined;
  const screens = [
    <HomeScreen state={state} go={go} />,
    <FocusScreen state={state} go={go} />,
    <InsightsScreen state={state} onReflect={() => setJournal(2)} />,
  ];
  return (
    <main className="qf-kit">
      <header className="studio-header">
        <a className="studio-brand" href="#top">
          <span className="orbit-mark" />
          COMMON ORBIT
          <br />
          <span className="studio">STUDIO</span>
        </a>
        <nav className="showcase-switch" aria-label="Showcase mode">
          <button
            type="button"
            aria-pressed={mode === "screens"}
            onClick={() => setMode("screens")}
          >
            Screens
          </button>
          <button
            type="button"
            aria-pressed={mode === "components"}
            onClick={() => setMode("components")}
          >
            Components
          </button>
        </nav>
        <span className="edition">QUIET FORM / FOUNDATION</span>
      </header>
      <div id="top" className="page-intro">
        <h1>
          A little space
          <br />
          <em>to feel like yourself.</em>
        </h1>
        <p>
          Wellness + productivity
          <br />
          One direction. A softer rhythm.
        </p>
      </div>
      {mode === "screens" ? (
        <section className="direction direction-b">
          <div className="direction-label">
            <h2>
              <span>B</span>Soft neumorphic minimal
            </h2>
            <p>Selected direction / B</p>
          </div>
          <div className="screens">
            {screens.map((content, n) => (
              <div className="screen-wrap" key={n}>
                <div className="screen-label">
                  <span>0{n + 1}</span>
                  {["Home", "Focus / Wellness", "Insights / Profile"][n]}
                </div>
                <PhoneFrame
                  id={"screen-" + n}
                  screen={n}
                  label={["Home", "Focus", "Insights"][n]}
                  go={go}
                  onReflect={() => setJournal(n)}
                  overlay={reflection(n)}
                >
                  {content}
                </PhoneFrame>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section
          className="component-gallery theme-b"
          aria-label="Component showcase"
        >
          <div className="direction-label">
            <h2>Quiet Form components</h2>
            <p>Interactive samples</p>
          </div>
          <div className="specimen-grid">
            <section className="specimen">
              <h3>Buttons & choices</h3>
              <div className="specimen-actions">
                <Button onClick={sample.toggleSession}>
                  {sample.running ? <Pause size={15} /> : <Play size={15} />}{" "}
                  {sample.running ? "Pause session" : "Begin session"}
                </Button>
                <Button
                  className="button-secondary"
                  onClick={sample.resetSession}
                >
                  Reset timer
                </Button>
              </div>
              <div className="duration">
                <Chip
                  active={sample.duration === 1500}
                  onClick={() => sample.chooseSession(1500)}
                >
                  25 min
                </Chip>
                <Chip
                  active={sample.duration === 600}
                  onClick={() => sample.chooseSession(600)}
                >
                  10 min
                </Chip>
              </div>
            </section>
            <section className="specimen">
              <h3>Mood widget</h3>
              <MoodWidget value={sample.mood} onChange={sample.setMood} />
            </section>
            <section className="specimen">
              <h3>Focus dial</h3>
              <FocusDial
                seconds={sample.seconds}
                total={sample.duration}
                running={sample.running}
                breathing={sample.breathing}
              />
              <div className="specimen-actions">
                <Button onClick={sample.toggleSession}>
                  {sample.running ? "Pause" : "Start"}
                </Button>
                <button
                  type="button"
                  className="chip"
                  onClick={sample.resetSession}
                >
                  Reset
                </button>
              </div>
            </section>
            <section className="specimen">
              <h3>Task list</h3>
              <TaskList tasks={sample.tasks} onToggle={sample.toggleTask} />
            </section>
            <section className="specimen">
              <h3>Metrics & surfaces</h3>
              <div className="metric-row">
                <Panel>
                  <Metric
                    value="5"
                    label="Mindful days"
                    detail="Small moments count"
                  />
                </Panel>
                <Panel>
                  <Metric
                    value="12"
                    label="Intentions met"
                    detail="Progress, not pressure"
                  />
                </Panel>
              </div>
            </section>
            <section className="specimen">
              <h3>Focus chart</h3>
              <div className="duration">
                <Chip
                  active={!sample.month}
                  onClick={() => sample.setMonth(false)}
                >
                  Week
                </Chip>
                <Chip
                  active={sample.month}
                  onClick={() => sample.setMonth(true)}
                >
                  Month
                </Chip>
              </div>
              <Panel>
                <FocusChart month={sample.month} />
              </Panel>
            </section>
            <section className="specimen">
              <h3>Reflection input</h3>
              <label className="specimen-label" htmlFor="sample-note">
                What’s on your mind?
              </label>
              <TextArea
                id="sample-note"
                value={sample.note}
                onChange={(e) => sample.updateNote(e.target.value)}
                placeholder="A thought, a feeling, a little win…"
              />
              <Button onClick={sample.saveNote}>
                {sample.saved ? "Saved for this visit" : "Save reflection"}
              </Button>
            </section>
            <section className="specimen">
              <h3>Floating navigation</h3>
              <p className="specimen-caption">Choose a screen to preview it.</p>
              <div className="nav-specimen">
                <BottomNav
                  active={0}
                  go={(n) => {
                    setMode("screens");
                    requestAnimationFrame(() => go(n));
                  }}
                  checkin={() => {
                    setMode("screens");
                    setJournal(0);
                  }}
                />
              </div>
            </section>
            <section className="specimen">
              <h3>Check-in dialog</h3>
              <Button
                onClick={() => {
                  setMode("screens");
                  setJournal(0);
                  requestAnimationFrame(() => go(0));
                }}
              >
                Open check-in
              </Button>
            </section>
            <section className="specimen">
              <h3>Material palette</h3>
              <MaterialPalette />
            </section>
          </div>
        </section>
      )}
      <footer>
        <span>COMMON ORBIT STUDIO</span>
        <span>QUIET FORM — FOUNDATION 1.0.0</span>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
