import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact element={<Home />} />
      </Switch>
    </Router>
  );
};

export default App;
