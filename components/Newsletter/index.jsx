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

const Newsletter = () => {
  return (
    <div className={NewsletterStyles.container}>
      <h2 className={NewsletterStyles.heading2}>Be updated</h2>
      <h1 className={NewsletterStyles.heading1}>Subscribe us</h1>
      <figure className={NewsletterStyles.sub_image_container}>
        <Image
          className={NewsletterStyles.sub_image_container}
          src="/images/aboutus/heading-element.png"
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
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
      <div className={NewsletterStyles.social_icon_container}>
        <Link href="/facebook" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
        </Link>
        <Link href="/twitter" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </Link>
        <Link href="/googlePlus" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon icon={faGooglePlusG} />
          </div>
        </Link>
        <Link href="/pinterest" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </Link>
        <Link href="/youtube" passHref>
          <div className={NewsletterStyles.social_icon}>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </Link>
      </div>
      <p className={NewsletterStyles.copyright}>
        © 2021, All Rights Reserved, Made by <Link href="/">Ario Team</Link>
      </p>
    </div>
  );
};

export default Newsletter;
