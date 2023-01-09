import { CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import QuestionPackage from "../types/QuestionPackage";
import ClickableCard from "./ClickableCard";

type Props = QuestionPackage;

const Package: FC<Props> = (props) => {
  return (
    <ClickableCard
      w={300}
      shadow="md"
      href={process.env.NEXT_PUBLIC_HOST + "/play/package/" + props.id}
    >
      <CardBody p={0}>
        <Image src={props.imageSrc} alt={props.imageAlt} />
      </CardBody>
      <CardFooter justify="center">
        <Text fontSize="xl" fontWeight="bold">
          {props.title}
        </Text>
      </CardFooter>
    </ClickableCard>
  );
};

export default Package;
