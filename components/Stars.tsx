import { FC } from "react";
import { Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import styles from "./Stars.module.css";

type Props = { value: number; amount?: number };

const Stars: FC<Props> = ({ value, amount = 5 }) => {
  const amountFilled = Math.round(value * amount);
  const starsElem: JSX.Element[] = [];
  for (let i = 1; i <= amount; i++) {
    if (i <= amountFilled)
      starsElem.push(
        <Icon boxSize={8} className={styles.starFilled} as={FaStar} />
      );
    else
      starsElem.push(
        <Icon boxSize={8} className={styles.starUnfilled} as={FaStar} />
      );
  }
  return <>{starsElem}</>;
};

export default Stars;
