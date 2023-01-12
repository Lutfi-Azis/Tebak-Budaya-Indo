import { Container, Heading, Text, ContainerProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  heading?: string;
  caption?: string;
}> &
  ContainerProps;

const FormPage: FC<Props> = ({ heading, caption, ...props }) => {
  return (
    <>
      <Container textAlign="center" pb={10}>
        {heading && <Heading>{heading}</Heading>}
        {caption && <Text>{caption}</Text>}
      </Container>
      <Container
        w={["100%", "80%", "60%"]}
        shadow="xl"
        borderRadius="md"
        py="8"
        px="8"
        borderWidth={1}
        {...props}
      />
    </>
  );
};

export default FormPage;
