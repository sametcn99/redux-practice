// Import necessary modules from Redux Toolkit and Reselect
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
 * Represents the state of the search feature.
 */
type SearchState = {
  searchTerm: string;
  data: UserData[];
};

/**
 * The initial state for the search slice.
 * @type {SearchState}
 */
const initialState: SearchState = {
  searchTerm: "",
  data,
};


/**
 * Redux slice for managing search state.
 */
/**
 * Represents a slice of the Redux store for search functionality.
 */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    /**
     * Sets the search term in the state.
     * @param state - The current state.
     * @param action - The action containing the payload.
     */
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

/**
 * Sets the search term in the search slice.
 * @param searchTerm - The new search term.
 */
export const { setSearchTerm } = searchSlice.actions;

/**
 * Selects and filters the data based on the search term.
 * @param state - The search state object.
 * @returns An array of filtered data items.
 */
export const selectFilteredData = createSelector(
  (state: { search: SearchState }) => state.search.searchTerm,
  (state: { search: SearchState }) => state.search.data,
  (searchTerm, data) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
);

/**
 * The reducer function for the search slice.
 * @returns The updated state after applying the action.
 */
export default searchSlice.reducer;

/**
 * Selects the search term from the state.
 * 
 * @param state - The Redux state object.
 * @returns The search term from the state.
 */
export const selectSearchTerm = (state: { search: SearchState }) =>
  state.search.searchTerm;


/**
 * Selects the data from the search state.
 * 
 * @param state - The Redux state object.
 * @returns The selected data from the search state.
 */
export const selectData = (state: { search: SearchState }) => state.search.data;
