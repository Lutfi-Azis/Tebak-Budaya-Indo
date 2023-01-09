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
  const [titleColor] = useToken("colors", ["secondary.800"]);

  return (
    <ClickableCard width={300} href={props.href}>
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
