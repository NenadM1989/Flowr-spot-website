import { ADD_FLOWERS } from "./constants";

const initialState = { flowers: [] };

const flowerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLOWERS:
      return { ...state, flowers: action.payload };
    default:
      return state;
  }
};

export default flowerReducer;
