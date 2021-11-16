const overview = document.querySelector(".overview");
const structure = document.querySelector(".structure");
const geology = document.querySelector(".geology");
const planetInfo = document.querySelector(".planetInfo p");
const saturnImg = document.querySelector("#saturnImg");
const geologyImg = document.querySelector("#geologySaturnImg");

overview.addEventListener("click", () => {
  saturnImg.src = "../../images/saturn/planet-saturn.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";
});

structure.addEventListener("click", () => {
  saturnImg.src = "../../images/saturn/planet-saturn-internal.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
});

geology.addEventListener("click", () => {
  saturnImg.src = "../../images/saturn/planet-saturn.svg";
  geologyImg.style.display = "block";
  planetInfo.innerHTML =
    "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.";
});
