import { Box, Button, VStack } from "@chakra-ui/react";
import { FC } from "react";
import Description from "../Description";

type Props = { onStart?: () => void };

const Unstarted: FC<Props> = (props) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack textAlign="center" spacing={8}>
        <Description height="auto" fontSize="3xl">
          Tekan tombol untuk memulai!
        </Description>
        <Button size="lg" onClick={props.onStart}>
          MULAI
        </Button>
      </VStack>
    </Box>
  );
};

export default Unstarted;
