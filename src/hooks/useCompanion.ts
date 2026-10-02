import { useEffect, useState, useRef } from "react";
import { initialTasks } from "../data/sampleData";
export function useCompanion() {
  const [mood, setMood] = useState(1),
    [tasks, setTasks] = useState(() => initialTasks.map((t) => ({ ...t })));
  const [seconds, setSeconds] = useState(1500),
    [duration, setDuration] = useState(1500);
  const [running, setRunning] = useState(false),
    [breathing, setBreathing] = useState(false);
  const [month, setMonth] = useState(false),
    [note, setNote] = useState(""),
    [saved, setSaved] = useState(false);
  const deadline = useRef(0);
  useEffect(() => {
    if (!running) return;
    const update = () => {
      const remaining = Math.max(0, (deadline.current - Date.now()) / 1000);
      setSeconds(remaining);
      if (remaining === 0) setRunning(false);
    };
    update();
    const timer = setInterval(update, 50);
    return () => clearInterval(timer);
  }, [running]);
  const chooseSession = (length: number, isBreathing = false) => {
    setRunning(false);
    setDuration(length);
    setSeconds(length);
    setBreathing(isBreathing);
  };
  const startSession = (length = duration, isBreathing = breathing) => {
    setDuration(length);
    setSeconds(length);
    setBreathing(isBreathing);
    deadline.current = Date.now() + length * 1000;
    setRunning(true);
  };
  const toggleSession = () => {
    if (running) {
      setSeconds(Math.max(0, (deadline.current - Date.now()) / 1000));
      setRunning(false);
    } else {
      const remaining = seconds > 0 ? seconds : duration;
      setSeconds(remaining);
      deadline.current = Date.now() + remaining * 1000;
      setRunning(true);
    }
  };
  const resetSession = () => {
    setRunning(false);
    setSeconds(duration);
  };
  const toggleTask = (id: string) =>
    setTasks((items) =>
      items.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  const updateNote = (text: string) => {
    setNote(text);
    setSaved(false);
  };
  return {
    mood,
    setMood,
    tasks,
    toggleTask,
    seconds,
    duration,
    running,
    breathing,
    month,
    setMonth,
    note,
    updateNote,
    saved,
    saveNote: () => setSaved(true),
    chooseSession,
    startSession,
    toggleSession,
    resetSession,
  };
}
export type CompanionState = ReturnType<typeof useCompanion>;
