import { Wrap } from "@chakra-ui/react";
import Description from "../../../components/Description";
import Head from "../../../components/Head";
import Header from "../../../components/Header";
import GamemodeCard from "../../../components/GamemodeCard";

export default function Home() {
  return (
    <>
      <Head
        title="Pemilihan Mode"
        description="Pemilihan mode permainan Tebak Budaya"
      />
      <Header />
      <section style={{ textAlign: "center" }}>
        <Description>Pilihlah mode yang ingin Anda mainkan</Description>
        <Wrap spacing={4} justify="center">
          <GamemodeCard
            src={
              process.env.NEXT_PUBLIC_HOST + "/assets/images/bali-building.jpg"
            }
            alt="Gedung tradisional di Bali."
            title="Tebak Wilayah"
            href={process.env.NEXT_PUBLIC_HOST + "/play/selection/package/area"}
          />
          <GamemodeCard
            src={
              process.env.NEXT_PUBLIC_HOST +
              "/assets/images/traditional-dress.jpg"
            }
            alt="Sepasang pria dan wanita dengan pakaian adat."
            title="Tebak Baju Adat"
            href={
              process.env.NEXT_PUBLIC_HOST + "/play/selection/package/clothing"
            }
          />
        </Wrap>
      </section>
    </>
  );
}
