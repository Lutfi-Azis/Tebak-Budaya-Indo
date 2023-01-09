import { useRouter } from "next/router";
import { Card, CardProps, useToken } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  href?: string;
} & CardProps;

const ClickableCard: FC<Props> = ({ href, ...props }) => {
  let handleClick: any;
  const router = useRouter();
  const [borderColor, hoverBorderColor] = useToken("colors", [
    "secondary.200",
    "primary.300",
  ]);
  if (href) handleClick = () => router.push(href);

  return (
    <Card
      borderColor={borderColor}
      borderWidth={2}
      cursor="pointer"
      _hover={{ borderColor: hoverBorderColor }}
      onClick={handleClick}
      {...props}
    />
  );
};

export default ClickableCard;
