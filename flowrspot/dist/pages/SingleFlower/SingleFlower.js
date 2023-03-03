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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import styles from "../../pages/SingleFlower/SingleFlower.module.css";
import flower from "../../images/pl-image.png";
var SingleFlower = function () {
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: styles["info-background"] }, { children: [_jsx("img", { src: flower, alt: "flower", className: styles["info-pic"] }), _jsxs("div", __assign({ className: "info-data" }, { children: [_jsxs("div", __assign({ className: styles["info-like"] }, { children: [_jsx("div", { className: styles["info-star"] }), _jsx("div", { className: styles["info-sightings"] })] })), _jsx("h1", __assign({ className: styles["info-name"] }, { children: "St. Anthony Tulip" })), _jsx("h3", __assign({ className: styles["info-latin-name"] }, { children: "Ranuculus experimentis" }))] })), _jsx("button", { children: "+Add New Sighting" })] })), ";"] }));
};
export default SingleFlower;
//# sourceMappingURL=SingleFlower.js.map