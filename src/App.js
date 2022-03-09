import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Planet from "./components/Planet";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/planet/:id" element={<Planet />} />
      </Routes>
    </Router>
  );
}

export default App;
