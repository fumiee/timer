import React, { FC, useCallback, useState } from "react";
import { Footer } from "./Footer";
import { Timer } from "./Timer";

type ITEM = {
  img: string;
  title: string;
  time: number;
};

const ITEM = [
  {
    img: "/photo/yudetamago.png",
    title: "ゆで卵",
    time: 540,
    solt: "お湯に",
  },
  { img: "/photo/hanjyuku.png", title: "半熟卵", time: 360, solt: "お湯に" },
  {
    img: "/photo/burokkori.png",
    title: "ブロッコリー",
    time: 120,
    solt: "塩湯に",
  },
  {
    img: "/photo/hourensou.png",
    title: "ほうれん草",
    time: 60,
    solt: "塩湯に",
  },
  { img: "/photo/okura.png", title: "オクラ", time: 60, solt: "塩湯に" },
  { img: "/photo/komatuna.png", title: "小松菜", time: 5, solt: "塩湯に" },
];

export const Caption: FC = () => {
  const [count, setCount] = useState(1);
  const countup = () => {
    setCount((count) => count + 1);
  };

  const [time, setTime] = useState<number>(0);
  const handleChange = useCallback(
    (timeNum: number) => () => {
      setTime(timeNum);
    },
    [time]
  );
  return (
    <div>
      <Timer time={time} count={count} />
      <div className="flex-wrap flex justify-around min-h-full">
        {ITEM.map((item) => {
          return (
            <button
              onClick={handleChange(item.time)}
              className="h-36 w-36 border-4 rounded mt-7 text-sm"
              key={item.title}
            >
              <p className="mb-3 text-lg">{item.title}</p>
              <img
                src={item.img}
                alt=""
                height="30px"
                className="w-1/3 m-auto h-12"
              />
              <div className="flex justify-center text-center mt-3">
                <img src="/timer.svg" className="h-4 opacity-30" />
                <div className="text-xs">
                  {" "}
                  {item.solt}
                  {item.time}秒
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <Footer countup={countup} />
    </div>
  );
};
