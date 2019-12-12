import baseUrl from "../../api/jsonPlaceholder";
import { GET_USERS, SERVER_REQUEST, SET_SEARCH } from "./actionTypes";

export const getServersRequest = () => ({
  type: SERVER_REQUEST
});

export const fetchUsers = data => {
  return {
    type: GET_USERS,
    data
  };
};

export const setSearch = searchValue => {
  return {
    type: SET_SEARCH,
    searchValue
  };
};

export const getUsers = () => (dispatch, getState) => {
  if (!getState().userReducer.isFetching) {
    dispatch(getServersRequest());
    baseUrl.get("/users").then(({ data }) => {
      dispatch(fetchUsers(data));
    });
  }
};
