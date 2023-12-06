// Import necessary functions/types from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the state of the time slice
interface TimeSlice {
  timestamp: number; // A timestamp representing the current time
}

// Set the initial state for the time slice
const initialState: TimeSlice = {
  timestamp: new Date().getTime(), // Initialize timestamp with the current time
};

// Create a Redux slice for managing time-related state
const timeSlice = createSlice({
  name: "time", // Name of the slice, used in the Redux store
  initialState, // Initial state defined above
  reducers: {
    // Reducer function to handle updating the timestamp
    updateTime: (state, action: PayloadAction<number>) => {
      // Update the timestamp with the new value provided in the action payload
      state.timestamp = action.payload;
    },
  },
});

// Extract the action creator from the slice
export const { updateTime } = timeSlice.actions;

// Export the reducer function to be used in the Redux store
export default timeSlice.reducer;
