import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Planet from "./components/Planet";
import Error from "./components/Error";

function App() {
  const [color, setColor] = useState("");

  return (
    <Router>
      <NavBar color={color} setColor={setColor} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/planet/:id">
          <Planet color={color} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
