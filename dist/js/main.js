const overviewButton = document.querySelector(".overview");
const structureButton = document.querySelector(".structure");
const geologyButton = document.querySelector(".geology");

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
