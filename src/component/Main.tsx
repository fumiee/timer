import { FC, memo } from "react";

type ITEM = {
  img: string;
  title: string;
  time: number;
  solt: string;
};

const ITEM = [
  { img: "/photo/prac.svg", title: "お試し", time: 3, solt: "" },
  { img: "/photo/moyashi.png", title: "もやし", time: 40, solt: "酢塩湯に" },
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
  { img: "/photo/komatuna.png", title: "小松菜", time: 40, solt: "塩湯に" },
  { img: "/photo/okura.png", title: "オクラ", time: 60, solt: "塩湯に" },
];

type MainProps = {
  handleChange: (timeNum: number) => () => void;
};

export const Main: FC<MainProps> = memo((props) => {
  return (
    <div className="flex-wrap flex justify-around">
      {ITEM.map((item) => {
        return (
          <button
            onClick={props.handleChange(item.time)}
            className="h-36 w-36 border-4 rounded mt-7 text-sm"
            key={item.title}
          >
            <p className="mb-2 text-lg">{item.title}</p>
            <img
              src={item.img}
              alt=""
              height="30px"
              className="w-1/3 m-auto h-12"
            />
            <div className="flex justify-center text-center mt-3">
              <img src="/timer.svg" className="h-4 opacity-30 mt-1" />
              <div className="text-sm mb-2">
                {" "}
                {item.solt}
                {item.time}秒
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
});
