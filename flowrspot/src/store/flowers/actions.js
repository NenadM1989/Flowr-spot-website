import { SET_FLOWERS } from "./constants";

export function setFlowers(flowers) {
  return {
    type: SET_FLOWERS,
    payload: flowers,
  };
}
