import Styles from "styles/components/PapularDishes/PapularDishes.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Import static images
import headingElementPicture from "/public/images/aboutus/heading-element.png";
import headingElementTwoPicture from "/public/images/aboutus/heading-element2.png";
import specialMenuIcon from "/public/images/OfferBox/special-menu-icon.png";

const PapularDishes = () => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.heading2}>You love</h2>
      <h1 className={Styles.heading1}>Papular Dishes</h1>
      <div className={Styles.heading_sub_image}>
        <Image src={headingElementPicture} width="171px" height="21px" alt="" />
      </div>
      <div className={Styles.items_container}>
        <section className={Styles.item}>
          <figure className={Styles.item_image}>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular1.jpg"
              layout="fill"
              alt=""
            />
          </figure>
          <div className={Styles.item_content}>
            <h2 className={Styles.item_content_price}>$20</h2>
            <h1 className={Styles.item_content_title}>
              Italian Pizza
              <figure className={Styles.icon_image}>
                <Image
                  src={headingElementTwoPicture}
                  width="171px"
                  height="21px"
                  alt=""
                />
              </figure>
            </h1>
            <p className={Styles.item_content_paragraphh}>
              Tomato, fresh milk, potatos Lorem Ipsum is simply dummy text
            </p>
            <Link href="/s1" passHref>
              <button className={Styles.item_content_button}>
                {" "}
                Order Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className={Styles.item_corner_image}>
            <Image src={specialMenuIcon} layout="fill" alt="" />
          </div>
        </section>
        <div className={Styles.item}>
          <figure className={Styles.item_image}>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular2.jpg"
              layout="fill"
              alt=""
            />
          </figure>
          <div className={Styles.item_content}>
            <h2 className={Styles.item_content_price}>$20</h2>
            <h1 className={Styles.item_content_title}>
              Italian Pizza
              <figure className={Styles.icon_image}>
                <Image
                  src={headingElementTwoPicture}
                  width="171px"
                  height="21px"
                  alt=""
                />
              </figure>
            </h1>
            <p className={Styles.item_content_paragraphh}>
              Tomato, fresh milk, potatos Lorem Ipsum is simply dummy text
            </p>
            <Link href="/s1" passHref>
              <button className={Styles.item_content_button}>
                {" "}
                Order Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className={Styles.item_corner_image}>
            <Image src={specialMenuIcon} layout="fill" alt="" />
          </div>
        </div>
        <div className={Styles.item}>
          <figure className={Styles.item_image}>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular3.jpg"
              layout="fill"
              alt=""
            />
          </figure>
          <div className={Styles.item_content}>
            <h2 className={Styles.item_content_price}>$20</h2>
            <h1 className={Styles.item_content_title}>
              Italian Pizza
              <figure className={Styles.icon_image}>
                <Image
                  src={headingElementTwoPicture}
                  width="171px"
                  height="21px"
                  alt=""
                />
              </figure>
            </h1>
            <p className={Styles.item_content_paragraphh}>
              Tomato, fresh milk, potatos Lorem Ipsum is simply dummy text
            </p>
            <Link href="/s1" passHref>
              <button className={Styles.item_content_button}>
                Order Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className={Styles.item_corner_image}>
            <Image src={specialMenuIcon} layout="fill" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PapularDishes;
