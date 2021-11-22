import CustomersStyle from "styles/components/Customers/Customers.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Image from "next/image";

SwiperCore.use([Pagination]);

export default function Customers() {
  return (
    <div className={CustomersStyle.container}>
      {/* Title */}
      <h2>Our customer says</h2>
      <h1>testimonial</h1>
      <figure>
        <Image
          src="/images/aboutus/heading-element.png"
          width="171px"
          height="21px"
          alt=""
        />
      </figure>
      {/* Customers slider */}
      <Swiper
        className={CustomersStyle.customers_slider}
        pagination={{ clickable: true }}
        slidesPerView="2"
      >
        {/* Sliders*/}
        <SwiperSlide className={CustomersStyle.item}>
          <div>
            {/*Customer picture*/}
            <figure className={CustomersStyle.item_image}>
              <Image
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2.png"
                width="100px"
                height="100px"
                alt=""
              />
            </figure>
            {/* Paragraph */}
            <p className={CustomersStyle.item_paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typing indus
              try Lorem Ipsum has een the indus try&apos;s standard dummy text
              Loremsimply
            </p>
            {/* Title */}
            <h5 className={CustomersStyle.item_title}>Monster Dustinegre</h5>
            {/* Desription */}
            <h6>MD, Envato</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <div>
            <figure className={CustomersStyle.item_image}>
              <Image
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2.png"
                width="100px"
                height="100px"
                alt=""
              />
            </figure>
            <p className={CustomersStyle.item_paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typing indus
              try Lorem Ipsum has een the indus try&apos;s standard dummy text
              Loremsimply
            </p>
            <h5 className={CustomersStyle.item_title}>Monster Dustinegre</h5>
            <h6>MD, Envato</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <div>
            <figure className={CustomersStyle.item_image}>
              <Image
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2.png"
                width="100px"
                height="100px"
                alt=""
              />
            </figure>
            <p className={CustomersStyle.item_paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typing indus
              try Lorem Ipsum has een the indus try&apos;s standard dummy text
              Loremsimply
            </p>
            <h5 className={CustomersStyle.item_title}>Monster Dustinegre</h5>
            <h6>MD, Envato</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <div>
            <figure className={CustomersStyle.item_image}>
              <Image
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2.png"
                width="100px"
                height="100px"
                alt=""
              />
            </figure>
            <p className={CustomersStyle.item_paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typing indus
              try Lorem Ipsum has een the indus try&apos;s standard dummy text
              Loremsimply
            </p>
            <h5 className={CustomersStyle.item_title}>Monster Dustinegre</h5>
            <h6>MD, Envato</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <div>
            <figure className={CustomersStyle.item_image}>
              <Image
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2.png"
                width="100px"
                height="100px"
                alt=""
              />
            </figure>
            <p className={CustomersStyle.item_paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typing indus
              try Lorem Ipsum has een the indus try&apos;s standard dummy text
              Loremsimply
            </p>
            <h5 className={CustomersStyle.item_title}>Monster Dustinegre</h5>
            <h6>MD, Envato</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <div>
            <figure className={CustomersStyle.item_image}>
              <Image
                src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/testimonial-user-2.png"
                width="100px"
                height="100px"
                alt=""
              />
            </figure>
            <p className={CustomersStyle.item_paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typing indus
              try Lorem Ipsum has een the indus try&apos;s standard dummy text
              Loremsimply
            </p>
            <h5 className={CustomersStyle.item_title}>Monster Dustinegre</h5>
            <h6>MD, Envato</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
