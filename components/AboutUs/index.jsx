import AboutUsStyles from "styles/components/AboutUs/AboutUs.module.scss";
import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import animationController from "./utils/animationController";

// Import static images
import animationOnePicture from "/public/images/aboutus/element-1.png";
import animationTwoPicture from "/public/images/aboutus/element-2.png";
import animationThreePicture from "/public/images/aboutus/element-3.png";
import animationFourPicture from "/public/images/aboutus/element-4.png";
import headingElementPicture from "/public/images/aboutus/heading-element.png";
import badgeOnePicture from "/public/images/aboutus/boxes-icon/feature1.png";
import badgeTwoPicture from "/public/images/aboutus/boxes-icon/feature2.png";
import badgeThreePicture from "/public/images/aboutus/boxes-icon/feature3.png";
import chiefPicture from "/public/images/aboutus/chef.png";

const AboutUs = () => {
  return (
    // <div className={AboutUsStyles.container}>
    <div className={AboutUsStyles.information_container}>
      <InView
        className={AboutUsStyles.animations_container}
        onChange={animationController}
        threshold={[0.05, 0.4]}
      >
        <div>
          <figure>
            <Image
              src={animationOnePicture}
              alt=""
              width="351px"
              height="438px"
            />
          </figure>
          <figure>
            <Image
              src={animationTwoPicture}
              alt=""
              width="206px"
              height="206px"
            />
          </figure>
        </div>
        <div>
          <figure>
            <Image
              src={animationThreePicture}
              width="289px"
              height="304px"
              alt=""
            />
          </figure>
          <figure>
            <Image
              src={animationFourPicture}
              alt=""
              width="194px"
              height="146px"
            />
          </figure>
        </div>
      </InView>
      <div className={AboutUsStyles.information_box}>
        <h2 className={AboutUsStyles.heading_top}>Our story</h2>
        <h1 className={AboutUsStyles.heading_bottom}>About us</h1>
        <figure className={AboutUsStyles.heading_subfigure}>
          <Image
            src={headingElementPicture}
            width="171px"
            height="21px"
            alt=""
            className={AboutUsStyles.heading_subimage}
          />
        </figure>
        <div className={AboutUsStyles.heading_content}>
          <span className={AboutUsStyles.heading_content_header}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has.{" "}
          </span>
          <p className={AboutUsStyles.heading_content_paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries simply dummy text of the printing standard dummy text
            eve and typesetting.{" "}
          </p>
        </div>
        <div className={AboutUsStyles.badge_boxes}>
          <Link href="/delivery" passHref={true}>
            <section className={AboutUsStyles.badge_item}>
              <figure className={AboutUsStyles.badge_item_icon}>
                <Image
                  className={AboutUsStyles.badge_img}
                  src={badgeOnePicture}
                  width="65px"
                  height="55px"
                  alt=""
                />
              </figure>
              <h1 className={AboutUsStyles.badge_item_title}>Free delivery</h1>
            </section>
          </Link>
          <Link href="/coocked" passHref={true}>
            <section className={AboutUsStyles.badge_item}>
              <figure className={AboutUsStyles.badge_item_icon}>
                <Image
                  className={AboutUsStyles.badge_img}
                  src={badgeTwoPicture}
                  width="65px"
                  height="55px"
                  alt=""
                />
              </figure>
              <h1 className={AboutUsStyles.badge_item_title}>Freshly cooked</h1>
            </section>
          </Link>
          <Link href="/support" passHref={true}>
            <section className={AboutUsStyles.badge_item}>
              <figure className={AboutUsStyles.badge_item_icon}>
                <Image
                  className={AboutUsStyles.badge_img}
                  src={badgeThreePicture}
                  width="65px"
                  height="55px"
                  alt=""
                />
              </figure>
              <h1 className={AboutUsStyles.badge_item_title}>
                24 Hourse support
              </h1>
            </section>
          </Link>
        </div>
      </div>
      <div className={AboutUsStyles.chief_container}>
        <figure className={AboutUsStyles.chief_image}>
          <Image src={chiefPicture} layout="fill" alt="" />
        </figure>
      </div>
    </div>
    // </div>
  );
};

export default AboutUs;
