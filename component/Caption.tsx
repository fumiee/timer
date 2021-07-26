import { FC, useCallback, useState } from "react";
import { Timer } from "./Timer";

type ITEM = {
  img: string;
  title: string;
  time: number;
};

const ITEM = [
  { img: "/burokkori.png", title: "ほうれん草", time: 5 },
  { img: "/burokkori.png", title: "オクラ", time: 10 },
  { img: "/burokkori.png", title: "ブロッコリー", time: 15 },
  { img: "/burokkori.png", title: "ゆで卵", time: 120 },
];

export const Caption: FC = () => {
  const [time, setTime] = useState<number>(0);
  const handleChange = useCallback(
    (timeNum: number) => () => {
      setTime(timeNum);
    },
    [time]
  );
  return (
    <div>
      <Timer time={time} />
      <div className="flex-wrap flex justify-around">
        {ITEM.map((item) => {
          return (
            <button
              onClick={handleChange(item.time)}
              className="h-36 w-36 border-4 rounded mt-7 text-sm"
              key={item.title}
            >
              <img src={item.img} alt="" className="w-1/3 m-auto" />
              <p>{item.title}</p>
              <p>お湯から{item.time}秒</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
