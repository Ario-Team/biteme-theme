import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import OfferBoxStyles from "styles/components/OfferBox/OfferBox.module.scss";

// Import static images
import headingElementPicture from "/public/images/aboutus/heading-element.png";
import specialMenuIcon from "/public/images/OfferBox/special-menu-icon.png";
import specialMenuOneBackground from "/public/images/OfferBox/special-menu-img1.jpg";
import specialMenuTwoBackground from "/public/images/OfferBox/special-menu-img2.jpg";

const OfferBox = () => {
  return (
    <div className={OfferBoxStyles.main_container}>
      <div className={OfferBoxStyles.container}>
        {/* H2 */}
        <h2>Hot offer</h2>
        {/* H1 */}
        <h1>Special for Today</h1>
        {/* Image under the H1 */}
        <figure>
          <Image
            src={headingElementPicture}
            width="171px"
            height="21px"
            alt=""
          />
        </figure>
        {/* Offer Boxes */}
        <div className={OfferBoxStyles.offerboxes}>
          {/* Content */}
          <div>
            <div>
              <div>
                <h3 className={OfferBoxStyles.offerbox_heading3}>
                  Italian pizza
                </h3>
                <div className={OfferBoxStyles.discount_percent}>40% Off</div>
                <div className={OfferBoxStyles.price}>
                  <span>$40</span>
                  <span>$20</span>
                </div>
                <p className={OfferBoxStyles.offerbox_content}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been theindustry standard
                  dummy text ever even lore text yummy sesty the when anunknown
                  printer took galley.
                </p>
                <Link href="/order" passHref={true}>
                  <button className={OfferBoxStyles.offer_button}>
                    Order now
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
                <figure className={OfferBoxStyles.offer_bg_icon}>
                  <Image
                    src={specialMenuIcon}
                    width="168px"
                    height="162px"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
          {/* Image left */}
          <figure>
            <Image
              src={specialMenuOneBackground}
              width="314px"
              height="572px"
              layout="responsive"
              alt=""
            />
          </figure>
          {/* Image right */}
          <figure>
            <Image
              src={specialMenuTwoBackground}
              width="314px"
              height="572px"
              layout="responsive"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default OfferBox;
