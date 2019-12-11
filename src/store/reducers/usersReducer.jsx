import {
  SERVER_REQUEST,
  GET_USERS,
  SET_SEARCH
} from "../actions/actionTypes.js";

const initialState = {
  data: [],
  isFetching: false,
  text: ""
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
    case SET_SEARCH:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

export default userReducer;
