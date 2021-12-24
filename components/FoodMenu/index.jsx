import { InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import animationController from "./utils/animationController";
import FoodMenuStyles from "styles/components/FoodMenu/FoodMenu.module.scss";
import { isMobile } from "react-device-detect";

// Import static images
import animationOnePicture from "/public/images/FoodMenu/animations/menu-element-1.png";
import animationTwoPicture from "/public/images/FoodMenu/animations/menu-element-2.png";
import headingElementPicture from "/public/images/aboutus/heading-element.png";

const FoodMenu = ({ list }) => {
  const [activeMenu, setActiveMenu] = useState("0");
  useEffect(() => {
    const tabs = [
      ...document.querySelectorAll(
        "*[class*='tab_item_container'] > div[data-id][class*='tab_item']"
      ),
    ];
    const foodItems = [
      ...document.querySelectorAll(
        "*[class*='tab_item_container'] > div[class*='menu_list']"
      ),
    ];
    // Tabas
    tabs.map((elm) => {
      if (elm.dataset.id == activeMenu) {
        if (!elm.hasAttribute("active")) {
          elm.setAttribute("active", "");
        }
      } else {
        elm.removeAttribute("active");
      }
    });
    // Foods
    foodItems.map((elm) => {
      if (elm.dataset.parentId == activeMenu) {
        if (!elm.hasAttribute("active")) {
          elm.setAttribute("active", "");
        }
      } else {
        elm.removeAttribute("active");
      }
    });
  }, [activeMenu]);
  return (
    <InView
      className={FoodMenuStyles.container}
      as="section"
      onChange={isMobile ? null : animationController}
      threshold={[0.05, 0.4]}
    >
      {/* Animations container */}
      <div className={FoodMenuStyles.animation_one}>
        <figure>
          <Image
            src={animationOnePicture}
            width="210px"
            height="288px"
            alt=""
          />
        </figure>
      </div>
      <div className={FoodMenuStyles.animation_two}>
        <figure>
          <Image
            src={animationTwoPicture}
            width="240px"
            height="386px"
            alt=""
          />
        </figure>
      </div>
      {/* Main container */}
      <div className={FoodMenuStyles.container_allmenu}>
        {/* Heading 2 */}
        <h2 className={FoodMenuStyles.First_title}>Yummy n testy</h2>
        {/* Heading 1 */}
        <h1 className={FoodMenuStyles.Second_title}>delicious Menu</h1>
        {/* Image under Heading 1 */}
        <figure className={FoodMenuStyles.third_title}>
          <Image
            src={headingElementPicture}
            width="171px"
            height="21px"
            alt=""
          />
        </figure>
        {/* Menu Box */}
        <div className={FoodMenuStyles.menu_box}>
          {/* Menu Tabs */}
          <div className={FoodMenuStyles.menu_tab}>
            <div className={FoodMenuStyles.tab_item_container}>
              {
                // return unique Items for menu
                list.map(function (value, key) {
                  return (
                    <>
                      <div
                        key={key}
                        data-id={key}
                        onClick={(e) =>
                          setActiveMenu(e.currentTarget.dataset.id)
                        }
                        className={FoodMenuStyles.tab_item}
                      >
                        {value.title}
                      </div>
                      <div
                        className={FoodMenuStyles.menu_list}
                        data-parent-id={key}
                      >
                        {/* Menu left image */}
                        <div className={FoodMenuStyles.menu_left_image}>
                          <figure className={FoodMenuStyles.menu_left_figure}>
                            <Image
                              src={value.primaryImage}
                              layout="fill"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className={FoodMenuStyles.menu_right_items}>
                          {value.foods.map((food, foodKey) => {
                            return (
                              <section
                                key={foodKey}
                                className={FoodMenuStyles.menu_item}
                              >
                                <figure
                                  className={FoodMenuStyles.menu_item_image}
                                >
                                  <Image
                                    src={food.image}
                                    width="100px"
                                    height="100px"
                                    alt=""
                                  />
                                </figure>
                                <div
                                  className={FoodMenuStyles.menu_item_content}
                                >
                                  <h1
                                    className={FoodMenuStyles.menu_item_title}
                                  >
                                    {food.title}
                                  </h1>
                                  <div
                                    className={FoodMenuStyles.menu_item_price}
                                  >
                                    {food.price}
                                  </div>
                                  <p
                                    className={
                                      FoodMenuStyles.menu_item_paragraph
                                    }
                                  >
                                    {food.description}
                                  </p>
                                </div>
                              </section>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default FoodMenu;
