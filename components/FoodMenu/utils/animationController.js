export default function animationController(inView, entry) {
  const rootElement = entry.target;
  const intersectionRatio = entry.intersectionRatio;
  const images = [
    ...rootElement.querySelectorAll("div[class*='animation_'] > figure"),
  ];
  if (inView) {
    if (intersectionRatio >= 0.05) {
      images[0].style.animation = "rotateInDownLeft";
      images[0].style.animationDuration = "2s";
      images[1].style.animation = "rotateInDownRight";
      images[1].style.animationDuration = "3s";
    }
  } else {
    images[0].style.animation = "";
    images[0].style.animationDuration = "";
    images[1].style.animation = "";
    images[1].style.animationDuration = "";
  }
}
