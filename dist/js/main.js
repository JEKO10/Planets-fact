const overview = document.querySelector(".overview");
const structure = document.querySelector(".structure");
const geology = document.querySelector(".geology");
const mercuryImg = document.querySelector("#mercuryImg");
const geologyImg = document.querySelector("#geologyImg");

overview.addEventListener("click", () => {
  overview.classList.add("active");

  structure.classList.remove("active");
  geology.classList.remove("active");

  mercuryImg.src = "../../images/mercury/planet-mercury.svg";
  geologyImg.style.display = "none";
});

structure.addEventListener("click", () => {
  structure.classList.add("active");

  overview.classList.remove("active");
  geology.classList.remove("active");

  mercuryImg.src = "../../images/mercury/planet-mercury-internal.svg";
  geologyImg.style.display = "none";
});

geology.addEventListener("click", () => {
  geology.classList.add("active");

  overview.classList.remove("active");
  structure.classList.remove("active");

  mercuryImg.src = "../../images/mercury/planet-mercury.svg";
  geologyImg.style.display = "block";
});
