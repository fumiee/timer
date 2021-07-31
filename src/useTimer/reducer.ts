import type { State } from "./types";
import type { TimerActionsType } from "./actions";

export const reducer = (state: State, action: TimerActionsType): State => {
  switch (action.type) {
    case "pause": {
      return {
        ...state,
        status: "PAUSED",
      };
    }
    case "set": {
      return {
        ...state,
        time: action.payload.newTime,
      };
    }
    case "reset": {
      return {
        ...state,
        status: "STOPPED",
        time: action.payload.initialTime,
      };
    }
    case "start": {
      return {
        ...state,
        status: "RUNNING",
        time: state.time,
      };
    }
    case "stop": {
      return {
        ...state,
        status: "STOPPED",
      };
    }
    default:
      return state;
  }
};
