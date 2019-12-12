import {
  SERVER_REQUEST,
  GET_USERS,
  SET_SEARCH
} from "../actions/actionTypes.js";

const initialState = {
  data: [],
  isFetching: false,
  searchValue: ""
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
        searchValue: action.searchValue
      };
    default:
      return state;
  }
};

export default userReducer;
