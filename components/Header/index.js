import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as farClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "styles/components/Header.module.css";

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
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
      <div className={HeaderStyle.head_bottom}>
        <div className={HeaderStyle.head_logo}>
          <Link href="/" passHref={true}>
            <Image
              src="/images/logo-icon.png"
              width="100%"
              height="100%"
              alt="Logo"
            />
          </Link>
        </div>
        <div className={HeaderStyle.head_menu}>
          <nav>
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
    </header>
  );
};

export default Header;
