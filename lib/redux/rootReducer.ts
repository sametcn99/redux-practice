import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlicer";
import userReducer from "./slices/userSlicer";
import todoReducer from "./slices/todoSlicer";
import searchReducer from "./slices/searchSlicer";
import timeReducer from "./slices/timerSlicer";
import sortReducer from "./slices/sortedSlicer";

/**
 * Root reducer function that combines all the individual reducers.
 * @returns The combined state object.
 */
const rootReducer = combineReducers({
  /**
   * The counter reducer function.
   */
  counter: counterReducer,
  /**
   * The user reducer function.
   */
  user: userReducer,
  /**
   * The todo reducer function.
   */
  todo: todoReducer,
  /**
   * The search reducer function.
   */
  search: searchReducer,
  /**
   * The time reducer function.
   */
  time: timeReducer,
  /**
   * The sort reducer function.
   */
  sort: sortReducer,
});

/**
 * The combined state object.
 */
export default rootReducer;
