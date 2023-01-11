import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import Question from "../../types/Question";
import ReviewCard from "./ReviewCard";

type Props = {
  questions: Question[];
  answers: string[];
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
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} padding={8}>
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
