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
import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import Card from "../../components/Card/Card";
var Favorites = function () {
    var favorites = useSelector(function (state) { return state.favorites.favorites; });
    var flowers = useSelector(function (state) { return state.flowers.flowers; });
    return (_jsx("div", __assign({ className: styles.flowers }, { children: _jsx("div", __assign({ className: styles.list }, { children: _jsx("div", __assign({ className: styles.items }, { children: favorites.length === 0 ? (_jsx("p", __assign({ className: styles.paragraph }, { children: "You have no favorite flowers yet!" }))) : (favorites.map(function (favorite) {
                    var flower = flowers.find(function (cvet) { return cvet.id === favorite; });
                    if (flower) {
                        return (_jsx(Card, { name: flower.name, latinName: flower.latin_name, profilePicture: flower.profile_picture, sightings: flower.sightings, id: flower.id }, flower.id));
                    }
                    return null;
                })) })) })) })));
};
export default Favorites;
//# sourceMappingURL=Favorites.js.map