import { FC } from "react";
import { useTimer } from "../hooks/useTimer";

type Props = {
  time: number;
};

export const Timer: FC<Props> = (props) => {
  const { time, start, pause } = useTimer({
    initialTime: props.time,
    endTime: 0,
    onTimeOver: () => {
      console.log("おわったよ");
    },
  });

  return (
    <>
      <p className="text-5xl m-10 font-number">{time}</p>
      <div className="text-xl bg-pink bg-opacity-40 w-screen h-14 font-mono flex justify-around">
        <button onClick={start}>START</button>
        <button onClick={pause}>STOP</button>
      </div>
    </>
  );
};
