export default function animationController(inView, entry) {
  const intersectionRatio = entry.intersectionRatio;
  if (inView) {
    const rootElement = entry.target;
    const imagesWithAnimation = [...rootElement.querySelectorAll("figure")];
    if (intersectionRatio >= 0.05) {
      imagesWithAnimation[0].style.visibility = "visible";
      imagesWithAnimation[0].style.animation = "fadeInDown";
      imagesWithAnimation[0].style.animationDuration = "2s";
      imagesWithAnimation[2].style.visibility = "visible";
      imagesWithAnimation[2].style.animation = "rotateInDownRight";
      imagesWithAnimation[2].style.animationDuration = "3s";
    }
    if (intersectionRatio >= 0.4) {
      imagesWithAnimation[1].style.visibility = "visible";
      imagesWithAnimation[1].style.animation = "swing";
      imagesWithAnimation[1].style.animationDuration = "8s";
      imagesWithAnimation[3].style.visibility = "visible";
      imagesWithAnimation[3].style.animation = "zoomIn";
      imagesWithAnimation[3].style.animationDuration = "4s";
    }
  } else {
    const rootElement = entry.target;
    const imagesWithAnimation = [...rootElement.querySelectorAll("figure")];
    imagesWithAnimation.map((elm) => {
      elm.style.visibility = "hidden";
      elm.style.animation = "";
      elm.style.animationDuration = "";
    });
  }
}
