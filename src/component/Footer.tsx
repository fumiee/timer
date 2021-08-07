import type { FC } from "react";
import { memo } from "react";

type Props = {
  countup: () => void;
};

export const Footer: FC<Props> = memo((props) => {
  return (
    <footer className="text-sm my-3">
      <button onClick={props.countup} className="active:bg-footer">
        ©yorimaru 2021
      </button>
    </footer>
  );
});
