import { ADD_FAVORITE, REMOVE_FAVORITE } from "./constants";

const initialState = [];

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((flowerId) => flowerId !== action.payload);
    default:
      return state;
  }
};

export default favorites;
