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
import "../../components/CardSighting/CardSighting.css";
import { Link } from "react-router-dom";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import CardComments from "../CardComments/CardComments";
var CardSighting = function (_a) {
    var picture = _a.picture;
    return (_jsxs("div", __assign({ className: "card-sighting" }, { children: [_jsxs("div", __assign({ className: "card-picture" }, { children: [_jsx(Link, __assign({ to: "/sighting-detail" }, { children: _jsx("img", { src: picture, alt: "flower", className: "card-image" }) })), _jsxs("div", __assign({ className: "card-location" }, { children: [_jsx("i", { className: "fa fa-map-marker" }), _jsx("p", { children: "San Francisco, US" })] }))] })), _jsxs("div", __assign({ className: "card-description" }, { children: [_jsx(ProfilePicture, { width: "40px", fontSize: "15px", fontSizeItalic: "11px" }), _jsx("div", __assign({ className: "card-text" }, { children: _jsx("p", __assign({ className: "paragraph3" }, { children: "Platycodon grandiflorus (from Ancient Greek \u03C0\u03BB\u03B1\u03C4\u03CD\u03C2 wide and \u03BA\u03CE\u03B4\u03C9\u03BD bell) is a species of herbaceous flowering perennial plant of the \u2026" })) })), _jsx(CardComments, { width: "106%" })] }))] })));
};
export default CardSighting;
//# sourceMappingURL=CardSighting.js.map