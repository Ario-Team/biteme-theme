import Head from "next/head";
import Header from "components/Header";
import indexStyles from "styles/pages/index.module.scss";
import AboutUs from "components/AboutUs";
import OfferBox from "components/OfferBox";

export default function Home() {
  return (
    <main className={indexStyles.container}>
      <Header />
      <AboutUs />
      <OfferBox />
    </main>
  );
}
