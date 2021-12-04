export default function animationController(inView, entry) {
  const intersectionRatio = entry.intersectionRatio;
  if (inView) {
    const rootElement = entry.target;
    const imagesWithAnimation = [
      ...rootElement.querySelectorAll(
        "div[class*='animations_container'] > div[class*='animation']"
      ),
    ];
    if (intersectionRatio) {
      imagesWithAnimation[0].style.visibility = "visible";
      imagesWithAnimation[0].style.opacity = 1;
      imagesWithAnimation[0].style.animation = "swing";
      imagesWithAnimation[0].style.animationDuration = "8s";
      imagesWithAnimation[1].style.visibility = "visible";
      imagesWithAnimation[1].style.opacity = 1;
      imagesWithAnimation[1].style.animation = "slideInRight";
      imagesWithAnimation[1].style.animationDuration = "3s";
    }
  } else {
    const rootElement = entry.target;
    const imagesWithAnimation = [
      ...rootElement.querySelectorAll(
        "div[class*='animations_container'] > div[class*='animation']"
      ),
    ];
    imagesWithAnimation.map((elm) => {
      elm.style.visibility = "hidden";
      elm.style.opacity = 0;
      elm.style.animation = "";
      elm.style.animationDuration = "";
    });
  }
}
