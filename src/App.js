import "./App.css";
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Reach from "./pages/Reach";
import Showcase from "./pages/Showcase";
import Preloader from "./components/Preloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setTimeout(() => setSpinner(true), 3000)
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          {spinner ? (
            <>
            <Route exact path="/showcase" page={Showcase}>
              <Showcase />
            </Route>
            <Route exact path="/reach" page={Reach}>
              <Reach />
            </Route>
            <Route exact path="/about" page={About}>
              <About />
            </Route>
            <Route exact path="/" page={Home}>
              <Home />
            </Route>
          </>
          ) : (
            <Preloader/>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
