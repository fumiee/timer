import { FC } from "react";
import { useTimer } from "../useTimer";
import { yuderetayo } from "../../public/yuderetayo";
import { bird } from "../../public/bird";

type Props = {
  time: number;
  count: number;
};

export const Timer: FC<Props> = (props) => {
  const { time, start, pause } = useTimer({
    initialTime: props.time,
    endTime: 0,
    onTimeOver: () => {
      new Audio(props.count > 5 ? yuderetayo : bird).play();
    },
  });

  return (
    <>
      <p className="text-5xl m-10 font-base">{time}</p>
      <div className="text-xl bg-pink bg-opacity-40 w-screen h-14 font-mono flex justify-around">
        <button onClick={start} className="w-1/2">
          START
        </button>
        <button onClick={pause} className="w-1/2">
          STOP
        </button>
      </div>
    </>
  );
};
