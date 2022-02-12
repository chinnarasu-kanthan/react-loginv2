import { createStore, applyMiddleware,combineReducers } from "redux";
const rootRedcer = combineReducers({});
const store = createStore(
  rootRedcer
)

export default store;