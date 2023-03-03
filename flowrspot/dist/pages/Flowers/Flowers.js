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
import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import styles from "../Flowers/Flowers.module.css";
import Card from "../../components/Card/Card";
import { RandomFlowerList } from "../../services/services";
var Flowers = function () {
    var _a = useState([]), flowers = _a[0], setFlowers = _a[1];
    useEffect(function () {
        RandomFlowerList.getFlowers()
            .then(function (data) { return setFlowers(data.data.flowers); })
            .catch(function (error) { return console.log(error); });
    }, []);
    return (_jsxs("div", __assign({ className: styles.flowers }, { children: [_jsx("div", __assign({ className: styles.search }, { children: _jsx(Search, {}) })), _jsx("div", __assign({ className: styles.list }, { children: _jsx("div", __assign({ className: styles.items }, { children: flowers.map(function (flower) { return (_jsx(Card, { name: flower.name, latinName: flower.latin_name, profilePicture: flower.profile_picture, sightings: flower.sightings }, flower.id)); }) })) }))] })));
};
export default Flowers;
//# sourceMappingURL=Flowers.js.map