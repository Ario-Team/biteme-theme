import AboutUsStyles from "styles/components/AboutUs/AboutUs.module.scss";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import animationController from "./utils/animationController";

const AboutUs = () => {
  return (
    <div className={AboutUsStyles.container}>
      <InView
        className={AboutUsStyles.animations_container}
        onChange={animationController}
        threshold={([0.05, 0.4], [0.05, 0.4])}
      >
        <div>
          <figure>
            <Image
              src="/images/aboutus/element-1.png"
              alt=""
              width="351px"
              height="438px"
            />
          </figure>
          <figure>
            <Image
              src="/images/aboutus/element-2.png"
              alt=""
              width="206px"
              height="206px"
            />
          </figure>
        </div>
        <div>
          <figure>
            <Image
              src="/images/aboutus/element-3.png"
              alt=""
              width="289px"
              height="304px"
            />
          </figure>
          <figure>
            <Image
              src="/images/aboutus/element-4.png"
              alt=""
              width="194px"
              height="146px"
            />
          </figure>
        </div>
      </InView>
      <div></div>
    </div>
  );
};

export default AboutUs;
