import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function Planet({ color }) {
  const { id } = useParams();
  const [internal, setInternal] = useState(false);
  const [geology, setGeology] = useState(false);
  const [active, setActive] = useState("overview");
  const { name, overview, rotation, revolution, radius, temperature, images } =
    data[id];

  return (
    <>
      <section className="main">
        <div className="images">
          {!internal ? (
            <img src={images.planet} alt="IMG" id="planet" />
          ) : (
            <img src={images.internal} alt="IMG" id="planet" />
          )}
          {geology ? <img src={images.geology} alt="IMG" id="geology" /> : ""}
        </div>
        <div className="planetInfo">
          <div>
            <h1>{name}</h1>
            <p>{overview.content}</p>
            <h3>
              Source:
              <a href={overview.source} target="__blank">
                Wikipedia
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                    fill="#FFF"
                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                    opacity=".5"
                  />
                </svg>
              </a>
            </h3>
          </div>
          <div className="buttonContainer" id="btnE">
            <button
              style={
                active === "overview"
                  ? { backgroundColor: color }
                  : { backgroundColor: "" }
              }
              className={active === "overview" ? "active" : ""}
              onClick={() => {
                setInternal(false);
                setActive("overview");
                setGeology(false);
              }}
            >
              <span>01</span> Overview
            </button>
            <button
              style={
                active === "internal"
                  ? { backgroundColor: color }
                  : { backgroundColor: "" }
              }
              className={active === "internal" ? "active" : ""}
              onClick={() => {
                setInternal(true);
                setActive("internal");
                setGeology(false);
              }}
            >
              <span>02</span> Internal Structure
            </button>
            <button
              style={
                active === "geology"
                  ? { backgroundColor: color }
                  : { backgroundColor: "" }
              }
              className={active === "geology" ? "active" : ""}
              onClick={() => {
                setActive("geology");
                setGeology(true);
              }}
            >
              <span>03</span> Surface Geology
            </button>
          </div>
        </div>
      </section>
      <section className="otherInfo">
        <div>
          <h5>Rotation Time</h5>
          <h1>{rotation}</h1>
        </div>
        <div>
          <h5>Revolution Time</h5>
          <h1>{revolution}</h1>
        </div>
        <div>
          <h5>Radius</h5>
          <h1>{radius}</h1>
        </div>
        <div>
          <h5>Average Temp.</h5>
          <h1>{temperature}</h1>
        </div>
      </section>
    </>
  );
}

export default Planet;
