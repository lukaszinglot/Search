import { SEARCH } from "../actions/actionTypes.js";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.text;
    default:
      return state;
  }
};

export default searchReducer;
