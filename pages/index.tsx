import Link from "next/link";
import { Heading, Button, useToken, Container } from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";
import Description from "../components/Description";
import styles from "./index.module.css";
import ReviewCarousel from "../components/ReviewCarousel";
import { REVIEWS } from "../constants";

export default function Home() {
  const [primary800] = useToken("colors", ["primary.800"]);
  return (
    <>
      <Head description="Halaman utama permainan Tebak Budaya" />
      <Header />
      <section className={styles.head}>
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
      <Container w={["100%", "80%", "50%"]} py={4}>
        <ReviewCarousel reviews={REVIEWS} />
      </Container>
    </>
    // TODO: Add a leaderboard
  );
}
