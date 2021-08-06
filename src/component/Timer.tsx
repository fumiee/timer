import type { FC } from "react";

type Props = {
  time: number;
};

export const Timer: FC<Props> = (props) => {
  return <p className="text-5xl m-10 font-base">{props.time}</p>;
};
