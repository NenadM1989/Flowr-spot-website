import { SET_FLOWERS } from "./constants";

const initialState = { flowers: [] };

const flowersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FLOWERS:
      return { ...state, flowers: payload };
    default:
      return state;
  }
};

export default flowersReducer;
