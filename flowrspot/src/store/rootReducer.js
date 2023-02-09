import { combineReducers } from "redux";
import favorites from "./flower/reducers";

const rootReducer = combineReducers({
  favorites,
});

export default rootReducer;
