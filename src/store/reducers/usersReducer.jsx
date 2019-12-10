import { SERVER_REQUEST, GET_USERS, SEARCH } from "../actions/actionTypes.js";

const initialState = {
  data: [],
  isFetching: false,
  filtered: []
};

export const serverReducer = (state = initialState, action) => {
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
        data: action.data,
        ids: action.ids
      };
    case SEARCH:
      const { value } = action;
      const filtered = state.data.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      return { ...state, value, filtered };

    default:
      return state;
  }
};

export default serverReducer;
