import { Heading, useToken, Container, ButtonGroup } from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";
import Description from "../components/Description";
import styles from "./index.module.css";
import ReviewCarousel from "../components/ReviewCarousel";
import { REVIEWS } from "../constants";
import ButtonLink from "../components/ButtonLink";

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
        <ButtonGroup>
          <ButtonLink href="/play/selection/gamemode" size="lg">
            MAIN
          </ButtonLink>
          <ButtonLink
            href="/tournament/create"
            size="lg"
            variant="outline"
            colorScheme="secondary"
          >
            Buat Lomba
          </ButtonLink>
        </ButtonGroup>
      </section>
      <Container w={["100%", "80%", "50%"]} py={4}>
        <ReviewCarousel reviews={REVIEWS} />
      </Container>
    </>
    // TODO: Add a leaderboard
  );
}
