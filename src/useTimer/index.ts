import { useCallback, useEffect, useReducer } from "react";

import { reducer } from "./reducer";
import type { Config, ReturnValue } from "./types";

export const useTimer = ({
  endTime,
  initialTime = 0,
  interval = 1000,
  onTimeOver,
}: Partial<Config> = {}): ReturnValue => {
  const [state, dispatch] = useReducer(reducer, {
    status: "STOPPED",
    time: initialTime,
  });

  const { status, time } = state;

  const pause = useCallback(() => {
    dispatch({ type: "pause" });
  }, []);

  const start = useCallback(() => {
    dispatch({ type: "start", payload: { initialTime } });
  }, [initialTime]);

  const reset = useCallback((resetTime: number) => {
    dispatch({ type: "reset", payload: { initialTime: resetTime } });
  }, []);

  useEffect(() => {
    dispatch({ type: "reset", payload: { initialTime } });
  }, [initialTime]);

  useEffect(() => {
    if (status !== "STOPPED" && time === endTime) {
      dispatch({ type: "stop" });

      if (typeof onTimeOver === "function") {
        onTimeOver();
      }
    }
  }, [endTime, onTimeOver, time, status]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (status === "RUNNING") {
      intervalId = setInterval(() => {
        dispatch({
          type: "set",
          payload: {
            newTime: time - 1,
          },
        });
      }, interval);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status, interval, time]);

  return { pause, start, status, time, reset };
};
