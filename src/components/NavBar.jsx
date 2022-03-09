import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>The Planets</h1>
      <button id="hamburgerBtn">
        <img src="./icon-hamburger.svg" alt="btn" />
      </button>
      <div className="fix">
        <ul className="links">
          <Link to="/planet/0">
            <li>
              <a href="mercury">
                <div id="ball"></div>
                Mercury
              </a>
            </li>
          </Link>
          <Link to="/planet/1">
            <li>
              <a href="venus">
                <div id="ball"></div>
                Venus
              </a>
            </li>
          </Link>
          <Link to="/planet/2">
            <li>
              <a href="earth">
                <div id="ball"></div>
                Earth
              </a>
            </li>
          </Link>
          <Link to="/planet/3">
            <li>
              <a href="mars">
                <div id="ball"></div>
                Mars
              </a>
            </li>
          </Link>
          <Link to="/planet/4">
            <li>
              <a href="jupiter">
                <div id="ball"></div>
                Jupiter
              </a>
            </li>
          </Link>
          <Link to="/planet/5">
            <li>
              <a href="saturn">
                <div id="ball"></div>
                Saturn
              </a>
            </li>
          </Link>
          <Link to="/planet/6">
            <li>
              <a href="uranus">
                <div id="ball"></div>
                Uranus
              </a>
            </li>
          </Link>
          <Link to="/planet/7">
            <li>
              <a href="neptune">
                <div id="ball"></div>
                Neptune
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
