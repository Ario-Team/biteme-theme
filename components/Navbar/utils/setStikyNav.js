export default function setStikyNav(element, window, nav) {
  const windowY = window.scrollY;
  const navY = nav.scrollHeight;
  if (windowY >= navY) {
    nav.classList.add("stiky");
  } else {
    nav.classList.remove("stiky");
  }
}
