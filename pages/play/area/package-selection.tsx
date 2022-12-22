import next from "next";
import Head from "../../../components/Head";
import Header from "../../../components/Header";
import PackageSelection from "../../../components/PackageSelection";

const packages = [
  {
    author: "Lutfi",
    description: "Menjelajahi keindahan-keindahan alam di Indonesia",
    imageAlt: "Raja Ampat",
    imageSrc:
      process.env.NEXT_PUBLIC_HOST +
      "/assets/images/places/papua raja ampat.jpg",
    title: "Keindahan Alam",
  },
  {
    author: "Lutfi",
    description: "Menjelajahi titik-titik sejarah di Indonesia",
    imageAlt: "Lokasi Sejarah",
    imageSrc:
      process.env.NEXT_PUBLIC_HOST +
      "/assets/images/places/jawa-tengah borobudur.jpg",
    title: "Lokasi Sejarah",
  },
];

export default function AreaPackageSelection() {
  return (
    <>
      <Head
        title="Pemilihan Paket"
        description="Pemilihan paket pertanyaan Tebak Wilayah"
      />
      <Header />
      <PackageSelection packages={packages} />
    </>
  );
}
