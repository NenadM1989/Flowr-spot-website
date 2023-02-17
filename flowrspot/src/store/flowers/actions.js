import { ADD_FLOWERS } from "./constants";

export function addFlowers(flowers) {
  return {
    type: ADD_FLOWERS,
    payload: flowers,
  };
}
