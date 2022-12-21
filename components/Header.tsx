import Link from "next/link";
import {
  Box,
  Button as ChakraButton,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href: string;
}>;

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.href} passHref legacyBehavior>
      <ChakraButton as="a" variant="ghost">
        {props.children}
      </ChakraButton>
    </Link>
  );
};

type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Link href="/">
          <Heading size="md">Tebak Budaya</Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup>
        <Button href="/sign-in">Masuk</Button>
        <Button href="/register">Daftar</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
