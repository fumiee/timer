import { FC } from "react";

type Props = {
  countup: () => void;
};

export const Footer: FC<Props> = (props) => {
  return (
    <footer className="text-sm my-10">
      <button onClick={props.countup}>©yorimaru 2021</button>
    </footer>
  );
};
