import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Flowers from "./components/Flowers/Flowers";
import Favorites from "./components/Favorites";
import Sightings from "./components/Sightings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/flowers" exact component={() => <Flowers />} />
          <Route path="/favorites" exact component={() => <Favorites />} />
          <Route path="/sightings" exact component={() => <Sightings />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
