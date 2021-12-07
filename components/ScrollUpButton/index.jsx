import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import ButtonStyles from "styles/components/ScroolUpButton/ScroolUpButton.module.scss";

const ScrollUpButton = ({ visible }) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (visible) {
      if (buttonRef.current) {
        buttonRef.current.style.display = "block";
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.style.display = "none";
      }
    }
  }, [visible]);
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
