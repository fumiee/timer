export type Status = "RUNNING" | "PAUSED" | "STOPPED";

export type Config = {
  endTime: number | null;
  initialTime: number;
  interval: number;
  onTimeOver?: () => void;
};

export type ReturnValue = {
  pause: () => void;
  start: () => void;
  status: Status;
  time: number;
};

export interface State {
  status: Status;
  time: number;
}
