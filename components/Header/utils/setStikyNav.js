export default function setStikyNav(element, mainElement, window, nav) {
  const windowY = window.scrollY;
  const navY = mainElement.dataset.initOffset;
  if (windowY >= navY) {
    nav.classList.add("stiky");
  } else {
    nav.classList.remove("stiky");
  }
}
