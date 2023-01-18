import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Flowers from "./pages/Flowers/Flowers";
import Favorites from "./pages/Favorites/Favorites";
import Sightings from "./pages/Sightings/Sightings";
import ErrorPage from "./pages/404/404";
import Login from "./pages/Login/Login";
import CreateAnnAccount from "./pages/CreateAnAccount/CreateAnAccount";
import Modal from "./components/Modal/Modal";
import FlowerDetail from "./pages/FlowerDetail/FlowerDetail";
import User from "./pages/User/User";
import Profile from "./pages/Profile/Profile";
import SightingDetail from "./pages/SightingDetail/SightingDetail";

const App = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const openModalHandler = (boolean) => {
    setOpen(boolean);
  };

  const openModalLoginHandler = (boolean) => {
    setOpenLogin(boolean);
  };

  const setisLoginHandler = (boolean) => {
    setOpenProfile(boolean);
  };

  const setLoggedHandler = (boolean) => {
    setIsLogged(boolean);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          func={openModalHandler}
          funct={openModalLoginHandler}
          log={isLogged}
          openProfile={setOpenProfile}
        />
        {open && (
          <Modal>
            <CreateAnnAccount func={openModalHandler} />
          </Modal>
        )}
        {openLogin && (
          <Modal>
            <Login funct={openModalLoginHandler} funcLog={setLoggedHandler} />
          </Modal>
        )}

        {openProfile && (
          <Modal>
            <Profile funct={setisLoginHandler} funcLog={setLoggedHandler} />
          </Modal>
        )}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/flowers" exact component={() => <Flowers />} />
          <Route path="/favorites" exact component={() => <Favorites />} />
          <Route path="/sightings" exact component={() => <Sightings />} />
          <Route
            path="/sighting-detail"
            exact
            component={() => <SightingDetail />}
          />
          <Route path="/user" exact component={() => <User />} />
          <Route
            path="/flowerdetail/:id"
            exact
            component={() => <FlowerDetail />}
          />
          <Route path="/*" exact component={() => <ErrorPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
