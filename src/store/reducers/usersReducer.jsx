import { SERVER_REQUEST, GET_USERS } from "../actions/actionTypes.js";

const initialState = {
  data: [],
  isFetching: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_USERS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      };
    default:
      return state;
  }
};

export default userReducer;
