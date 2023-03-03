import { combineReducers } from "redux";
import favoritesReducer from "./favorite/reducers";
import flowerReducer from "./flowers/reducers";
var rootReducer = combineReducers({
    favorites: favoritesReducer,
    flowers: flowerReducer,
});
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map