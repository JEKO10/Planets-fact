import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

function NavBar({ color, setColor, border, setBorder }) {
  const [isFix, setIsFix] = useState(false);

  const styles = {
    borderTop: `5px solid ${border}`,
  };

  const stylesAfter = {
    borderBottom: `5px solid ${border}`,
  };

  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;

  return (
    <nav>
      <Link
        to="/"
        onClick={() => {
          setColor("");
          setBorder("");
        }}
      >
        <h1>The Planets</h1>
      </Link>
      <button
        id="hamburgerBtn"
        onClick={() => {
          setIsFix(!isFix);
        }}
      >
        <img src={!isFix ? hamburger : close} alt="btn" />
      </button>
      <div className={isFix ? "fix active" : "fix"}>
        <ul className="links">
          <li
            onClick={() => {
              setColor("#419db9");
              setBorder("#def4fc");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#def4fc" && width > 992
                  ? styles
                  : border === "#def4fc"
                  ? stylesAfter
                  : {}
              }
              to="/planet/0"
              className={color === "#419db9" ? "active" : ""}
            >
              Mercury
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#eda44a");
              setBorder("#f7cc7e");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#f7cc7e" && width > 992
                  ? styles
                  : border === "#f7cc7e"
                  ? stylesAfter
                  : {}
              }
              to="/planet/1"
              className={color === "#eda44a" ? "active" : ""}
            >
              Venus
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#6f2ed6");
              setBorder("#5358fb");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#5358fb" && width > 992
                  ? styles
                  : border === "#5358fb"
                  ? stylesAfter
                  : {}
              }
              to="/planet/2"
              className={color === "#6f2ed6" ? "active" : ""}
            >
              Earth
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#d14e33");
              setBorder("#ff6c47");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#ff6c47" && width > 992
                  ? styles
                  : border === "#ff6c47"
                  ? stylesAfter
                  : {}
              }
              to="/planet/3"
              className={color === "#d14e33" ? "active" : ""}
            >
              Mars
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#d93b36");
              setBorder("#ecad79");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#ecad79" && width > 992
                  ? styles
                  : border === "#ecad79"
                  ? stylesAfter
                  : {}
              }
              to="/planet/4"
              className={color === "#d93b36" ? "active" : ""}
            >
              Jupiter
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#cb5020");
              setBorder("#fccb69");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#fccb69" && width > 992
                  ? styles
                  : border === "#fccb69"
                  ? stylesAfter
                  : {}
              }
              to="/planet/5"
              className={color === "#cb5020" ? "active" : ""}
            >
              Saturn
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#1ec2a4");
              setBorder("#66f0d4");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#66f0d4" && width > 992
                  ? styles
                  : border === "#66f0d4"
                  ? stylesAfter
                  : {}
              }
              to="/planet/6"
              className={color === "#1ec2a4" ? "active" : ""}
            >
              Uranus
            </Link>
          </li>
          <li
            onClick={() => {
              setColor("#2e68f0");
              setBorder("#477dfa");
              setIsFix(false);
            }}
          >
            <div id="ball"></div>
            <Link
              style={
                border === "#477dfa" && width > 992
                  ? styles
                  : border === "#477dfa"
                  ? stylesAfter
                  : {}
              }
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
