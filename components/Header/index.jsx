import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as farClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "styles/components/Header/Header.module.scss";
import Slider from "components/Slider";

// Import static images
import Navbar from "components/Navbar";

const Header = () => {
  return (
    <section className={HeaderStyle.header}>
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
      <Navbar />
    </section>
  );
};

export default Header;
