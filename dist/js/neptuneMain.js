const overview = document.querySelector(".overview");
const structure = document.querySelector(".structure");
const geology = document.querySelector(".geology");
const planetInfo = document.querySelector(".planetInfo p");
const neptuneImg = document.querySelector("#neptuneImg");
const geologyImg = document.querySelector("#geologyNeptuneImg");

overview.addEventListener("click", () => {
  neptuneImg.src = "../../images/neptune/planet-neptune.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
});

structure.addEventListener("click", () => {
  neptuneImg.src = "../../images/neptune/planet-neptune-internal.svg";
  geologyImg.style.display = "none";
  planetInfo.innerHTML =
    "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
});

geology.addEventListener("click", () => {
  neptuneImg.src = "../../images/neptune/planet-neptune.svg";
  geologyImg.style.display = "block";
  planetInfo.innerHTML =
    "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
});
