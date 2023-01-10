import { FC, PropsWithChildren } from "react";
import { Box, ChakraProps, Text, useToken } from "@chakra-ui/react";

type Props = PropsWithChildren<{}> & ChakraProps;

const Description: FC<Props> = ({
  children,
  height = 100,
  fontSize = "xl",
  ...props
}) => {
  const [primary600] = useToken("colors", ["primary.600"]);
  return (
    <Box height={height} {...props}>
      <Text color={primary600} fontSize={fontSize}>
        {children}
      </Text>
    </Box>
  );
};

export default Description;
