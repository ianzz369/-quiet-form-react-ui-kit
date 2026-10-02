import { useEffect, useId, useRef } from "react";
import { X, Check } from "lucide-react";
import { Button, TextArea } from "./primitives";
import { MoodSelector } from "./MoodSelector";
export interface ReflectionDialogProps {
  mood: number;
  onMood: (value: number) => void;
  note: string;
  onNote: (value: string) => void;
  saved: boolean;
  onSave: () => void;
  onClose: () => void;
}
export function ReflectionDialog({
  mood,
  onMood,
  note,
  onNote,
  saved,
  onSave,
  onClose,
}: ReflectionDialogProps) {
  const id = useId(),
    ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLTextAreaElement>("textarea")?.focus();
    return () => previous?.focus();
  }, []);
  return (
    <div className="journal-scrim">
      <div
        ref={ref}
        className="journal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={id + "-title"}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onClose();
          }
          if (event.key === "Tab") {
            const items =
              ref.current?.querySelectorAll<HTMLElement>("button,textarea");
            if (!items?.length) return;
            const first = items[0],
              last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }
        }}
      >
        <button
          type="button"
          className="close-dialog"
          onClick={onClose}
          aria-label="Close reflection"
        >
          <X size={20} />
        </button>
        <span className="overline">JUST FOR YOU</span>
        <h3 id={id + "-title"}>
          A small <span className="keep-together">check-in.</span>
        </h3>
        <MoodSelector value={mood} onChange={onMood} />
        <label htmlFor={id}>What’s on your mind?</label>
        <TextArea
          id={id}
          value={note}
          onChange={(event) => onNote(event.target.value)}
          placeholder="A thought, a feeling, a little win…"
        />
        <Button onClick={onSave}>
          {saved ? (
            <>
              <Check size={16} /> Saved for this visit
            </>
          ) : (
            "Save reflection"
          )}
        </Button>
      </div>
    </div>
  );
}
