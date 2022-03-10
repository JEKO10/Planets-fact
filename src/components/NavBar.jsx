import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ color, setColor }) {
  const [border, setBorder] = useState("");

  const styles = {
    borderTop: `5px solid ${border}`,
  };

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
            style={border === "#def4fc" ? styles : {}}
            onClick={() => {
              setColor("#419db9");
              setBorder("#def4fc");
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
            style={border === "#f7cc7e" ? styles : {}}
            onClick={() => {
              setColor("#eda44a");
              setBorder("#f7cc7e");
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
            style={border === "#5358fb" ? styles : {}}
            onClick={() => {
              setColor("#6f2ed6");
              setBorder("#5358fb");
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
            style={border === "#ff6c47" ? styles : {}}
            onClick={() => {
              setColor("#d14e33");
              setBorder("#ff6c47");
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
            style={border === "#ecad79" ? styles : {}}
            onClick={() => {
              setColor("#d93b36");
              setBorder("#ecad79");
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
            style={border === "#fccb69" ? styles : {}}
            onClick={() => {
              setColor("#cb5020");
              setBorder("#fccb69");
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
            style={border === "#66f0d4" ? styles : {}}
            onClick={() => {
              setColor("#1ec2a4");
              setBorder("#66f0d4");
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
            style={border === "#477dfa" ? styles : {}}
            onClick={() => {
              setColor("#2e68f0");
              setBorder("#477dfa");
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
