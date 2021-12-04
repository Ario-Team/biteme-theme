export default function animationController(inView, entry) {
  const intersectionRatio = entry.intersectionRatio;
  if (inView && window.innerWidth >= 993) {
    const rootElement = entry.target;
    const imagesWithAnimation = [
      ...rootElement.querySelectorAll("div[class*='animation_']"),
    ];
    imagesWithAnimation[0].style.visibility = "visible";
    imagesWithAnimation[0].style.opacity = 1;
    imagesWithAnimation[0].style.animation = "fadeInDown";
    imagesWithAnimation[0].style.animationDuration = "2s";
    imagesWithAnimation[1].style.visibility = "visible";
    imagesWithAnimation[1].style.opacity = 1;
    imagesWithAnimation[1].style.animation = "slideInRight";
    imagesWithAnimation[1].style.animationDuration = "3s";
    imagesWithAnimation[2].style.opacity = 1;
    imagesWithAnimation[2].style.visibility = "visible";
    imagesWithAnimation[2].style.animation = "slideInLeft";
    imagesWithAnimation[2].style.animationDuration = "3s";
  } else {
    const rootElement = entry.target;
    const imagesWithAnimation = [
      ...rootElement.querySelectorAll("div[class*='animation_']"),
    ];
    imagesWithAnimation.map((elm) => {
      elm.style.visibility = "hidden";
      elm.style.opacity = 0;
      elm.style.animation = "";
      elm.style.animationDuration = "";
    });
  }
}
