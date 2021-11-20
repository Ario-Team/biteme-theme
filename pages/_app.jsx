import "styles/globals.scss";
import "animate.css/animate.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "components/Loader";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (...[]) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Loader isLoading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
