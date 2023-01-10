import { FC } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import Question from "../../types/Question";

type Props = { question: Question; onAnswer?: (answer: string) => void };

const Core: FC<Props> = ({ question, onAnswer = () => {} }) => {
  return (
    <Box height="100vh" width="100%">
      <Image
        src={process.env.NEXT_PUBLIC_HOST + question.imageSrc}
        alt="Soal tebak gambar"
        maxHeight="80%"
      />
      <Button size="lg" onClick={() => onAnswer("jawa-timur")}>
        JAWAB
      </Button>
    </Box>
  );
};

export default Core;
