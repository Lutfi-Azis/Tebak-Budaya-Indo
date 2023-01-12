import Link from "next/link";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href?: string;
}> &
  ButtonProps;

const Button: FC<Props> = ({ href, ...props }) => {
  return (
    <Link href={href || "#"} passHref legacyBehavior>
      <ChakraButton as="a" {...props} />
    </Link>
  );
};

export default Button;
