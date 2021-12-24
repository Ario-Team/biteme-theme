import logoPicture from "/public/images/logo-icon.png";
import NavbarStyle from "styles/components/Navbar/Navbar.module.scss";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import handleMenuAnimation from "./utils/handleMenuAnimation";
import setStikyNav from "./utils/setStikyNav";
import windowResize from "./utils/windowResize";

export default function Navbar() {
  const headbottom = useRef();
  useEffect(() => {
    window.addEventListener("resize", windowResize);
    window.addEventListener("scroll", (e) => {
      setStikyNav(e, window, headbottom.current);
    });
  }, []);
  return (
    <div id="head_bottom" className={NavbarStyle.head_bottom} ref={headbottom}>
      <div className={NavbarStyle.head_logo}>
        <Link href="/" passHref={true}>
          <Image src={logoPicture} width="168px" height="55px" alt="Logo" />
        </Link>
      </div>
      <div
        id="navbar_toggle_menu"
        className={NavbarStyle.navbar_toggle_menu}
        onClick={handleMenuAnimation}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="head_menu" className={NavbarStyle.head_menu}>
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
  );
}
