/* eslint-disable react/jsx-handler-names */
import Image from "next/image";
import React, { useCallback, useState } from "react";

import egg2 from "../../public/photo/egg2.svg";
import bird from "../../public/sound/bird.mp3";
import yuderetayo from "../../public/sound/yuderetayo.mp3";
import { Footer } from "../component/Footer";
import { Main } from "../component/Main";
import { StartStop } from "../component/StartStop";
import { Timer } from "../component/Timer";
import { useTimer } from "../useTimer";

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
    <div className="text-center mt-6 flex-col flex min-h-screen font-base text-gray-600">
      <div className="flex-1">
        <div className="relative">
          <div className="mb-20 m-auto">
            <Image src={egg2} alt="picture of eggs" />
          </div>
          <header className="absolute top-16 left-0">
            <h1 className="mb-4 text-3xl">ゆでたいまー</h1>
            <p>ボタンを押すとタイマーがセット</p>
            <p>野菜の茹で時間はシャキシャキ時間です</p>
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
