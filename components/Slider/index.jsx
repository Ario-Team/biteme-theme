import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import SliderStyle from "styles/components/Slider/Slider.module.scss";

// Enable the swiper plugins
SwiperCore.use([Pagination, Navigation]);

export default function Slider() {
  return (
    <Swiper
      className={SliderStyle.background_slider}
      navigation
      pagination={{ clickable: true }}
      scrollbar
    >
      <SwiperSlide
        style={{
          background: "no-repeat center",
          backgroundSize: "cover",
          backgroundImage: "url('images/slider/slider-bg-image-1.jpg')",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div className={SliderStyle.slider_item}>
          <div>
            <Image
              src="/images/slider/caption/caption-top.png"
              alt=""
              width="141px"
              height="21px"
            />
          </div>
          <h2>Welcome to our</h2>
          <h3>Restaurant</h3>
          <p>the best Multi Cuisine Restaurant</p>
          <div className="slide_item_buttons">
            <Link href="/book" passHref={true}>
              <button>Book Table</button>
            </Link>
            <Link href="/menu" passHref={true}>
              <button>View Menu</button>
            </Link>
          </div>
          <div>
            <Image
              src="/images/slider/caption/caption-bottom.png"
              alt=""
              width="141px"
              height="21px"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}
