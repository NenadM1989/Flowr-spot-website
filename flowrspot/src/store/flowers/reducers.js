import { SET_FLOWERS } from "./constants";

const initialState = {
  flowers: [],
};

const flowerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLOWERS:
      return [];
  }
};
