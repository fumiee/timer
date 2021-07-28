import React from "react";
import { Caption } from "../component/Caption";

const Home = () => (
  <div className="text-center font-base">
    <div className="relative text-3xl flex justify-center mt-7">
      <img src="/photo/egg2.svg" alt="たまごの画像" />
      <header className="absolute">
        <h1 className="mb-5 mt-20">ゆでたいまー</h1>
        <div className="text-base">
          <p>ボタンを押すとタイマーがセット</p>
          <p className="text-xs mt-1">
            ※野菜の茹で時間はシャキシャキ時間です。
          </p>
        </div>
        <Caption />
      </header>
    </div>
  </div>
);
export default Home;
