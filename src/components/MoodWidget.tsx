import { Panel } from "./primitives";
import { MoodSelector } from "./MoodSelector";
export function MoodWidget({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <Panel className="mood-widget">
      <div className="section-title">
        <h4>How are you, really?</h4>
        <span>{["Low", "Steady", "Good"][value]}</span>
      </div>
      <MoodSelector value={value} onChange={onChange} />
    </Panel>
  );
}
