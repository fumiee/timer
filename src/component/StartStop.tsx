import { FC, memo } from "react";

type Props = {
  start: () => void;
  pause: () => void;
};

export const StartStop: FC<Props> = memo((props) => {
  return (
    <div className="text-xl bg-pink bg-opacity-40 w-screen h-14 font-mono flex justify-around">
      <button onClick={props.start} className="w-1/2">
        START
      </button>
      <button onClick={props.pause} className="w-1/2">
        STOP
      </button>
    </div>
  );
});