import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { BatteryFull, Wifi, Signal } from "lucide-react";
export function Panel({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={"panel " + className} {...props} />;
}
export function Button({
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={"button " + className} {...props} />;
}
export function Chip({
  active = false,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={"chip " + (active ? "selected " : "") + className}
      aria-pressed={active}
      {...props}
    />
  );
}
export function Metric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
      <small>{detail}</small>
    </div>
  );
}
export function TextArea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={"text-area " + className} {...props} />;
}
export function Status() {
  return (
    <div className="status" aria-hidden="true">
      <span>9:41</span>
      <div>
        <Signal size={13} />
        <Wifi size={14} />
        <BatteryFull size={19} />
      </div>
    </div>
  );
}
