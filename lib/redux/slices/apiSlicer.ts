// Import necessary modules from Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type UserData = {
  id: number;
  name: string;
  email: string;
};

// Define a new state type to include loading and error properties
type ApiState = {
  data: UserData[] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: ApiState = {
  data: null,
  isLoading: false,
  error: null,
};

// Define an asynchronous thunk action
export const fetchApiData = createAsyncThunk("api/fetchApiData", async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/data`);
    const data: UserData[] = await response.json();
    return data;
  } catch (error) {
    throw Error("Error fetching data");
  }
});

// Create a slice for the API data
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.data = [];
        state.error = action.error.message || null;
        state.isLoading = false;
      });
  },
});

export default apiSlice.reducer;
