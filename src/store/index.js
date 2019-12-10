import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composedEnhancers = composeWithDevTools();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    composedEnhancers
  )
);
