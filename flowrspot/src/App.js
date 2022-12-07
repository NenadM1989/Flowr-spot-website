import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Flowers from "./pages/Flowers/Flowers";
import Favorites from "./pages/Favorites";
import Sightings from "./pages/Sightings/Sightings";
import ErrorPage from "./pages/404/404";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/flowers" exact component={() => <Flowers />} />
          <Route path="/favorites" exact component={() => <Favorites />} />
          <Route path="/sightings" exact component={() => <Sightings />} />
          <Route path="/*" exact component={() => <ErrorPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
