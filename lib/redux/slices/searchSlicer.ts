// Import necessary modules from Redux Toolkit and Reselect
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Import sample data from a JSON file
import data from "@/sample-data/data.json";

// Define the structure of user data
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Define the initial state of the search feature
interface SearchState {
  searchTerm: string;
  data: UserData[];
}

// Initialize the state with the provided sample data
const initialState: SearchState = {
  searchTerm: "",
  data,
};

// Create a Redux slice for the search feature
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Reducer to update the search term in the state
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

// Export the action creator for setting the search term
export const { setSearchTerm } = searchSlice.actions;

// Create a Reselect selector to filter data based on the search term
export const selectFilteredData = createSelector(
  // Selector input: Get the search term from the state
  (state: { search: SearchState }) => state.search.searchTerm,
  // Selector input: Get the data array from the state
  (state: { search: SearchState }) => state.search.data,
  // Selector output: Filter data based on the search term
  (searchTerm, data) => {
    return data.filter((item) =>
      // Case-insensitive search for the name property
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  },
);

// Export the reducer for the search feature
export default searchSlice.reducer;

// Export selectors to access specific parts of the state
export const selectSearchTerm = (state: { search: SearchState }) =>
  state.search.searchTerm;
export const selectData = (state: { search: SearchState }) => state.search.data;
