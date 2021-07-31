import { FC, memo } from "react";

type Props = {
  countup: () => void;
};

export const Footer: FC<Props> = memo((props) => {
  return (
    <footer className="text-sm my-3">
      <button onClick={props.countup}>©yorimaru 2021</button>
    </footer>
  );
});
