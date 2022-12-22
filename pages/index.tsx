import Link from "next/link";
import { Heading, Button, useToken } from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";
import Description from "../components/Description";

export default function Home() {
  const [primary600, primary800] = useToken("colors", [
    "primary.600",
    "primary.800",
  ]);
  return (
    <>
      <Head description="Halaman utama permainan Tebak Budaya" />
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
        <Description>
          Mulai mengasah ilmu kebudayaanmu dengan bermain!
        </Description>
        <Link href="/play/selection/gamemode" passHref legacyBehavior>
          <Button as="a" size="lg">
            MAIN
          </Button>
        </Link>
      </section>
    </>
    // TODO: Add a leaderboard
  );
}
