/**
 * @description this function will handle click on the humberger menu
 * @param {any} e
 */
export default function handleMenuAnimation(e) {
  // catch the target
  let target = e.target;
  // If clicked on the spans catch the div
  if (target.id != "navbar_toggle_menu") {
    target = target.parentElement;
  }
  // if attribute active was there remove it
  if (target.hasAttribute("active")) {
    target.removeAttribute("active");
  } else {
    // else add it
    target.setAttribute("active", "");
  }
  // run the menu handler
  toggleHeadMenu();
}
/**
 * @description This function will handle the visibility of the navbar on phone
 */
function toggleHeadMenu() {
  // grab  the menu
  const head_menu = document.querySelector("#head_menu");
  // if menu was visible run the fadeOut animation and make the menu hidden
  if (
    head_menu.style.animation == "0.8s ease 0s 1 normal none running fadeIn"
  ) {
    head_menu.style.animation = "fadeOut";
    head_menu.style.animationDuration = ".7s";
    setTimeout(() => {
      head_menu.style.visibility = "hidden";
    }, 690);
  }
  // Else add the fadeIn animation and make it visible
  else if (
    head_menu.style.animation == "0.7s ease 0s 1 normal none running fadeOut" ||
    head_menu.style.animation == ""
  ) {
    head_menu.style.animation = "fadeIn";
    head_menu.style.animationDuration = ".8s";
    head_menu.style.visibility = "visible";
  }
}
