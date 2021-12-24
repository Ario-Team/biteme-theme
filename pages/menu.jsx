import foodList from "fakeData/foodMenuData";
import dynamic from "next/dynamic";
import Head from "next/head";

const FoodMenu = dynamic(() => import("components/FoodMenu"));
const Navbar = dynamic(() => import("components/Navbar"));
const Newsletter = dynamic(() => import("components/Newsletter"));
const ScrollUpButton = dynamic(() => import("components/ScrollUpButton"));

export default function Menu() {
  return (
    <div className="container">
      <Head>
        <title>Biteme | Menu</title>
      </Head>
      <Navbar />
      <FoodMenu list={foodList} />
      <Newsletter />
      <ScrollUpButton />
    </div>
  );
}
