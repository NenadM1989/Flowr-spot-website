var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./constants";
var initialState = { favorites: [] };
var favoritesReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case ADD_TO_FAVORITES:
            return { favorites: __spreadArray(__spreadArray([], state.favorites, true), [payload], false) };
        case REMOVE_FROM_FAVORITES:
            return {
                favorites: state.favorites.filter(function (id) { return id !== payload; }),
            };
        default:
            return state;
    }
};
export default favoritesReducer;
//# sourceMappingURL=reducers.js.map