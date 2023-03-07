import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./constants";
import { AnyAction } from "redux";
import { IFavoritesState } from "../../types/types";

const initialState: IFavoritesState = { favorites: [] };

const favoritesReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAVORITES:
      return { favorites: [...state.favorites, payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        favorites: state.favorites.filter((id) => id !== payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
