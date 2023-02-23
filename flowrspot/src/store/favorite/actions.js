import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./constants";

export const addToFavorites = (id) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: id,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
