import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Importing sample data from a JSON file
import data from "@/sample-data/data.json";

// Defining the structure of user data
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Defining the structure of the data state
interface DataState {
  sort: {
    sort: any; // Define the type for the sort property if needed
    data: UserData[];
  };
}

// Initial state of the data slice
const initialState: DataState = {
  sort: {
    data: data,
    sort: undefined, // Initial sort value is undefined
  },
};

// Creating a data slice using Redux Toolkit
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

// Exporting the reducer for the data slice
export default dataSlice.reducer;

// Selector function to get unsorted data from the state
export const selectData = (state: DataState) => state.sort.sort.data;

// Selector function using Reselect to sort the data alphabetically by name
export const selectSortedData = createSelector([selectData], (data) => {
  // Creating a shallow copy of the data array to avoid mutating the original array
  const sortedData = [...data].sort((a, b) => {
    // Using localeCompare to perform case-sensitive string comparison for sorting
    return a.name.localeCompare(b.name);
  });

  // Returning the sorted data
  return sortedData;
});
