import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ButtonStyles from "styles/components/ScroolUpButton/ScroolUpButton.module.scss";

const ScrollUpButton = () => {
  // Visibile status
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);
  // Button ref
  const buttonRef = useRef(null);
  // When mounted detect status
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        setScrollButtonVisible(true);
      } else {
        setScrollButtonVisible(false);
      }
    };
  }, []);
  // When button status changed
  useEffect(() => {
    if (scrollButtonVisible) {
      if (buttonRef.current) {
        buttonRef.current.style.display = "block";
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.style.display = "none";
      }
    }
  }, [scrollButtonVisible]);
  return (
    <button
      ref={buttonRef}
      className={[ButtonStyles.button]}
      onClick={scroolUp}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollUpButton;

function scroolUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
