// Import the combineReducers function from Redux Toolkit to combine multiple reducers into a single root reducer
import { combineReducers } from "@reduxjs/toolkit";

// Import individual slice reducers
import counterReducer from "./slices/counterSlicer";
import userReducer from "./slices/userSlicer";
import todoReducer from "./slices/todoSlicer";
import searchReducer from "./slices/searchSlicer";
import timeReducer from "./slices/timerSlicer";
import sortReducer from "./slices/sortedSlicer";

// Combine the individual reducers into a root reducer using combineReducers
// The keys in the resulting state object will correspond to the names given to the individual reducers
const rootReducer = combineReducers({
  counter: counterReducer, // Reducer for managing counter-related state
  user: userReducer, // Reducer for managing user-related state
  todo: todoReducer, // Reducer for managing todo's
  search: searchReducer, // Reducer for managing search state
  time: timeReducer,
  sort: sortReducer,
});

// Export the combined root reducer as the default export of this module
export default rootReducer;
