import StaticsStyle from "styles/components/Statics/Statics.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBook,
  faCoffee,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import animationController from "./utils/animationController";

// Import static images
import animationOnePicture from "/public/images/Statics/stats-elements-1.png";
import animationTwoPicture from "/public/images/Statics/stats-elements-2.png";
import animationThreePicture from "/public/images/Statics/stats-elements-3.png";

const Statics = () => {
  return (
    <InView
      as="div"
      className={StaticsStyle.container}
      threshold={[0.05]}
      onChange={animationController}
    >
      <div className={StaticsStyle.animation_one}>
        <figure>
          <Image
            src={animationOnePicture}
            width="180px"
            height="210px"
            alt=""
          />
        </figure>
      </div>
      <div className={StaticsStyle.animation_two}>
        <figure>
          <Image
            src={animationTwoPicture}
            width="133px"
            height="155px"
            alt=""
          />
        </figure>
      </div>
      <div className={StaticsStyle.animation_three}>
        <figure>
          <Image
            src={animationThreePicture}
            width="371px"
            height="166px"
            alt=""
          />
        </figure>
      </div>
      <div className={StaticsStyle.statics_container}>
        <div className={StaticsStyle.static}>
          <figure className={StaticsStyle.static_icon}>
            <FontAwesomeIcon icon={faUsers} />
          </figure>
          <h3 className={StaticsStyle.static_counter}>995K</h3>
          <p className={StaticsStyle.static_description}>Happy people</p>
        </div>
        <div className={StaticsStyle.static}>
          <figure className={StaticsStyle.static_icon}>
            <FontAwesomeIcon icon={faBook} />
          </figure>
          <h3 className={StaticsStyle.static_counter}>48K</h3>
          <p className={StaticsStyle.static_description}>Chef recipe</p>
        </div>
        <div className={StaticsStyle.static}>
          <figure className={StaticsStyle.static_icon}>
            <FontAwesomeIcon icon={faCoffee} />
          </figure>
          <h3 className={StaticsStyle.static_counter}>25</h3>
          <p className={StaticsStyle.static_description}>Cup of coffee</p>
        </div>
        <div className={StaticsStyle.static}>
          <figure className={StaticsStyle.static_icon}>
            <FontAwesomeIcon icon={faTrophy} />
          </figure>
          <h3 className={StaticsStyle.static_counter}>10K</h3>
          <p className={StaticsStyle.static_description}>Best awards</p>
        </div>
      </div>
    </InView>
  );
};

export default Statics;
