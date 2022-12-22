import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Flex,
  Spacer,
  Input,
  Link,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";

export default function SignIn() {
  return (
    <>
      <Head title="Masuk" description="Pemilihan mode permainan Tebak Budaya" />
      <Header />
      <Container textAlign="center" pb={10}>
        <Heading>Masuk ke Akunmu</Heading>
        <Text>untuk pengalaman yang maksimal!</Text>
      </Container>
      <Container maxW="md">
        <form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Alamat Email</FormLabel>
              <Input type="email" placeholder="agus@gmail.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Kata Sandi</FormLabel>
              <Input type="password" />
            </FormControl>
            <Flex>
              <Link color="blue.500">Lupa kata sandi?</Link>
              <Spacer />
              <Checkbox>Ingat saya</Checkbox>
            </Flex>
            <Button size="lg" width="100%" type="submit">
              Masuk
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}
