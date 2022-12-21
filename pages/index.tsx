import { Heading, Text, Button, useToken } from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";

export default function Home() {
  const [primary600, primary800] = useToken("colors", [
    "primary.600",
    "primary.800",
  ]);
  return (
    <>
      <Head
        title="Tebak Budaya"
        description="Halaman utama permainan Tebak Budaya"
      />
      <Header />
      <section style={{ textAlign: "center" }}>
        <header>
          <Heading
            as="h1"
            size="4xl"
            fontFamily="Lobster"
            fontWeight={400}
            py={16}
            color={primary800}
          >
            Tebak Budaya
          </Heading>
        </header>
        <Text color={primary600} fontSize="xl" pb={8}>
          Mulai mengasah ilmu kebudayaanmu dengan bermain!
        </Text>
        <Button size="lg">MAIN</Button>
      </section>
    </>
  );
}
