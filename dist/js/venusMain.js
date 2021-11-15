const overview = document.querySelector(".overview");
const structure = document.querySelector(".structure");
const geology = document.querySelector(".geology");
const planetInfo = document.querySelector(".planetInfo p");
const venusImg = document.querySelector("#venusImg");
const geologyImg = document.querySelector("#geologyVenusImg");

overview.addEventListener("click", () => {
  venusImg.src = "../../images/venus/planet-venus.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
});

structure.addEventListener("click", () => {
  venusImg.src = "../../images/venus/planet-venus-internal.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
});

geology.addEventListener("click", () => {
  venusImg.src = "../../images/venus/planet-venus.svg";
  geologyImg.style.display = "block";
  planetInfo.innerHTML =
    "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.";
});
