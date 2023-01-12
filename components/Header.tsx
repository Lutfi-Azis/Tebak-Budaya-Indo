import Link from "next/link";
import { Box, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import ButtonLink from "./ButtonLink";

type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Link href="/">
          <Heading size="md" fontFamily="Lobster" fontWeight={400}>
            Tebak Budaya
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup colorScheme="gray">
        <ButtonLink variant="ghost" href="/sign-in">
          Masuk
        </ButtonLink>
        <ButtonLink variant="ghost" href="/register">
          Daftar
        </ButtonLink>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
