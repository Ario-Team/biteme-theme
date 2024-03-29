import TeamSliderStyle from "styles/components/TeamSlider/TeamSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
SwiperCore.use([Pagination, Navigation]);

const TeamSlider = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  return (
    <section className={TeamSliderStyle.slider_container}>
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
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        speed="1.5s"
      >
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <section>
            <h1 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h1>
            <h1 className={TeamSliderStyle.right_slider_item_title}>Founder</h1>
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
          </section>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <section>
            <h1 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h1>
            <h1 className={TeamSliderStyle.right_slider_item_title}>Founder</h1>
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
          </section>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <section>
            <h1 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h1>
            <h1 className={TeamSliderStyle.right_slider_item_title}>Founder</h1>
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
          </section>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <section>
            <h1 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h1>
            <h1 className={TeamSliderStyle.right_slider_item_title}>Founder</h1>
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
          </section>
        </SwiperSlide>
        <SwiperSlide className={TeamSliderStyle.right_slider_item}>
          <div>
            <Image
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/team-3.png"
              layout="fill"
              alt=""
            />
          </div>
          <section>
            <h1 className={TeamSliderStyle.right_slider_item_name}>
              Due Stive
            </h1>
            <h1 className={TeamSliderStyle.right_slider_item_title}>Founder</h1>
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
          </section>
        </SwiperSlide>
        <div className={TeamSliderStyle.navigation_buttons}>
          <button ref={prevRef} aria-label="Previous slider">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={TeamSliderStyle.button}
            />
          </button>
          <button ref={nextRef} aria-label="Next slider">
            <FontAwesomeIcon
              icon={faArrowRight}
              className={TeamSliderStyle.button}
            />
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default TeamSlider;
