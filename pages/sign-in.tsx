import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Flex,
  Spacer,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import FormPage from "../components/FormPage";
import Head from "../components/Head";
import Header from "../components/Header";

export default function SignIn() {
  return (
    <>
      <Head title="Masuk" description="Pemilihan mode permainan Tebak Budaya" />
      <Header />
      <FormPage
        heading="Masuk ke Akunmu"
        caption="untuk pengalaman yang maksimal!"
      >
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
      </FormPage>
    </>
  );
}
