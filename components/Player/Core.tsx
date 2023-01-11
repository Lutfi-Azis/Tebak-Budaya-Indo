import { FC, useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import Question from "../../types/Question";
import Map from "./Map";

type Props = { question: Question; onAnswer?: (answer: string) => void };

const Core: FC<Props> = ({ question, onAnswer = () => {} }) => {
  const [mapVisible, setMapVisibility] = useState(false);
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={process.env.NEXT_PUBLIC_HOST + question.imageSrc}
        alt="Soal tebak gambar"
        maxHeight="100%"
      />
      <Button
        zIndex={3}
        position="absolute"
        bottom={20}
        right={20}
        onClick={() => setMapVisibility(!mapVisible)}
      >
        JAWAB
      </Button>
      {mapVisible && <Map />}
    </Box>
  );
};

export default Core;
