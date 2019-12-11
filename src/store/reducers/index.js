import { combineReducers } from "redux";

import userReducer from "./usersReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  userReducer,
  searchReducer
});
