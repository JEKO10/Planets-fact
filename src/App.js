import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Planet from "./components/Planet";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/planet/:id">
          <Planet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
