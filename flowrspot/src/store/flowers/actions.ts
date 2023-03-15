import { ADD_FLOWERS } from "./constants";
import { IFlower } from "../../types/types";

export function addFlowers(flowers: IFlower) {
  return {
    type: ADD_FLOWERS,
    payload: flowers,
  };
}
