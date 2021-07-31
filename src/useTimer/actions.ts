import { createActionType } from "./helpers";

const PAUSE = () => createActionType("pause");

const SET = (newTime: number) => createActionType("set", { newTime });

const RESET = (initialTime: number) =>
  createActionType("reset", { initialTime });

const RESET_INITIAL_TIME = (initialTime: number) =>
  createActionType("resetInitialTime", { initialTime });

const START = (initialTime: number) =>
  createActionType("start", { initialTime });

const STOP = () => createActionType("stop");

export type TimerActionsType = ReturnType<
  | typeof PAUSE
  | typeof SET
  | typeof RESET
  | typeof START
  | typeof STOP
  | typeof RESET_INITIAL_TIME
>;
