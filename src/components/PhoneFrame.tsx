import type { ReactNode } from "react";
import { Status } from "./primitives";
import { BottomNav } from "./BottomNav";
export function PhoneFrame({
  id,
  screen,
  label,
  children,
  overlay,
  go,
  onReflect,
}: {
  id: string;
  screen: number;
  label: string;
  children: ReactNode;
  overlay?: ReactNode;
  go: (n: number) => void;
  onReflect: () => void;
}) {
  return (
    <article
      className={"phone theme-b screen-" + screen}
      id={id}
      aria-label={"Soft neumorphic minimal — " + label}
    >
      <Status />
      <div className="phone-content" inert={overlay ? true : undefined}>
        {children}
      </div>
      <div inert={overlay ? true : undefined}>
        <BottomNav active={screen} go={go} checkin={onReflect} />
      </div>
      <div className="home-indicator" />
      {overlay}
    </article>
  );
}
