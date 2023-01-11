import { FC } from "react";
import Indonesia from "./indonesia.svg";

type Props = { onSelect?: (answer: string) => void };

const Map: FC<Props> = (props) => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return (
    <Indonesia
      width="100%"
      height="100%"
      style={{
        width: 0.8 * vw,
        position: "absolute",
        left: 0.1 * vw,
        top: 0,
        zIndex: 2,
      }}
    />
  );
};

export default Map;
