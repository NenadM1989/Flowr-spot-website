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
import React from "react";
import styles from "./Profile.module.css";
import image from "../../images/profile-picture.png";
var Profile = function (_a) {
    var funct = _a.funct, funcLog = _a.funcLog;
    var handleClick = function () {
        funct(false);
        funcLog(false);
        localStorage.removeItem("auth_token");
    };
    return (_jsxs("div", __assign({ className: styles.profile }, { children: [_jsx("div", __assign({ className: styles.close, onClick: function () { return funct(false); } }, { children: "X" })), _jsxs("div", __assign({ className: styles["image-name"] }, { children: [_jsx("div", __assign({ className: styles.image }, { children: _jsx("img", { src: image, alt: "profile-image" }) })), _jsxs("div", __assign({ className: styles.name }, { children: [_jsx("h3", { children: "Michael Berry" }), _jsx("p", { children: "47 sightings" })] }))] })), _jsxs("div", __assign({ className: styles.info }, { children: [_jsxs("div", __assign({ className: styles["first-name"] }, { children: [_jsx("p", { children: "First Name" }), _jsx("h3", { children: "Michael" })] })), _jsxs("div", __assign({ className: styles["last-name"] }, { children: [_jsx("p", { children: "Last Name" }), _jsx("h3", { children: "Berry" })] })), _jsxs("div", __assign({ className: styles.email }, { children: [_jsx("p", { children: "Email Adress" }), _jsx("h3", { children: "michael.berry@gmail.com" })] }))] })), _jsx("div", __assign({ className: styles.button, onClick: handleClick }, { children: _jsx("button", { children: "Logout" }) }))] })));
};
export default Profile;
//# sourceMappingURL=Profile.js.map