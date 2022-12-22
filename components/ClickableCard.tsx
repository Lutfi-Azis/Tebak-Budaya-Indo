import { Card, CardProps, useToken } from "@chakra-ui/react";
import { FC } from "react";

type Props = CardProps;

const Element: FC<Props> = (props) => {
  const [borderColor, hoverBorderColor] = useToken("colors", [
    "secondary.200",
    "primary.300",
  ]);
  return (
    <Card
      borderColor={borderColor}
      borderWidth={2}
      cursor="pointer"
      _hover={{ borderColor: hoverBorderColor }}
      {...props}
    />
  );
};

export default Element;
