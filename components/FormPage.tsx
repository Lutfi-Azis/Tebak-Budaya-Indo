import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  heading: string;
  caption: string;
}>;

const FormPage: FC<Props> = (props) => {
  return (
    <>
      <Container textAlign="center" pb={10}>
        <Heading>{props.heading}</Heading>
        <Text>{props.caption}</Text>
      </Container>
      <Container
        maxW="md"
        shadow="xl"
        borderRadius="md"
        py="8"
        px="8"
        borderWidth={1}
      >
        {props.children}
      </Container>
    </>
  );
};

export default FormPage;
