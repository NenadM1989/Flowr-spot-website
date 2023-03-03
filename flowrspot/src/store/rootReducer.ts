import { combineReducers } from "redux";
import favoritesReducer from "./favorite/reducers";
import flowerReducer from "./flowers/reducers";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  flowers: flowerReducer,
});

export default rootReducer;
