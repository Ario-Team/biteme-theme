import Styles from "styles/components/PapularDishes/PapularDishes.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PapularDishes = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.heading2}>You love</h2>
      <h1 className={Styles.heading1}>Papular Dishes</h1>
      <div className={Styles.heading_sub_image}>
        <Image
          src="/images/aboutus/heading-element.png"
          width="171px"
          height="21px"
          alt=""
        />
      </div>
      <div className={Styles.items_container}>
        <div className={Styles.item}>
          <figure className={Styles.item_image}>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular1.jpg"
              layout="fill"
              alt=""
            />
          </figure>
          <div className={Styles.item_content}>
            <h6 className={Styles.item_content_price}>$20</h6>
            <h4 className={Styles.item_content_title}>Italian Pizza</h4>
            <Image
              src="/images/aboutus/heading-element2.png"
              width="171px"
              height="21px"
              alt=""
            />
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
            <Image
              src="/images/OfferBox/special-menu-icon.png"
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className={Styles.item}>
          <figure className={Styles.item_image}>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/popular2.jpg"
              layout="fill"
              alt=""
            />
          </figure>
          <div className={Styles.item_content}>
            <h6 className={Styles.item_content_price}>$20</h6>
            <h4 className={Styles.item_content_title}>Italian Pizza</h4>
            <Image
              src="/images/aboutus/heading-element2.png"
              width="171px"
              height="21px"
              alt=""
            />
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
            <Image
              src="/images/OfferBox/special-menu-icon.png"
              layout="fill"
              alt=""
            />
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
            <h6 className={Styles.item_content_price}>$20</h6>
            <h4 className={Styles.item_content_title}>Italian Pizza</h4>
            <Image
              src="/images/aboutus/heading-element2.png"
              width="171px"
              height="21px"
              alt=""
            />
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
            <Image
              src="/images/OfferBox/special-menu-icon.png"
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapularDishes;
