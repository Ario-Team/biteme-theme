import CustomersStyle from "styles/components/Customers/Customers.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import Image from "next/image";

SwiperCore.use([Pagination, Autoplay]);

// Import static images
import headingElementPicture from "/public/images/aboutus/heading-element.png";

export default function Customers() {
  return (
    <section className={CustomersStyle.container}>
      {/* Title */}
      <h2 className={CustomersStyle.first_heading}>Our customer says</h2>
      <h1 className={CustomersStyle.last_heading}>testimonial</h1>
      <figure className={CustomersStyle.img_heading}>
        <Image src={headingElementPicture} width="171px" height="21px" alt="" />
      </figure>
      {/* Customers slider */}
      <Swiper
        className={CustomersStyle.customers_slider}
        pagination={{ clickable: true }}
        autoplay={{ delay: "5000" }}
        loop={true}
        speed="1s"
        breakpoints={{
          320: {
            slidesPerView: "1",
          },
          993: {
            slidesPerView: "2",
          },
        }}
      >
        {/* Sliders*/}
        <SwiperSlide className={CustomersStyle.item}>
          <section className={CustomersStyle.item_child}>
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
            <h1 className={CustomersStyle.item_title}>Monster Dustinegre</h1>
            {/* Desription */}
            <h2 className={CustomersStyle.item_last_title}>MD, Envato</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <section className={CustomersStyle.item_child}>
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
            <h1 className={CustomersStyle.item_title}>Monster Dustinegre</h1>
            <h2 className={CustomersStyle.item_last_title}>MD, Envato</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <section className={CustomersStyle.item_child}>
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
            <h1 className={CustomersStyle.item_title}>Monster Dustinegre</h1>
            <h2 className={CustomersStyle.item_last_title}>MD, Envato</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <section className={CustomersStyle.item_child}>
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
            <h1 className={CustomersStyle.item_title}>Monster Dustinegre</h1>
            <h2 className={CustomersStyle.item_last_title}>MD, Envato</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <section className={CustomersStyle.item_child}>
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
            <h1 className={CustomersStyle.item_title}>Monster Dustinegre</h1>
            <h2 className={CustomersStyle.item_last_title}>MD, Envato</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={CustomersStyle.item}>
          <section className={CustomersStyle.item_child}>
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
            <h1 className={CustomersStyle.item_title}>Monster Dustinegre</h1>
            <h2 className={CustomersStyle.item_last_title}>MD, Envato</h2>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
