// Import the necessary functions and types from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Configure the Redux store using the rootReducer
// configureStore is a function provided by Redux Toolkit that simplifies the store setup
const reduxStore = configureStore({
  reducer: rootReducer, // Set the root reducer for the store
});

// Define types for better TypeScript support:

// Define RootState type using the ReturnType utility type to infer the state shape from the root reducer
export type RootState = ReturnType<typeof reduxStore.getState>;

// Define AppDispatch type representing the store's dispatch function
export type AppDispatch = typeof reduxStore.dispatch;

// Export the configured Redux store as the default export of this module
export default reduxStore;
