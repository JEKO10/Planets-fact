function NavBar() {
  return (
    <nav>
      <h1>The Planets</h1>
      <button id="hamburgerBtn">
        <img src="./icon-hamburger.svg" alt="btn" />
      </button>
      <div class="fix">
        <ul class="links">
          <li>
            <a href="mercury">
              <div id="ball"></div>
              Mercury
            </a>
          </li>
          <li>
            <a href="venus">
              <div id="ball"></div>
              Venus
            </a>
          </li>
          <li>
            <a href="earth">
              <div id="ball"></div>
              Earth
            </a>
          </li>
          <li>
            <a href="mars">
              <div id="ball"></div>
              Mars
            </a>
          </li>
          <li>
            <a href="jupiter">
              <div id="ball"></div>
              Jupiter
            </a>
          </li>
          <li>
            <a href="saturn">
              <div id="ball"></div>
              Saturn
            </a>
          </li>
          <li>
            <a href="uranus">
              <div id="ball"></div>
              Uranus
            </a>
          </li>
          <li>
            <a href="neptune">
              <div id="ball"></div>
              Neptune
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
