import Head from "next/head";
import indexStyles from "styles/pages/index.module.scss";
import dynamic from "next/dynamic";
import Header from "components/Header";

const AboutUs = dynamic(() => import("components/AboutUs"));
const OfferBox = dynamic(() => import("components/OfferBox"));
const FoodMenu = dynamic(() => import("components/FoodMenu"));
const PapularDishes = dynamic(() => import("components/PapularDishes"));
const BookTable = dynamic(() => import("components/BookTable"));
const Team = dynamic(() => import("components/Team"));

export default function Home({ list }) {
  return (
    <main className={indexStyles.container}>
      <Head>
        <title>Biteme | Home</title>
      </Head>
      <Header />
      <AboutUs />
      <OfferBox />
      <FoodMenu list={list} />
      <PapularDishes />
      <BookTable />
      <Team />
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      list: [
        {
          title: "snacks",
          primaryImage:
            "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-dish1.jpg",
          foods: [
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
          ],
        },
        {
          title: "snacks",
          primaryImage:
            "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-dish1.jpg",
          foods: [
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
          ],
        },
        {
          title: "snacks",
          primaryImage:
            "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-dish1.jpg",
          foods: [
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Jumbo Shrimp",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish1.jpg",
              description:
                "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand typesettin simply dummy text.",
              price: "$45",
            },
          ],
        },

        {
          title: "Desert",
          primaryImage:
            "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/menu-dish2.jpg",
          foods: [
            {
              title: "Chese Bread",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish2.jpg",
              description:
                "Tomato Ipsum is simplydummy text of the fresh milk potatos Lorem printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Chese Bread",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish2.jpg",
              description:
                "Tomato Ipsum is simplydummy text of the fresh milk potatos Lorem printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Chese Bread",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish2.jpg",
              description:
                "Tomato Ipsum is simplydummy text of the fresh milk potatos Lorem printingand typesettin simply dummy text.",
              price: "$45",
            },
            {
              title: "Chese Bread",
              image:
                "http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/dish2.jpg",
              description:
                "Tomato Ipsum is simplydummy text of the fresh milk potatos Lorem printingand typesettin simply dummy text.",
              price: "$45",
            },
          ],
        },
      ],
    },
  };
}
