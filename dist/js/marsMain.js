const overview = document.querySelector(".overview");
const structure = document.querySelector(".structure");
const geology = document.querySelector(".geology");
const planetInfo = document.querySelector(".planetInfo p");
const marsImg = document.querySelector("#marsImg");
const geologyImg = document.querySelector("#geologyMarsImg");

overview.addEventListener("click", () => {
  marsImg.src = "../../images/mars/planet-mars.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
});

structure.addEventListener("click", () => {
  marsImg.src = "../../images/mars/planet-mars-internal.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
});

geology.addEventListener("click", () => {
  marsImg.src = "../../images/mars/planet-mars.svg";
  geologyImg.style.display = "block";
  planetInfo.innerHTML =
    "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
});
