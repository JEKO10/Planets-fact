import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <h1>No Planet Here!</h1>
      <Link to="/">Back Home</Link>
    </section>
  );
}

export default Error;
