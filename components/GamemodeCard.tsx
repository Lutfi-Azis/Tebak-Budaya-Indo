import { useRouter } from "next/router";
import {
  CardBody,
  CardFooter,
  Heading,
  Image,
  useToken,
} from "@chakra-ui/react";
import { FC } from "react";
import ClickableCard from "./ClickableCard";

type Props = {
  src: string;
  alt: string;
  title: string;
  href?: string;
};

const GamemodeCard: FC<Props> = (props) => {
  const router = useRouter();
  const [titleColor] = useToken("colors", ["secondary.800"]);
  const handleClick = () => {
    if (props.href) router.push(props.href);
  };

  return (
    <ClickableCard width={300} onClick={handleClick}>
      <CardBody p={0}>
        <Image src={props.src} alt={props.alt} />
      </CardBody>
      <CardFooter textAlign="center" display="block">
        <Heading as="h2" fontSize="3xl" color={titleColor}>
          {props.title}
        </Heading>
      </CardFooter>
    </ClickableCard>
  );
};

export default GamemodeCard;
