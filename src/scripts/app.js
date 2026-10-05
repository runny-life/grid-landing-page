import "../styles/index.scss";

const buttonElement = document.querySelector("[data-js-toggle-menu-button]");
const menuElement = document.querySelector("[data-js-menu]");
const overlayElement = document.querySelector("[data-js-overay]");

const onClickButtonElement = () => {
  let isExpanded = buttonElement.getAttribute("aria-expanded");
  buttonElement.setAttribute("aria-expanded", isExpanded === "true" ? "false" : "true");
  menuElement.classList.toggle("is-active");
  overlayElement.classList.toggle("is-active");
}

buttonElement.addEventListener("click", onClickButtonElement)