import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import data from "@/sample-data/data.json";

/**
 * Represents user data.
 */
type UserData = {
  id: number;
  name: string;
  email: string;
};

/**
 * Represents the state of data including sorting information.
 */
type DataState = {
  sort: {
    sort: any;
    data: UserData[];
  };
};

/**
 * Initial state for the sortedSlicer slice.
 */
const initialState: DataState = {
  sort: {
    data: data,
    sort: undefined,
  },
};

/**
 * Represents a slice of data in Redux store.
 *
 * @remarks
 * This slice is created using the `createSlice` function from Redux Toolkit.
 *
 * @public
 */
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

/**
 * The default reducer function for the sorted slice.
 * @returns The updated state after applying the reducer logic.
 */
export default dataSlice.reducer;

/**
 * Selects the data from the sort slice of the state.
 *
 * @param state - The DataState object representing the Redux state.
 * @returns The selected data from the sort slice.
 */
export const selectData = (state: DataState) => state.sort.sort.data;

/**
 * Selects and returns the data from the Redux store, sorted by name in ascending order.
 *
 * @param {AppState} state - The current state of the Redux store.
 * @returns {Data[]} - The sorted data array.
 */
export const selectSortedData = createSelector([selectData], (data) => {
  const sortedData = [...data].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedData;
});
