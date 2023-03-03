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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardList.module.css";
var CardList = function (_a) {
    var flowers = _a.flowers;
    return (_jsx("div", __assign({ className: styles.container }, { children: flowers.map(function (flower) { return (_jsx(Card, { name: flower.name, latinName: flower.latin_name, profilePicture: flower.profile_picture, sightings: flower.sightings, id: flower.id }, flower.id)); }) })));
};
export default CardList;
//# sourceMappingURL=CardList.js.map