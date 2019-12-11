import { createSelector } from "reselect";

const usersSelector = state => state.userReducer.data;
const userText = state => state.userReducer.text;

export const getFilteredUsers = (data, text) => {
  return data.filter(({ name }) => {
    return name.toLowerCase().includes(text.toLowerCase());
  });
};

export default createSelector(usersSelector, userText, getFilteredUsers);
