export default function animationController(inView, entry) {
  const rootElement = entry.target;
  const intersectionRatio = entry.intersectionRatio;
  const animationElements = [
    ...rootElement.querySelectorAll("div[class*='animations_container'] > div"),
    rootElement.querySelector("div[class*='animations_container_two']"),
  ];
  if (inView) {
    if (intersectionRatio >= 0.05) {
      animationElements[0].style.animation = "swing";
      animationElements[0].style.animationDuration = "8s";
      animationElements[1].style.animation = "swing";
      animationElements[1].style.animationDuration = "6s";
      animationElements[2].style.animation = "fadeInRight";
      animationElements[2].style.animationDuration = "2s";
    }
  } else {
    animationElements[0].style.animation = "";
    animationElements[0].style.animationDuration = "";
    animationElements[1].style.animation = "";
    animationElements[1].style.animationDuration = "";
    animationElements[2].style.animation = "";
    animationElements[2].style.animationDuration = "";
  }
}
