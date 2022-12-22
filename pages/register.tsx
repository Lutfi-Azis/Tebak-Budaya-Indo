import NextLink from "next/link";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Link,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";

export default function Register() {
  return (
    <>
      <Head
        title="Daftar"
        description="Pemilihan mode permainan Tebak Budaya"
      />
      <Header />
      <Container textAlign="center" pb={10}>
        <Heading>Buatlah Akun</Heading>
        <Text>untuk melacak perkembanganmu!</Text>
      </Container>
      <Container maxW="md">
        <form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Nama Lengkap</FormLabel>
              <Input type="text" placeholder="Nama Lengkap" />
            </FormControl>
            <FormControl>
              <FormLabel>Alamat Email</FormLabel>
              <Input type="email" placeholder="agus@gmail.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Kata Sandi</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl>
              <FormLabel>Ulangi Kata Sandi</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button size="lg" width="100%" type="submit">
              Daftar
            </Button>
            <Flex>
              <Text>
                Sudah mendaftar?
                <NextLink href="/sign-in" passHref legacyBehavior>
                  <Link color="blue.500"> Silakan masuk</Link>
                </NextLink>
              </Text>
            </Flex>
          </Stack>
        </form>
      </Container>
    </>
  );
}
