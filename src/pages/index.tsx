import React, { useCallback, useState } from "react";
import { Main } from "../component/Main";
import { Html } from "next/document";
import { Footer } from "../component/Footer";
import { Timer } from "../component/Timer";

{
  /* <Html lang="ja"> */
}
const Home = () => {
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
    <div className="text-center font-base grid">
      <div className="relative flex justify-center mt-7">
        <img src="/photo/egg2.svg" alt="たまごの絵" className="mb-24" />
        <div className="absolute">
          <header>
            <h1 className="mb-5 mt-20 text-3xl">ゆでたいまー</h1>
            <p className="text-base">ボタンを押すとタイマーがセット</p>
            <p className="text-xs mt-1">
              ※野菜の茹で時間はシャキシャキ時間です。
            </p>
            <Timer time={time} count={count} />
          </header>
          <div>
            <Main handleChange={handleChange} />
          </div>
          <div className="text-sm my-3 bottom-0">
            <Footer countup={countup} />
          </div>
        </div>
      </div>
    </div>
  );
};
// </Html>
export default Home;
