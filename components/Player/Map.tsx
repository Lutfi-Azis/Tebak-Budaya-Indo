import { FC, useEffect, useRef } from "react";
import Indonesia from "./indonesia.svg";
import PROVINCES from "./provinces";

type Props = { onClose?: () => void; onAnswer?: (answer: string) => void };

const Map: FC<Props> = (props) => {
  const mapRef = useRef<HTMLElement>(null);

  const handleAnswer = (e: Event) => {
    e.stopPropagation();
    props.onAnswer?.(
      (e.currentTarget as HTMLAnchorElement).getAttribute("data-name")!
    );
  };

  useEffect(() => {
    const children = mapRef.current!.children;
    for (let i = 0; i < PROVINCES.length; i++) {
      children[i].setAttribute("data-name", PROVINCES[i]);
      children[i].addEventListener("click", handleAnswer);
    }

    return () => {
      for (let i = 0; i < PROVINCES.length; i++) {
        children[i].removeEventListener("click", handleAnswer);
      }
    };
  });

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return (
    <Indonesia
      onClick={props.onClose}
      ref={mapRef}
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
