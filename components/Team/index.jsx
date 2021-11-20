import TeamStyles from "styles/components/Team/Team.module.scss";
import { InView } from "react-intersection-observer";
import animationController from "./utils/animationController";
import Image from "next/image";
import TeamSlider from "components/TeamSlider";

const Team = () => {
  return (
    <InView
      as="div"
      threshold={[0.05, 0.4]}
      className={TeamStyles.container}
      onChange={animationController}
    >
      <div className={TeamStyles.animations_container}>
        <div>
          <figure>
            <Image
              src="/images/Team/team-element-1.png"
              width="55px"
              height="169px"
              alt=""
            />
          </figure>
        </div>
        <div>
          <figure>
            <Image
              src="/images/Team/team-element-2.png"
              width="94px"
              height="173px"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className={TeamStyles.animations_container_two}>
        <figure>
          <Image
            src="/images/Team/team-element-3.png"
            width="222px"
            height="265px"
            alt=""
          />
        </figure>
      </div>
      <div className={TeamStyles.header}>
        <h2 className={TeamStyles.first_heading}>Our team</h2>
        <h1 className={TeamStyles.last_heading}>Expert Chefs</h1>
        <div>
          <figure>
            <Image
              src="/images/aboutus/heading-element.png"
              width="171px"
              height="21px"
              alt=""
            />
          </figure>
        </div>
      </div>
      <TeamSlider />
    </InView>
  );
};

export default Team;
