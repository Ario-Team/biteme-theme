import CateringStyles from "styles/components/Catering/Catering.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Import static images
import headingElementPicture from "/public/images/aboutus/heading-element.png";

const Catering = () => {
  return (
    <div className={CateringStyles.container}>
      <section className={CateringStyles.content_container}>
        <div className={CateringStyles.content}>
          <h2 className={CateringStyles.heading2}>For your special day</h2>
          <h1 className={CateringStyles.heading1}>Catering service</h1>
          <figure className={CateringStyles.sub_image_container}>
            <Image
              src={headingElementPicture}
              width="171px"
              height="21px"
              alt=""
              className={CateringStyles.sub_image}
            />
          </figure>
          <p className={CateringStyles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been theindustry&apos;sstandard dummy text
            ever since the when anunknown printer took galley.
          </p>
          <Link href="/" passHref>
            <span className={CateringStyles.button}>
              Order now <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Catering;
