import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as farClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "styles/components/Header/Header.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

const Header = () => {
  React.useEffect(() => {
    window.addEventListener("resize", windowResize);
  }, []);
  return (
    <div className={HeaderStyle.header}>
      <Swiper
        className={HeaderStyle.background_slider}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide
          style={{
            backgroundImage: "url('images/slider/slider-bg-image-1.jpg')",
            width: "100%",
            height: "100%",
          }}
        >
          1
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('images/slider/slider-bg-image-2.jpg')",
            width: "100%",
            height: "100%",
          }}
        >
          2
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url('images/slider/slider-bg-image-3.jpg')",
            width: "100%",
            height: "100%",
          }}
        >
          3
        </SwiperSlide>
      </Swiper>
      <div className={HeaderStyle.head_top}>
        <div className={HeaderStyle.headtop_left}>
          <a className={HeaderStyle.a_global}>
            <FontAwesomeIcon icon={farClock} />
            <span>Mon to Sat : 08:00 - 15:30</span>
          </a>
        </div>
        <div className={HeaderStyle.headtop_bottom}>
          <a className={HeaderStyle.a_global} href="tel:+1801454587">
            <FontAwesomeIcon icon={faPhone} />
            <span>+1 801 4545 87</span>
          </a>
          <a className={HeaderStyle.a_global} href="mailto:contact@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>contact@gmail.com</span>
          </a>
        </div>
      </div>
      <div id="head_bottom" className={HeaderStyle.head_bottom}>
        <div className={HeaderStyle.head_logo}>
          <Link href="/" passHref={true}>
            <Image
              src="/images/logo-icon.png"
              width="168px"
              height="55px"
              alt="Logo"
            />
          </Link>
        </div>
        <div
          id="navbar_toggle_menu"
          className={HeaderStyle.navbar_toggle_menu}
          onClick={clickToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="head_menu" className={HeaderStyle.head_menu}>
          <nav id="site-nav">
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/offer">OFFER</Link>
              </li>
              <li>
                <Link href="/menu">MENU</Link>
              </li>
              <li>
                <Link href="/gallery">GALLERY</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

/**
 * @description This function will handle the resize window
 */
function windowResize() {
  // If the window width was under the 993 deactive the hamburger button and hidden the menu
  if (window.innerWidth < 993) {
    const head_menu = document.querySelector("#head_menu");
    const toggleButton = document.querySelector("#navbar_toggle_menu");
    if (toggleButton.hasAttribute("active")) {
      toggleButton.removeAttribute("active");
    }
    if (head_menu.style.visibility == "visible") {
      head_menu.style.visibility = "hidden";
      head_menu.style.animation = "";
    }
  }
  // if the window width was bigger than 993 make the menu visible
  if (window.innerWidth > 993) {
    const head_menu = document.querySelector("#head_menu");
    if (head_menu.style.visibility == "hidden") {
      head_menu.style.visibility = "visible";
    }
  }
}

/**
 * @description this function will handle click on the humberger menu
 * @param {any} e
 */
function clickToggle(e) {
  // catch the target
  let target = e.target;
  // If clicked on the spans catch the div
  if (target.id != "navbar_toggle_menu") {
    target = target.parentElement;
  }
  // if attribute active was there remove it
  if (target.hasAttribute("active")) {
    target.removeAttribute("active");
  } else {
    // else add it
    target.setAttribute("active", "");
  }
  // run the menu handler
  toggleHeadMenu();
}
/**
 * @description This function will handle the visibility of the navbar on phone
 */
function toggleHeadMenu() {
  // grab  the menu
  const head_menu = document.querySelector("#head_menu");
  // if menu was visible run the fadeOut animation and make the menu hidden
  if (
    head_menu.style.animation == "0.8s ease 0s 1 normal none running fadeIn"
  ) {
    head_menu.style.animation = "fadeOut";
    head_menu.style.animationDuration = ".7s";
    setTimeout(() => {
      head_menu.style.visibility = "hidden";
    }, 690);
  }
  // Else add the fadeIn animation and make it visible
  else if (
    head_menu.style.animation == "0.7s ease 0s 1 normal none running fadeOut" ||
    head_menu.style.animation == ""
  ) {
    head_menu.style.animation = "fadeIn";
    head_menu.style.animationDuration = ".8s";
    head_menu.style.visibility = "visible";
  }
}

export default Header;
