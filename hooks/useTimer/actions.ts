import { createActionType } from "./helpers";

const PAUSE = () => createActionType("pause");

const SET = (newTime: number) => createActionType("set", { newTime });

const RESET = (initialTime: number) =>
  createActionType("reset", { initialTime });

const START = (initialTime: number) =>
  createActionType("start", { initialTime });

const STOP = () => createActionType("stop");

export type TimerActionsType = ReturnType<
  typeof PAUSE | typeof SET | typeof RESET | typeof START | typeof STOP
>;
