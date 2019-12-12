import { createSelector } from "reselect";

const usersSelector = state => state.userReducer.data;
const userSearchValue = state => state.userReducer.searchValue;

export const getFilteredUsers = (data, searchValue) => {
  return data.filter(({ name }) => {
    return name.toLowerCase().includes(searchValue.toLowerCase());
  });
};

export default createSelector(usersSelector, userSearchValue, getFilteredUsers);
