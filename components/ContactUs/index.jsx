import ContactUsStyle from "styles/components/ContactUs/ContactUs.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import animationController from "./utils/animationController";

const ContactUs = () => {
  return (
    <InView
      as="div"
      onChange={animationController}
      threshold={[0.05, 0.4]}
      className={ContactUsStyle.container}
    >
      <div className={ContactUsStyle.animation_container}>
        <div className={ContactUsStyle.animation_one}>
          <figure className={ContactUsStyle.animation_one_image_container}>
            <Image
              className={ContactUsStyle.animation_one_image}
              src="/images/ContactUs/open-sign-animation.gif"
              width="316px"
              height="207px"
              alt="Animation picture"
            />
          </figure>
        </div>
        <div className={ContactUsStyle.animation_two}>
          <figure className={ContactUsStyle.animation_two_image_container}>
            <Image
              className={ContactUsStyle.animation_two_image}
              src="/images/ContactUs/contact-elements-2.png"
              width="150px"
              height="178px"
              alt="Animation picture"
            />
          </figure>
        </div>
      </div>
      <div className={ContactUsStyle.form_container}>
        <div className={ContactUsStyle.form}>
          <h2 className={ContactUsStyle.heading2}>Contact us</h2>
          <h1 className={ContactUsStyle.heading1}>Reach to us</h1>
          <figure className={ContactUsStyle.image_container}>
            <Image
              className={ContactUsStyle.image}
              src="/images/aboutus/heading-element.png"
              width="171px"
              height="21px"
              alt="Heading element"
            />
          </figure>
          <h4 className={ContactUsStyle.heading4}>Opening hours</h4>
          <div className={ContactUsStyle.times_container}>
            <div className={ContactUsStyle.time_container}>
              <p>Mon - Thu</p>
              <div>
                <span className={ContactUsStyle.time}>8.00 am to 12.00 pm</span>
              </div>
            </div>
            <div className={ContactUsStyle.time_container}>
              <p>Mon - Thu</p>
              <div>
                <span className={ContactUsStyle.time}>8.00 am to 12.00 pm</span>
              </div>
            </div>
          </div>
          <h4 className={ContactUsStyle.heading4}>Contact info</h4>
          <div className={ContactUsStyle.contact_info_container}>
            <div>
              <div className={ContactUsStyle.contact_info_item}>
                <FontAwesomeIcon
                  className={ContactUsStyle.contact_info_icon}
                  icon={faMapMarkerAlt}
                  color="#deb150"
                />
                <p>3750, Foody Hill, Washindont, DC 59870</p>
              </div>
            </div>
            <div>
              <div className={ContactUsStyle.contact_info_item}>
                <FontAwesomeIcon
                  className={ContactUsStyle.contact_info_icon}
                  icon={faPhoneSquare}
                  color="#deb150"
                />
                <p>+1 123 456 7890 • +1 987 654 3210</p>
              </div>
            </div>
            <div>
              <div className={ContactUsStyle.contact_info_item}>
                <FontAwesomeIcon
                  className={ContactUsStyle.contact_info_icon}
                  icon={faEnvelope}
                  color="#deb150"
                />
                <p>contact@Restaurantname.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={ContactUsStyle.map}></div> */}
      </div>
    </InView>
  );
};

export default ContactUs;
