import { ADD_FAVORITE, REMOVE_FAVORITE, ADD_FLOWERS } from "./constants";

export const addToFavorites = (id) => {
  return {
    type: ADD_FAVORITE,
    payload: id,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const addFlowers = (flowers) => {
  return {
    type: ADD_FLOWERS,
    payload: flowers,
  };
};
