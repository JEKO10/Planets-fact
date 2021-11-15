const overview = document.querySelector(".overview");
const structure = document.querySelector(".structure");
const geology = document.querySelector(".geology");
const planetInfo = document.querySelector(".planetInfo p");
const mercuryImg = document.querySelector("#mercuryImg");
const geologyImg = document.querySelector("#geologyImg");

overview.addEventListener("click", () => {
  mercuryImg.src = "../../images/mercury/planet-mercury.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
});

structure.addEventListener("click", () => {
  mercuryImg.src = "../../images/mercury/planet-mercury-internal.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
});

geology.addEventListener("click", () => {
  mercuryImg.src = "../../images/mercury/planet-mercury.svg";
  geologyImg.style.display = "block";
  planetInfo.innerHTML =
    "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
});
