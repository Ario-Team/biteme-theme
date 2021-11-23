import StaticsStyle from "styles/components/Statics/Statics.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBook,
  faCoffee,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Statics = () => {
  return (
    <div className={StaticsStyle.container}>
      <div className={StaticsStyle.animations}>
        <div>
          <figure>
            <Image
              src="/images/Statics/stats-elements-1.png"
              width="180px"
              height="210px"
              alt=""
            />
          </figure>
        </div>
        <div>
          <figure>
            <Image
              src="/images/Statics/stats-elements-2.png"
              width="133px"
              height="155px"
              alt=""
            />
          </figure>
        </div>
        <div>
          <figure>
            <Image
              src="/images/Statics/stats-elements-3.png"
              width="371px"
              height="166px"
              alt=""
            />
          </figure>
        </div>
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
    </div>
  );
};

export default Statics;
