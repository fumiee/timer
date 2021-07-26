import React from "react";
import { Caption } from "../component/Caption";

const Home = () => (
  <div className="text-center">
    <div className="relative text-xl flex justify-center mt-7">
      <img src="/egg2.svg" alt="たまごの画像" />
      <header className="absolute">
        <h1 className="mb-3 mt-20">ゆでたいまー</h1>
        <div className="text-sm">
          <p>ボタンを押すとタイマーがセット！</p>
          <p>ブラウザを閉じてもアラームが鳴ります。</p>
        </div>
        <Caption />
      </header>
    </div>
  </div>
);
export default Home;
