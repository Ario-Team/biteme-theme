import Image from "next/image";
import { useState, useEffect, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GalleryStyles from "styles/components/Gallery/Gallery.module.scss";
import GallerySlider from "components/GallerySlider";
import { InView } from "react-intersection-observer";
import animationController from "./utils/animationController";

// Import static images
import animationOnePicture from "/public/images/Gallery/gallery-elements-1.png";
import animationTwoPicture from "/public/images/Gallery/gallery-elements-2.png";
import animationThreePicture from "/public/images/Gallery/gallery-elements-3.png";
import headingElementPicture from "/public/images/aboutus/heading-element.png";

const Gallery = ({ gallery }) => {
  let tabs = new Set();
  const [activeGallery, setActiveGallery] = useState(gallery);
  const [activeTab, setActiveTab] = useState("All");
  const [slider, setSlider] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const closeRef = createRef();

  // Collect the tabs
  gallery.map((value) => {
    value.tags.map((tab) => {
      tabs.add(tab);
    });
  });
  tabs = [...tabs];
  // When component loaded
  useEffect(() => {}, []);
  // Filter the gallery
  useEffect(() => {
    activeTab == "All"
      ? setActiveGallery(gallery)
      : setActiveGallery([
          ...gallery.filter((item) => item.tags.includes(activeTab)),
        ]);
    const tabItems = [...document.querySelectorAll("li[class*='tab_item']")];
    tabItems.map((item, key) => {
      if (item.dataset.itemsKey == activeTab) {
        item.setAttribute("active", "");
      } else {
        item.removeAttribute("active");
      }
    });
  }, [activeTab, gallery]);
  // Enable the slider
  useEffect(() => {
    if (slider) {
      closeRef.current.onclick = () => {
        setSlider(false);
      };
    }
  }, [slider, closeRef]);
  return (
    <InView
      as="section"
      className={GalleryStyles.container}
      threshold={[0.05, 0.5]}
      onChange={animationController}
    >
      <div className={GalleryStyles.animation_container}>
        <div className={GalleryStyles.animation_one}>
          <figure>
            <Image
              src={animationOnePicture}
              width="205px"
              height="193px"
              alt="Animation"
            />
          </figure>
        </div>
        <div className={GalleryStyles.animation_two}>
          <figure>
            <Image
              src={animationTwoPicture}
              width="65px"
              height="65px"
              alt="Animation"
            />
          </figure>
        </div>
        <div className={GalleryStyles.animation_three}>
          <figure>
            <Image
              src={animationThreePicture}
              width="249px"
              height="280px"
              alt="Animation"
            />
          </figure>
        </div>
      </div>
      <h2 className={GalleryStyles.heading2}>Fresh &#38; healthy food</h2>
      <h1 className={GalleryStyles.heading1}>Gallery</h1>
      <figure className={GalleryStyles.sub_image}>
        <Image src={headingElementPicture} width="171px" height="21px" alt="" />
      </figure>
      <div className={GalleryStyles.tabs_container}>
        <ul className={GalleryStyles.tab}>
          <li
            className={GalleryStyles.tab_item}
            data-items-key="All"
            onClick={(el) => {
              setActiveTab(el.target.dataset.itemsKey);
            }}
          >
            All
          </li>
          {tabs.map((tab, key) => {
            return (
              <li
                className={GalleryStyles.tab_item}
                key={key}
                data-items-key={tab}
                onClick={(el) => {
                  setActiveTab(0);
                  setTimeout(() => {
                    setActiveTab(el.target.dataset.itemsKey);
                  }, 100);
                }}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={GalleryStyles.gallery}>
        {activeGallery != null
          ? activeGallery.map((value, key) => {
              return (
                <section
                  className={GalleryStyles.gallery_item}
                  key={key}
                  data-id={key}
                  style={{
                    animation: "zoomIn",
                    animationDuration: ".5s",
                  }}
                >
                  <figure className={GalleryStyles.gallery_item_image}>
                    <Image src={value.imageSrc} layout="fill" alt="" />
                  </figure>
                  <div className={GalleryStyles.gallery_item_slider_button}>
                    <div className={GalleryStyles.gallery_item_slider_icon}>
                      <FontAwesomeIcon
                        data-item-key={key}
                        onClick={(el) => {
                          setSlider(true);
                          setActiveIndex(el.currentTarget.dataset.itemKey);
                        }}
                        icon={faPlus}
                      />
                    </div>
                    <h5 className={GalleryStyles.gallery_item_title}>
                      {value.title}
                    </h5>
                    <h6 className={GalleryStyles.gallery_item_description}>
                      {value.description}
                    </h6>
                  </div>
                </section>
              );
            })
          : ""}
      </div>
      {slider ? (
        <GallerySlider
          gallery={activeGallery}
          start={activeIndex}
          ref={closeRef}
        />
      ) : (
        ""
      )}
    </InView>
  );
};
export default Gallery;
