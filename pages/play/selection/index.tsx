import Head from "../../../components/Head";
import Header from "../../../components/Header";

export default function Home() {
  return (
    <>
      <Head
        title="Tebak Budaya"
        description="Halaman utama permainan Tebak Budaya"
      />
      <Header />
      <section>
        <header>
          <h1>Tebak Budaya</h1>
        </header>
        <p>Mulai mengasah ilmu kebudayaanmu dengan bermain!</p>
        <a>MAIN</a>
      </section>
    </>
  );
}
