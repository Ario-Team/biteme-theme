export default function animationController(inView, entry) {
  const intersectionRatio = entry.intersectionRatio;
  if (inView) {
    const rootElement = entry.target;
    if (intersectionRatio >= 0.05) {
      const animationOne = rootElement.querySelector(
        "div[class*='animation_one']"
      );
      animationOne.style.animation = "fadeInDown";
      animationOne.style.animationDuration = "2s";
    }
    if (intersectionRatio >= 0.4) {
      const animationTwo = rootElement.querySelector(
        "div[class*='animation_two']"
      );
      animationTwo.style.animation = "swing";
      animationTwo.style.animationDuration = "8s";
    }
  } else {
    const rootElement = entry.target;
    const imagesWithAnimation = [
      ...rootElement.querySelectorAll(
        "div[class*='animation_container'] > div "
      ),
    ];
    imagesWithAnimation.map((elm) => {
      elm.style.animation = "";
      elm.style.animationDuration = "";
    });
  }
}
