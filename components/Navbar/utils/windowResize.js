/**
 * @description This function will handle the resize window
 */
export default function windowResize() {
  // If the window width was under the 993 deactive the hamburger button and hidden the menu
  if (window.innerWidth < 993) {
    const head_menu = document.querySelector("#head_menu");
    const toggleButton = document.querySelector("#navbar_toggle_menu");
    if (toggleButton.hasAttribute("active")) {
      toggleButton.removeAttribute("active");
    }
    if (head_menu.style.visibility == "visible") {
      head_menu.style.visibility = "hidden";
      head_menu.style.animation = "";
    }
  }
  // if the window width was bigger than 993 make the menu visible
  if (window.innerWidth > 993) {
    const head_menu = document.querySelector("#head_menu");
    if (head_menu.style.visibility == "hidden") {
      head_menu.style.visibility = "visible";
    }
  }
}
