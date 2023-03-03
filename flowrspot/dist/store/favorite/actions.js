import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./constants";
export var addToFavorites = function (id) {
    return {
        type: ADD_TO_FAVORITES,
        payload: id,
    };
};
export var removeFromFavorites = function (id) {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id,
    };
};
//# sourceMappingURL=actions.js.map