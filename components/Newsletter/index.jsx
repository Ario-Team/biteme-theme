import NewsletterStyles from "styles/components/Newsletter/Newsletter.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faFacebookF,
  faGooglePlusG,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Import static images
import headingElementPicture from "/public/images/aboutus/heading-element.png";

const Newsletter = () => {
  return (
    <div className={NewsletterStyles.container}>
      <h2 className={NewsletterStyles.heading2}>Be updated</h2>
      <h1 className={NewsletterStyles.heading1}>Subscribe us</h1>
      <figure className={NewsletterStyles.sub_image_container}>
        <Image
          className={NewsletterStyles.sub_image_container}
          src={headingElementPicture}
          width="171px"
          height="21px"
          alt="Subheader image"
        />
      </figure>
      <p className={NewsletterStyles.paragraph}>
        Subscribe to our Newsletter to get first
        <br />
        Gift voucher by StartLorem Ipsum is simply dummy
      </p>
      <form className={NewsletterStyles.form}>
        <div className={NewsletterStyles.email_container}>
          <input
            className={NewsletterStyles.email_input}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className={NewsletterStyles.submit_button_container}>
          <button className={NewsletterStyles.submit_button} type="submit">
            <FontAwesomeIcon
              className={NewsletterStyles.social_icon_svg}
              icon={faPaperPlane}
            />
          </button>
        </div>
      </form>
      <div className={NewsletterStyles.social_icon_container}>
        <Link href="/facebook" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon
              className={NewsletterStyles.social_icon_svg}
              icon={faFacebookF}
            />
          </div>
        </Link>
        <Link href="/twitter" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon
              className={NewsletterStyles.social_icon_svg}
              icon={faTwitter}
            />
          </div>
        </Link>
        <Link href="/googlePlus" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon
              className={NewsletterStyles.social_icon_svg}
              icon={faGooglePlusG}
            />
          </div>
        </Link>
        <Link href="/pinterest" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon
              className={NewsletterStyles.social_icon_svg}
              icon={faPinterest}
            />
          </div>
        </Link>
        <Link href="/youtube" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon
              className={NewsletterStyles.social_icon_svg}
              icon={faYoutube}
            />
          </div>
        </Link>
      </div>
      <div className={NewsletterStyles.copyright}>
        <p className={NewsletterStyles.copyright_paragraph}>
          © 2021, All Rights Reserved, Made by{" "}
        </p>
        <Link href="/">Ario Team</Link>
      </div>
    </div>
  );
};

export default Newsletter;
