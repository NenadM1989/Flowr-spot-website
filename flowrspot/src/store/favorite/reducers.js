import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./constants";

const initialState = { favorites: [] };

const favoritesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
