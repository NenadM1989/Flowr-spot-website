import React, { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal/Modal";

const Home = lazy(() => import("./pages/Home/Home"));
const Flowers = lazy(() => import("./pages/Flowers/Flowers"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Sightings = lazy(() => import("./pages/Sightings/Sightings"));
const ErrorPage = lazy(() => import("./pages/404/404"));
const Login = lazy(() => import("./pages/Login/Login"));
const CreateAnnAccount = lazy(() =>
  import("./pages/CreateAnAccount/CreateAnAccount")
);
const FlowerDetail = lazy(() => import("./pages/FlowerDetail/FlowerDetail"));
const User = lazy(() => import("./pages/User/User"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const SightingDetail = lazy(() =>
  import("./pages/SightingDetail/SightingDetail")
);
const SingleFlower = lazy(() => import("./pages/SingleFlower/SingleFlower"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <CreateAnnAccount func={openModalHandler} />
          </Suspense>
        )}
        {openLogin && (
          <Suspense fallback={<div>Loading...</div>}>
            <Login funct={openModalLoginHandler} funcLog={setLoggedHandler} />
          </Suspense>
        )}

        {openProfile && (
          <Modal>
            <Suspense fallback={<div>Loading...</div>}>
              <Profile funct={setisLoginHandler} funcLog={setLoggedHandler} />
            </Suspense>
          </Modal>
        )}
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/profile" exact component={() => <Profile />} />
            <Route
              path="/singleflower"
              exact
              component={() => <SingleFlower />}
            />
            <Route path="/*" exact component={() => <ErrorPage />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
