var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal/Modal";
var Home = lazy(function () { return import("./pages/Home/Home"); });
var Flowers = lazy(function () { return import("./pages/Flowers/Flowers"); });
var Favorites = lazy(function () { return import("./pages/Favorites/Favorites"); });
var Sightings = lazy(function () { return import("./pages/Sightings/Sightings"); });
var ErrorPage = lazy(function () { return import("./pages/404/404"); });
var Login = lazy(function () { return import("./pages/Login/Login"); });
var CreateAnnAccount = lazy(function () { return import("./pages/CreateAnAccount/CreateAnAccount"); });
var FlowerDetail = lazy(function () { return import("./pages/FlowerDetail/FlowerDetail"); });
var User = lazy(function () { return import("./pages/User/User"); });
var Profile = lazy(function () { return import("./pages/Profile/Profile"); });
var SightingDetail = lazy(function () { return import("./pages/SightingDetail/SightingDetail"); });
var SingleFlower = lazy(function () { return import("./pages/SingleFlower/SingleFlower"); });
var App = function () {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var _b = useState(false), openLogin = _b[0], setOpenLogin = _b[1];
    var _c = useState(false), openProfile = _c[0], setOpenProfile = _c[1];
    var _d = useState(false), isLogged = _d[0], setIsLogged = _d[1];
    var openModalHandler = function (boolean) {
        setOpen(boolean);
    };
    var openModalLoginHandler = function (boolean) {
        setOpenLogin(boolean);
    };
    var setisLoginHandler = function (boolean) {
        setOpenProfile(boolean);
    };
    var setLoggedHandler = function (boolean) {
        setIsLogged(boolean);
    };
    return (_jsx("div", __assign({ className: "App" }, { children: _jsxs(Router, { children: [_jsx(Navbar, { func: openModalHandler, funct: openModalLoginHandler, log: isLogged, openProfile: setOpenProfile }), open && (_jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }) }, { children: _jsx(CreateAnnAccount, { func: openModalHandler }) }))), openLogin && (_jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }) }, { children: _jsx(Login, { funct: openModalLoginHandler, funcLog: setLoggedHandler }) }))), openProfile && (_jsx(Modal, { children: _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }) }, { children: _jsx(Profile, { funct: setisLoginHandler, funcLog: setLoggedHandler }) })) })), _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }) }, { children: _jsxs(Switch, { children: [_jsx(Route, { path: "/", exact: true, component: function () { return _jsx(Home, {}); } }), _jsx(Route, { path: "/flowers", exact: true, component: function () { return _jsx(Flowers, {}); } }), _jsx(Route, { path: "/favorites", exact: true, component: function () { return _jsx(Favorites, {}); } }), _jsx(Route, { path: "/sightings", exact: true, component: function () { return _jsx(Sightings, {}); } }), _jsx(Route, { path: "/sighting-detail", exact: true, component: function () { return _jsx(SightingDetail, {}); } }), _jsx(Route, { path: "/user", exact: true, component: function () { return _jsx(User, {}); } }), _jsx(Route, { path: "/flowerdetail/:id", exact: true, component: function () { return _jsx(FlowerDetail, {}); } }), _jsx(Route, { path: "/profile", exact: true, component: function () { return _jsx(Profile, {}); } }), _jsx(Route, { path: "/singleflower", exact: true, component: function () { return _jsx(SingleFlower, {}); } }), _jsx(Route, { path: "/*", exact: true, component: function () { return _jsx(ErrorPage, {}); } })] }) }))] }) })));
};
export default App;
//# sourceMappingURL=App.js.map