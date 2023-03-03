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
import { useState, useEffect } from "react";
import styles from "../Sightings/Sightings.module.css";
import AddNewSightings from "../../components/Buttons/AddNewSightings";
import image from "../../images/hero-sightings.png";
import CardSighting from "../../components/CardSighting/CardSighting";
import { RandomFlowerList } from "../../services/services";
var Sightings = function () {
    var _a = useState([]), flowers = _a[0], setFlowers = _a[1];
    useEffect(function () {
        RandomFlowerList.getFlowers()
            .then(function (data) { return setFlowers(data.data.flowers); })
            .catch(function (error) { return console.log(error); });
    }, []);
    return (_jsxs("div", __assign({ className: styles["sightings - container"] }, { children: [_jsx("img", { src: image, alt: "", className: styles.image }), _jsxs("div", __assign({ className: styles["sighting-list"] }, { children: [_jsxs("div", __assign({ className: styles["sightings-text"] }, { children: [_jsx("p", __assign({ className: styles.p1 }, { children: "Sighting list" })), _jsx("p", __assign({ className: styles.p2 }, { children: "Explore between more than 8.427 sightings" }))] })), _jsx("div", __assign({ className: styles["sightings-button"] }, { children: _jsx(AddNewSightings, {}) }))] })), _jsx("div", __assign({ className: styles["cardsight-list"] }, { children: flowers.map(function (flower) { return (_jsx(CardSighting, { picture: flower.profile_picture }, flower.id)); }) }))] })));
};
export default Sightings;
//# sourceMappingURL=Sightings.js.map