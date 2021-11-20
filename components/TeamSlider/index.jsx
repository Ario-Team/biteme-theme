import TeamSliderStyle from "styles/components/TeamSlider/TeamSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
SwiperCore.use([Pagination, Navigation]);

const TeamSlider = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <div className={TeamSliderStyle.slider_container}>
      <Swiper
        modules={[Controller]}
        onSwiper={setMainSwiper}
        controller={{ control: secondSwiper }}
        direction="vertical"
        slideToClickedSlide={true}
        slidesPerView="3"
        centeredSlides={true}
        speed="1s"
        className={TeamSliderStyle.left_slider}
      >
        <SwiperSlide className={TeamSliderStyle.left_slider_item}>
          <Image
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-thumb-1.png"
            width="118px"
            height="139px"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.left_slider_item}>
          <Image
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-thumb-2.png"
            width="118px"
            height="139px"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.left_slider_item}>
          <Image
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-thumb-3.png"
            width="118px"
            height="139px"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.left_slider_item}>
          <Image
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-thumb-1.png"
            width="118px"
            height="139px"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.left_slider_item}>
          <Image
            src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-thumb-2.png"
            width="118px"
            height="139px"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control: mainSwiper }}
        className={TeamSliderStyle.right_slider}
      >
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <div>
            <h4 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h4>
            <h5 className={TeamSliderStyle.right_slider_item_title}>Founder</h5>
            <p className={TeamSliderStyle.right_slider_item_description}>
              Lorem Ipsum is simply dummy text of the printing and typeseing
              industry rem Ipsum has been the industrys standard dummy
            </p>
            <div
              className={
                TeamSliderStyle.right_slider_item_social_icons_container
              }
            >
              <div className={TeamSliderStyle.icon}>
                <Link href="/facebook" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faFacebookF}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/twitter" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faTwitter}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/googleplus" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faGooglePlusG}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <div>
            <h4 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h4>
            <h5 className={TeamSliderStyle.right_slider_item_title}>Founder</h5>
            <p className={TeamSliderStyle.right_slider_item_description}>
              Lorem Ipsum is simply dummy text of the printing and typeseing
              industry rem Ipsum has been the industrys standard dummy
            </p>
            <div
              className={
                TeamSliderStyle.right_slider_item_social_icons_container
              }
            >
              <div className={TeamSliderStyle.icon}>
                <Link href="/facebook" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faFacebookF}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/twitter" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faTwitter}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/googleplus" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faGooglePlusG}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            {" "}
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <div>
            <h4 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h4>
            <h5 className={TeamSliderStyle.right_slider_item_title}>Founder</h5>
            <p className={TeamSliderStyle.right_slider_item_description}>
              Lorem Ipsum is simply dummy text of the printing and typeseing
              industry rem Ipsum has been the industrys standard dummy
            </p>
            <div
              className={
                TeamSliderStyle.right_slider_item_social_icons_container
              }
            >
              <div className={TeamSliderStyle.icon}>
                <Link href="/facebook" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faFacebookF}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/twitter" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faTwitter}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/googleplus" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faGooglePlusG}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <div>
            <h4 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h4>
            <h5 className={TeamSliderStyle.right_slider_item_title}>Founder</h5>
            <p className={TeamSliderStyle.right_slider_item_description}>
              Lorem Ipsum is simply dummy text of the printing and typeseing
              industry rem Ipsum has been the industrys standard dummy
            </p>
            <div
              className={
                TeamSliderStyle.right_slider_item_social_icons_container
              }
            >
              <div className={TeamSliderStyle.icon}>
                <Link href="/facebook" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faFacebookF}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/twitter" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faTwitter}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/googleplus" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faGooglePlusG}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <div>
            <h4 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h4>
            <h5 className={TeamSliderStyle.right_slider_item_title}>Founder</h5>
            <p className={TeamSliderStyle.right_slider_item_description}>
              Lorem Ipsum is simply dummy text of the printing and typeseing
              industry rem Ipsum has been the industrys standard dummy
            </p>
            <div
              className={
                TeamSliderStyle.right_slider_item_social_icons_container
              }
            >
              <div className={TeamSliderStyle.icon}>
                <Link href="/facebook" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faFacebookF}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/twitter" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faTwitter}
                  />
                </Link>
              </div>
              <div className={TeamSliderStyle.icon}>
                <Link href="/googleplus" passHref>
                  <FontAwesomeIcon
                    className={TeamSliderStyle.icon_item}
                    icon={faGooglePlusG}
                  />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamSlider;
