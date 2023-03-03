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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import flowerspot from "/flowerspot.png";
import image from "../../images/profile-picture.png";
var Navbar = function (_a) {
    var funct = _a.funct, func = _a.func, openProfile = _a.openProfile;
    var _b = useState(), log = _b[0], setLog = _b[1];
    var token = localStorage.getItem("auth_token");
    useEffect(function () {
        setLog(!!token);
    }, [token]);
    return (_jsxs("nav", __assign({ className: "navbar" }, { children: [_jsx(Link, __assign({ to: "/" }, { children: _jsx("img", { src: flowerspot, alt: "logo", height: 30, width: 169 }) })), _jsxs("ul", __assign({ className: "nav-links" }, { children: [_jsx(Link, __assign({ to: "/flowers", className: "flowers" }, { children: _jsx("li", { children: "Flowers" }) })), _jsx(Link, __assign({ to: "/sightings", className: "sightings" }, { children: _jsx("li", { children: "Latest Sightings" }) })), _jsx(Link, __assign({ to: "/favorites", className: "favorites" }, { children: _jsx("li", { children: "Favorites" }) })), !log && (_jsxs(_Fragment, { children: [_jsx(Link, __assign({ to: "/", onClick: function () {
                                    funct(true);
                                }, className: "login" }, { children: _jsx("li", { children: "Login" }) })), _jsx("li", { children: _jsx("button", __assign({ onClick: function () {
                                        func(true);
                                    }, className: "button" }, { children: "New Account" })) })] })), log && (_jsxs(_Fragment, { children: [_jsx(Link, __assign({ onClick: function () {
                                    funct(true);
                                }, className: "navbar-item-login", to: "/" }, { children: "John Doe" })), _jsx(Link, __assign({ to: "/" }, { children: _jsx("img", { onClick: function () { return openProfile(true); }, src: image, className: "navbar-image-login" }) }))] }))] }))] })));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map