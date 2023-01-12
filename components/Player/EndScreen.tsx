import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaHome, FaStepBackward } from "react-icons/fa";
import Question from "../../types/Question";
import ButtonLink from "../ButtonLink";
import ReviewCard from "./ReviewCard";

type Props = {
  questions: Question[];
  answers: string[];
  onReplay?: () => void;
};

const EndScreen: FC<Props> = (props) => {
  let correctAnswers = 0;
  props.questions.forEach((q, i) => {
    if (q.answer === props.answers[i]) correctAnswers++;
  });
  const correctAnswersPercent = Math.round(
    (100 * correctAnswers) / props.answers.length
  );

  return (
    <>
      <Box textAlign="center" paddingY={10}>
        <Text size="lg">Anda benar</Text>
        <Heading size="4xl">{correctAnswersPercent} %</Heading>
        <ButtonGroup paddingTop={4}>
          <Button
            onClick={props.onReplay}
            leftIcon={<FaStepBackward />}
            variant="outline"
          >
            Main Lagi
          </Button>
          <ButtonLink href={process.env.NEXT_PUBLIC_HOST} leftIcon={<FaHome />}>
            Halaman Utama
          </ButtonLink>
        </ButtonGroup>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} px={12} py={8}>
        {props.questions.map((q, i) => (
          <ReviewCard
            key={q.id}
            index={i}
            question={q}
            answer={props.answers[i]}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default EndScreen;
