import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/navbar.js';

import Horoscope from "./components/horoscope.js";

function App() {
  return (
    <Router>
    <div>
    <Navbar></Navbar>
      <Switch>
        <Route path="/">
          <Horoscope />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
