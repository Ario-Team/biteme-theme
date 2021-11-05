import { InView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import animationController from "./utils/animationController";
import FoodMenuStyles from "styles/components/FoodMenu/FoodMenu.module.scss";

const FoodMenu = ({ list }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  useEffect(() => {
    const tabs = [...document.querySelectorAll("*[data-id]")];
    tabs.map((elm) =>
      elm.dataset.id == activeMenu
        ? elm.setAttribute("active", "")
        : elm.removeAttribute("active")
    );
  }, [activeMenu]);
  return (
    <InView
      className={FoodMenuStyles.container}
      onChange={animationController}
      threshold={[0.05, 0.4]}
    >
      {/* Animations container */}
      <div className={FoodMenuStyles.animation_one}>
        <figure className="wow rotateInDownLeft" data-wow-duration="2s">
          <Image
            src="/images/FoodMenu/animations/menu-element-1.png"
            width="210px"
            height="288px"
            alt=""
          />
        </figure>
      </div>
      <div className={FoodMenuStyles.animation_two}>
        <figure>
          <Image
            src="/images/FoodMenu/animations/menu-element-2.png"
            width="240px"
            height="386px"
            alt=""
          />
        </figure>
      </div>
      {/* Main container */}
      <div>
        {/* Heading 2 */}
        <h2>Yummy n testy</h2>
        {/* Heading 1 */}
        <h1>delicious Menu</h1>
        {/* Image under Heading 1 */}
        <figure>
          <Image
            src="/images/aboutus/heading-element.png"
            width="171px"
            height="21px"
            alt=""
          />
        </figure>
        {/* Menu Box */}
        <div className={FoodMenuStyles.menu_box}>
          {/* Menu Tabs */}
          <div className={FoodMenuStyles.menu_tab}>
            <ul>
              {
                // return unique li for each menu
                list.map(function (value, key) {
                  return (
                    <li
                      key={key}
                      data-id={key}
                      className={FoodMenuStyles.tab_item}
                      onClick={(e) => setActiveMenu(e.target.dataset.id)}
                    >
                      {value.title}
                    </li>
                  );
                })
              }
            </ul>
          </div>
          {/* Menu Items */}
          <div className={FoodMenuStyles.menu_list}>
            {/* Menu left image */}
            <div className={FoodMenuStyles.menu_left_image}>
              <figure>
                <Image
                  src={list[activeMenu].primaryImage}
                  width="453px"
                  height="536px"
                  alt=""
                />
              </figure>
            </div>
            {/* Menu items */}
            <div className={FoodMenuStyles.menu_right_items}>
              {/* Return unique element for each item */}
              {list[activeMenu].foods.map(function (item, key) {
                return (
                  <div key={key} className={FoodMenuStyles.menu_item}>
                    <figure className={FoodMenuStyles.menu_item_image}>
                      <Image
                        src={item.image}
                        width="100px"
                        height="100px"
                        alt=""
                      />
                    </figure>
                    <div className={FoodMenuStyles.menu_item_content}>
                      <h4 className={FoodMenuStyles.menu_item_title}>
                        {item.title}
                      </h4>
                      <div className={FoodMenuStyles.menu_item_price}>
                        {item.price}
                      </div>
                      <p className={FoodMenuStyles.menu_item_paragraph}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default FoodMenu;
