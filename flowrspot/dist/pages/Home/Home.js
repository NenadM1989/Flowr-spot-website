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
import "./Home.css";
import image from "../../images/hero.png";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import { RandomFlowerList } from "../../services/services";
import Warning from "../../components/Warning/Warning";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFlowers } from "../../store/flowers/actions";
import ClipLoader from "react-spinners/ClipLoader";
var Home = function () {
    var _a = useState([]), flowers = _a[0], setFlowers = _a[1];
    var _b = useState(), term = _b[0], setTerm = _b[1];
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    var flowerList = useSelector(function (state) { return state.flowers.flowers; });
    var dispatch = useDispatch();
    useEffect(function () {
        if (!term) {
            if (flowerList.length === 0) {
                RandomFlowerList.getFlowers()
                    .then(function (data) {
                    setFlowers(data.data.flowers);
                    dispatch(addFlowers(data.data.flowers));
                    setTimeout(function () { return setLoading(false); }, 2000);
                })
                    .catch(function (error) { return console.log(error); });
            }
            else {
                setFlowers(flowerList);
                setTimeout(function () { return setLoading(false); }, 2000);
            }
        }
        if (term) {
            RandomFlowerList.getFlowers()
                .then(function (data) {
                return setFlowers(data.data.flowers.filter(function (flower) { return flower.name.toLowerCase() === term; }));
            })
                .catch(function (error) { return console.log(error); });
        }
    }, [term, dispatch, flowers.length]);
    var searchSubmit = function (value) {
        setTerm(value);
    };
    return (_jsxs("div", __assign({ className: "hero-container" }, { children: [_jsxs("div", __assign({ className: "hero-image" }, { children: [_jsx("img", { className: "hero-image-picture", src: image }), _jsxs("div", __assign({ className: "hero-content" }, { children: [_jsx(Link, __assign({ to: "/singleflower" }, { children: _jsx("h1", { children: "Discover flowers around you" }) })), _jsx("p", __assign({ className: "explore" }, { children: "Explore between more than 8.427 sightings" })), _jsx(Search, { onSubmit: searchSubmit })] }))] })), _jsx("div", __assign({ className: "list" }, { children: loading ? (_jsx("div", __assign({ className: "spinner" }, { children: _jsx(ClipLoader, { color: "rgb(241, 206, 201)", loading: loading, size: 75 }) }))) : flowers.length > 0 ? (_jsx(CardList, { flowers: flowers })) : (_jsx(Warning, {})) }))] })));
};
export default Home;
//# sourceMappingURL=Home.js.map