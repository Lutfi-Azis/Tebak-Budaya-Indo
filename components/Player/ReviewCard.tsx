import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  useToken,
} from "@chakra-ui/react";
import { FC } from "react";
import Question from "../../types/Question";
import { toTitleCase } from "../../utils";

type Props = { index: number; question: Question; answer: string };

const ReviewCard: FC<Props> = (props) => {
  const isCorrect = props.question.answer === props.answer;
  const [border, heading] = useToken("colors", [
    isCorrect ? "green.300" : "red.300",
    isCorrect ? "green.800" : "red.800",
  ]);
  const stylizedAnswer = toTitleCase(props.answer.replaceAll("-", " "));

  return (
    <Card borderColor={border} borderWidth={3} cursor="pointer">
      <CardBody padding={0}>
        <Image
          src={process.env.NEXT_PUBLIC_HOST + props.question.imageSrc}
          alt={`Gambar di ${stylizedAnswer}`}
        />
      </CardBody>
      <CardFooter>
        <Heading color={heading} size="lg">
          {props.index + 1}. {stylizedAnswer}
        </Heading>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
