import { Link } from "react-router-dom";
import mercury from "../assets/planet-mercury.svg";
import venus from "../assets/planet-venus.svg";
import earth from "../assets/planet-earth.svg";
import mars from "../assets/planet-mars.svg";
import jupiter from "../assets/planet-jupiter.svg";
import saturn from "../assets/planet-saturn.svg";
import uranus from "../assets/planet-uranus.svg";
import neptune from "../assets/planet-neptune.svg";

function Home({ setColor, setBorder }) {
  return (
    <section className="system">
      <Link
        to="planet/0"
        onClick={() => {
          setColor("#419db9");
          setBorder("#def4fc");
        }}
      >
        <img src={mercury} alt="img" id="mercury" />
      </Link>
      <Link
        to="planet/1"
        onClick={() => {
          setColor("#eda44a");
          setBorder("#f7cc7e");
        }}
      >
        <img src={venus} alt="img" id="venus" />
      </Link>
      <Link
        to="planet/2"
        onClick={() => {
          setColor("#6f2ed6");
          setBorder("#5358fb");
        }}
      >
        <img src={earth} alt="img" id="earth" />
      </Link>
      <Link
        to="planet/3"
        onClick={() => {
          setColor("#d14e33");
          setBorder("#ff6c47");
        }}
      >
        <img src={mars} alt="img" id="mars" />
      </Link>
      <Link
        to="planet/4"
        onClick={() => {
          setColor("#d93b36");
          setBorder("#ecad79");
        }}
      >
        <img src={jupiter} alt="img" id="jupiter" />
      </Link>
      <Link
        to="planet/5"
        onClick={() => {
          setColor("#cb5020");
          setBorder("#fccb69");
        }}
      >
        <img src={saturn} alt="img" id="saturn" />
      </Link>
      <Link
        to="planet/6"
        onClick={() => {
          setColor("#1ec2a4");
          setBorder("#66f0d4");
        }}
      >
        <img src={uranus} alt="img" id="uranus" />
      </Link>
      <Link
        to="planet/7"
        onClick={() => {
          setColor("#2e68f0");
          setBorder("#477dfa");
        }}
      >
        <img src={neptune} alt="img" id="neptune" />
      </Link>
    </section>
  );
}

export default Home;
