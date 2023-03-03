import { ADD_FLOWERS } from "./constants";

export function addFlowers(flowers: any) {
  return {
    type: ADD_FLOWERS,
    payload: flowers,
  };
}
