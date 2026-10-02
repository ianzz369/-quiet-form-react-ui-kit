import { Check } from "lucide-react";
import type { Task } from "../types";
export function TaskList({
  tasks,
  onToggle,
}: {
  tasks: Task[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="tasks">
      <div className="section-title">
        <h4>A little intention</h4>
        <span>
          {tasks.filter((t) => t.completed).length}/{tasks.length}
        </span>
      </div>
      {tasks.map((task) => (
        <button
          type="button"
          className={"task " + (task.completed ? "complete" : "")}
          key={task.id}
          onClick={() => onToggle(task.id)}
          aria-pressed={task.completed}
        >
          <span className="checkbox">
            {task.completed && <Check size={12} />}
          </span>
          <span>{task.label}</span>
          {task.time && <small>{task.time}</small>}
        </button>
      ))}
    </div>
  );
}
