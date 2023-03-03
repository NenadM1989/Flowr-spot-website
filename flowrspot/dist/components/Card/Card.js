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
import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites, } from "../../store/favorite/actions";
var Card = function (_a) {
    var name = _a.name, latinName = _a.latinName, profilePicture = _a.profilePicture, sightings = _a.sightings, id = _a.id;
    var _b = useState(), log = _b[0], setLog = _b[1];
    var navigateTo = useHistory();
    var dispatch = useDispatch();
    var favorites = useSelector(function (state) { return state.favorites; });
    var isFavorite = favorites.favorites.includes(id);
    useEffect(function () {
        var token = localStorage.getItem("auth_token");
        setLog(!!token);
    }, []);
    var handleClick = function () {
        if (!isFavorite) {
            dispatch(addToFavorites(id));
        }
        else {
            dispatch(removeFromFavorites(id));
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: styles.card }, { children: [_jsx("div", __assign({ className: styles["like-button"], onClick: handleClick }, { children: log && (_jsx("div", { children: _jsx("i", { className: "fa fa-star ".concat(styles.star, " ").concat(isFavorite ? styles.favorite : "") }) })) })), _jsx("img", { src: profilePicture, alt: "flower", onClick: function () { return navigateTo.push("/flowerdetail/".concat(id)); } }), _jsxs("div", __assign({ className: styles["flower-description"] }, { children: [_jsx("div", __assign({ className: styles["flower-name"] }, { children: _jsx("h3", { children: name }) })), _jsx("div", __assign({ className: styles["latin-name"] }, { children: _jsx("p", __assign({ className: styles.latin }, { children: latinName })) })), _jsx("div", __assign({ className: styles.sightings }, { children: _jsxs("p", __assign({ className: styles.paragraph }, { children: [sightings, " sightings"] })) }))] }))] })) }));
};
export default Card;
//# sourceMappingURL=Card.js.map