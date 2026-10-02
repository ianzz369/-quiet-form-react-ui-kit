export type ScreenIndex = 0 | 1 | 2;
export interface Task {
  id: string;
  label: string;
  time?: string;
  completed: boolean;
}
