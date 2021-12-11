import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as farClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "styles/components/Header/Header.module.scss";
import Slider from "components/Slider";
import windowResize from "./utils/windowResize";
import handleMenuAnimation from "./utils/handleMenuAnimation";
import setStikyNav from "./utils/setStikyNav";

// Import static images
import logoPicture from "/public/images/logo-icon.png";

const Header = () => {
  const headbottom = useRef();
  const main = useRef();

  useEffect(() => {
    main.current.setAttribute("data-init-offset", headbottom.current.offsetTop);

    window.addEventListener("resize", windowResize);
    window.addEventListener("scroll", (e) => {
      setStikyNav(e, main.current, window, headbottom.current);
    });
  }, []);
  return (
    <div className={HeaderStyle.header} onScroll={setStikyNav} ref={main}>
      <Slider />
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
      <div
        id="head_bottom"
        className={HeaderStyle.head_bottom}
        ref={headbottom}
      >
        <div className={HeaderStyle.head_logo}>
          <Link href="/" passHref={true}>
            <Image src={logoPicture} width="168px" height="55px" alt="Logo" />
          </Link>
        </div>
        <div
          id="navbar_toggle_menu"
          className={HeaderStyle.navbar_toggle_menu}
          onClick={handleMenuAnimation}
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

export default Header;
