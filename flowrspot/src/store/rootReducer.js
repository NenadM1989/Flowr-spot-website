import { combineReducers } from "redux";
import favoritesReducer from "./favorite/reducers";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;
