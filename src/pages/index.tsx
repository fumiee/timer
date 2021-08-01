import React, { useCallback, useState } from "react";

import { bird } from "../../public/bird";
import { yuderetayo } from "../../public/yuderetayo";
import { Footer } from "../component/Footer";
import { Main } from "../component/Main";
import { StartStop } from "../component/StartStop";
import { Timer } from "../component/Timer";
import { useTimer } from "../useTimer";
import Image from "next/image";
import egg2 from "../../public/photo/egg2.svg";

const Home = () => {
  const [count, setCount] = useState(1);
  const countup = () => {
    setCount((count) => count + 1);
  };

  const { time, start, pause, reset } = useTimer({
    endTime: 0,
    onTimeOver: () => {
      new Audio(count > 5 ? yuderetayo : bird).play();
    },
  });

  const handleChange = useCallback(
    (timeNum: number) => () => {
      reset(timeNum);
    },
    []
  );

  return (
    <div className="text-center font-base mt-6 flex-col flex min-h-screen">
      <div className="flex-1">
        <div className="relative">
          <div className="mb-20 m-auto">
            <Image src={egg2} alt="picture of eggs" />
          </div>
          <header className="absolute top-16 left-0">
            <h1 className="mb-5 text-3xl">ゆでたいまー</h1>
            <p className="text-base">ボタンを押すとタイマーがセット</p>
            <p className="text-xs mt-1">
              ※野菜の茹で時間はシャキシャキ時間です。
            </p>
            <Timer time={time} />
            <StartStop start={start} pause={pause} />
          </header>
          <Main handleChange={handleChange} />
        </div>
      </div>
      <Footer countup={countup} />
    </div>
  );
};

export default Home;
