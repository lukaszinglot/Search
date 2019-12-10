import baseUrl from "../../api/jsonPlaceholder";
import {
  GET_USERS,
  SERVER_REQUEST,
  SEARCH
} from "./actionTypes";

export const getServersRequest = () => ({
  type: SERVER_REQUEST
});

export const fetchUsers = (data) => {
  return {
    type: GET_USERS,
    data
  };
};

export const getSearch = (value) => {
  return {
    type: SEARCH,
    value
  }
}

export const getUsers = () => (dispatch, getState) => {
  if (!getState().usersReducer.isFetching) {
    dispatch(getServersRequest());
    baseUrl.get("/users").then(({
      data
    }) => {
      dispatch(fetchUsers(data));
    });
  }
};