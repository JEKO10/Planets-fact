import data from "../data.json";
import Planet from "./Planet";

function Planets() {
  return (
    <>
      {data.map((planet) => {
        return <Planet key={planet.id} planet={planet} />;
      })}
    </>
  );
}

export default Planets;
