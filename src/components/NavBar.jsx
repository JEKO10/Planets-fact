import { Link } from "react-router-dom";

function NavBar({ color, setColor }) {
  return (
    <nav>
      <Link to="/">
        <h1>The Planets</h1>
      </Link>
      <button id="hamburgerBtn">
        <img src="./icon-hamburger.svg" alt="btn" />
      </button>
      <div className="fix">
        <ul className="links">
          <li
            onClick={() => {
              setColor("#419db9");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/0"
              className={color === "#419db9" ? "active" : ""}
            >
              Mercury
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#eda44a");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/1"
              className={color === "#eda44a" ? "active" : ""}
            >
              Venus
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#6f2ed6");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/2"
              className={color === "#6f2ed6" ? "active" : ""}
            >
              Earth
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#d14e33");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/3"
              className={color === "#d14e33" ? "active" : ""}
            >
              Mars
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#d93b36");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/4"
              className={color === "#d93b36" ? "active" : ""}
            >
              Jupiter
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#cb5020");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/5"
              className={color === "#cb5020" ? "active" : ""}
            >
              Saturn
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#1ec2a4");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/6"
              className={color === "#1ec2a4" ? "active" : ""}
            >
              Uranus
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#2e68f0");
            }}
          >
            <div id="ball"></div>
            <Link
              to="/planet/7"
              className={color === "#2e68f0" ? "active" : ""}
            >
              Neptune
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
