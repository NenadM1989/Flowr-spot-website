import { ADD_FLOWERS } from "./constants";
import { AnyAction } from "redux";
import { IFlowersState } from "../../types/types";

const initialState: IFlowersState = { flowers: [] };

const flowerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_FLOWERS:
      return { ...state, flowers: action.payload };
    default:
      return state;
  }
};

export default flowerReducer;
