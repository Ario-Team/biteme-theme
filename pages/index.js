import Head from "next/head";
import Header from "components/Header";
import indexStyles from "styles/index.module.css";

export default function Home() {
  return (
    <main className={indexStyles.container}>
      <Header />
    </main>
  );
}
