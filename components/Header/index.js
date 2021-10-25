import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as farClock } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <a>
            <FontAwesomeIcon icon={farClock} />
            <span>Mon to Sat : 08:00 - 15:30</span>
          </a>
        </div>
        <div>
          <a href="tel:+1801454587">+1 801 4545 87</a>
          <a href="mailto:contact@gmail.com">contact@gmail.com</a>
        </div>
      </div>
      <div>
        <Link href="/" passHref={true}>
          <Image
            src="/images/logo-icon.png"
            width="100%"
            height="100%"
            alt="Logo"
          />
        </Link>
      </div>
      <div>
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
    </header>
  );
};

export default Header;
