import { forwardRef, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import GallerySliderStyles from "styles/components/GallerySlider/GallerySlider.module.scss";
import Image from "next/image";

SwiperCore.use([Navigation]);

const GallerySlider = forwardRef(({ gallery, start }, ref) => {
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  return (
    <div className={GallerySliderStyles.container}>
      <button className={GallerySliderStyles.close_button} ref={ref}>
        <FontAwesomeIcon icon={faWindowClose} />
      </button>
      <Swiper
        className={GallerySliderStyles.slider_container}
        onInit={(swiper) => {
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevButton.current;
          swiper.params.navigation.nextEl = nextButton.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: prevButton.current,
          nextEl: nextButton.current,
        }}
        slidesPerView="1"
        observer
        observeParents
        parallax
        initialSlide={start}
      >
        {gallery.map((picture, key) => {
          return (
            <SwiperSlide className={GallerySliderStyles.slider_item} key={key}>
              <figure
                className={GallerySliderStyles.slider_item_image_container}
              >
                <Image
                  className={GallerySliderStyles.slider_item_image}
                  src={picture.imageSrc}
                  layout="fill"
                  alt=""
                  loading="lazy"
                />
              </figure>
            </SwiperSlide>
          );
        })}
        <div className={GallerySliderStyles.sliderButton}>
          <button className={GallerySliderStyles.prev_button} ref={prevButton}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className={GallerySliderStyles.next_button} ref={nextButton}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </Swiper>
    </div>
  );
});
GallerySlider.displayName = "GallerySlider";
export default GallerySlider;
