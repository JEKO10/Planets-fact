const overviewButton = document.querySelector(".overview");
const structureButton = document.querySelector(".structure");
const geologyButton = document.querySelector(".geology");
const links = document.querySelector(".fix");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const hamburgerImg = document.querySelector("#hamburgerBtn img");

hamburgerBtn.addEventListener("click", () => {
  links.classList.toggle("active");
  hamburgerImg.src = "../../images/icon-hamburger.svg";

  if (links.classList.contains("active")) {
    hamburgerImg.src = "../../images/icon-close.svg";
  }
});

overviewButton.addEventListener("click", () => {
  overviewButton.classList.add("active");

  structureButton.classList.remove("active");
  geologyButton.classList.remove("active");
});

structureButton.addEventListener("click", () => {
  structureButton.classList.add("active");

  overviewButton.classList.remove("active");
  geologyButton.classList.remove("active");
});

geologyButton.addEventListener("click", () => {
  geologyButton.classList.add("active");

  overviewButton.classList.remove("active");
  structureButton.classList.remove("active");
});
