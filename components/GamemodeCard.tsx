import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  useToken,
} from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  src: string;
  alt: string;
  title: string;
};

const GanenideCard: FC<Props> = (props) => {
  const [borderColor, titleColor] = useToken("colors", [
    "secondary.200",
    "secondary.800",
  ]);
  return (
    <Card width={300} borderColor={borderColor} borderWidth={1}>
      <CardBody p={0}>
        <Image src={props.src} alt={props.alt} />
      </CardBody>
      <CardFooter textAlign="center" display="block">
        <Heading as="h2" fontSize="3xl" color={titleColor}>
          {props.title}
        </Heading>
      </CardFooter>
    </Card>
  );
};

export default GanenideCard;
