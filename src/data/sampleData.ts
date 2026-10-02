import type { Task } from "../types";
/** Fictional display data. The kit does not connect to a health or analytics service. */
export const initialTasks: Task[] = [
  {
    id: "focus",
    label: "Make space for deep work",
    time: "10:00",
    completed: false,
  },
  { id: "outside", label: "Step outside, just a little", completed: false },
  { id: "water", label: "Drink a glass of water", completed: true },
];
