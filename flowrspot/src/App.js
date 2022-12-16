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
import Profile from "./pages/Profile/Profile";

const App = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const setOpenModal = (boolean) => {
    setOpen(boolean);
  };
  const setOpenModalLogin = (boolean) => {
    setOpenLogin(boolean);
  };
  const setisLogin = (boolean) => {
    setOpenProfile(boolean);
  };
  const setLogged = (boolean) => {
    setIsLogged(boolean);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          funct={setOpenModalLogin}
          func={setOpenModal}
          log={isLogged}
          openProfile={setOpenProfile}
        />
        {open && (
          <Modal>
            <CreateAnnAccount func={setOpenModal} />
          </Modal>
        )}
        {openLogin && (
          <Modal>
            <Login funct={setOpenModalLogin} funcLog={setLogged} />
          </Modal>
        )}
        {openProfile && (
          <Modal>
            <Profile funct={setisLogin} funcLog={setLogged} />
          </Modal>
        )}
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
