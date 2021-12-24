import dynamic from "next/dynamic";
import Link from "next/link";
import pageNotFoundStyle from "styles/pages/pageNotFound/PageNotFound.module.scss";

const Navbar = dynamic(() => import("components/Navbar"));

const pageNotFound = () => {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        backgroundImage: 'url("/images/BookTable/book-table-bg.jpg")',
      }}
    >
      <Navbar />
      <div className={pageNotFoundStyle.content_container}>
        <h1 className={pageNotFoundStyle.title}>404</h1>
        <p className={pageNotFoundStyle.description}>
          Whoops... Chef Not Found !!!!
        </p>
        <Link href="/" passHref>
          <button className={pageNotFoundStyle.button}>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default pageNotFound;
