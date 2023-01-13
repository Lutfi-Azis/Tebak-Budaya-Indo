import {
  Heading,
  useToken,
  Container,
  ButtonGroup,
  Grid,
  GridItem,
  Text,
  Image,
  IconButton,
  Icon,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import Head from "../components/Head";
import Header from "../components/Header";
import Description from "../components/Description";
import styles from "./index.module.css";
import ReviewCarousel from "../components/ReviewCarousel";
import { REVIEWS } from "../constants";
import ButtonLink from "../components/ButtonLink";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  const [heading, imgBorder] = useToken("colors", [
    "primary.800",
    "primary.300",
  ]);
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
            color={heading}
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
      <Grid templateColumns="repeat(12, 1fr)" gap={4} paddingTop={16}>
        <GridItem colSpan={[12, 12, 8]} className={styles.centerify}>
          <Container>
            <Heading>Menjelajah Indonesia</Heading>
            <Text>
              Berkeliling seluruh Indonesia dari kenyamanan dan keamanan
              kursimu. Temukan berbagai harta karun ilmu saat berpetualangan.
            </Text>
          </Container>
        </GridItem>
        <GridItem colStart={[2, 2, 9]} colEnd={12}>
          <Image
            src={
              process.env.NEXT_PUBLIC_HOST +
              "/assets/images/places/bali-temple.jpg"
            }
            alt="Sebuah bangunan tua di Bali"
            borderColor={imgBorder}
            className={styles.imageBit}
          />
        </GridItem>

        <GridItem colStart={[2, 2, 2]} colEnd={[12, 12, 5]}>
          <Image
            src={
              process.env.NEXT_PUBLIC_HOST +
              "/assets/images/clothing/bali couple.jpg"
            }
            alt="Sebuah bangunan tua di Bali"
            borderColor={imgBorder}
            className={styles.imageBit}
          />
        </GridItem>
        <GridItem colStart={[1, 1, 7]} colEnd={12} className={styles.centerify}>
          <Container>
            <Heading>Mempelajari Budaya</Heading>
            <Text>
              Pelajari budaya-budaya yang tersebar di nusantara melalui
              gambar-gambar. Melatih mata Anda untuk mendeteksi detail-detail
              kebudayaan kecil yang awalnya tidak kasat mata.
            </Text>
          </Container>
        </GridItem>
      </Grid>
      <Container w={["90%", "70%", "40%"]} paddingY={12}>
        <Flex>
          <IconButton
            aria-label={"YouTube link"}
            icon={<Icon boxSize={16} as={FaYoutube} />}
            variant="ghost"
            colorScheme="secondary"
          />
          <Spacer />
          <IconButton
            aria-label={"Twitter link"}
            icon={<Icon boxSize={16} as={FaTwitter} />}
            variant="ghost"
            colorScheme="secondary"
          />
          <Spacer />
          <IconButton
            aria-label={"Twitter link"}
            icon={<Icon boxSize={16} as={FaInstagram} />}
            variant="ghost"
            colorScheme="secondary"
          />
        </Flex>
      </Container>
      <Box
        as="footer"
        textAlign="center"
        height={32}
        className={styles.centerify}
      >
        &#169; Lutfi Azis — 2023
      </Box>
    </>
    // TODO: Add a leaderboard
  );
}
