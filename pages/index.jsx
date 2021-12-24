import Head from "next/head";
import indexStyles from "styles/pages/index.module.scss";
import dynamic from "next/dynamic";
import Header from "components/Header";
import foodList from "../fakeData/foodMenuData";
import getGalleryData from "functions/getGalleryData";

const AboutUs = dynamic(() => import("components/AboutUs"));
const OfferBox = dynamic(() => import("components/OfferBox"));
const PapularDishes = dynamic(() => import("components/PapularDishes"));
const BookTable = dynamic(() => import("components/BookTable"));
const Team = dynamic(() => import("components/Team"));
const Customers = dynamic(() => import("components/Customers"));
const Statics = dynamic(() => import("components/Statics"));
const Catering = dynamic(() => import("components/Catering"));
const Gallery = dynamic(() => import("components/Gallery"));
const UpcomingEvents = dynamic(() => import("components/UpcomingEvents"));
const ContactUs = dynamic(() => import("components/ContactUs"));
const Newsletter = dynamic(() => import("components/Newsletter"));
const ScrollUpButton = dynamic(() => import("components/ScrollUpButton"));

export default function Home({ foodList, galleryData }) {
  return (
    <main className={indexStyles.container}>
      <Head>
        <title>Biteme | Home</title>
      </Head>
      <Header />
      <AboutUs />
      <OfferBox />
      <PapularDishes />
      <BookTable />
      <Team />
      <Customers />
      <Statics />
      <Catering />
      <Gallery gallery={galleryData} />
      <UpcomingEvents />
      <ContactUs />
      <Newsletter />
      <ScrollUpButton />
    </main>
  );
}

export async function getServerSideProps() {
  const galleryData = await getGalleryData().then((data) => data);
  return {
    props: {
      foodList,
      galleryData,
    },
  };
}
