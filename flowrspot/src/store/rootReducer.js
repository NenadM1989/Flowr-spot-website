import { combineReducers } from "redux";
import favorites from "./favorite/reducers";

const rootReducer = combineReducers({
  favorites,
});

export default rootReducer;
