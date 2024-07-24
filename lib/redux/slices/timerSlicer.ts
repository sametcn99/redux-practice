import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Represents a time slice with a timestamp.
 */
type TimeSlice = {
  timestamp: number;
};

/**
 * Represents the initial state for the timer slice.
 */
const initialState: TimeSlice = {
  timestamp: new Date().getTime(),
};

/**
 * Represents a Redux slice for managing time-related state.
 */
const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    /**
     * Updates the timestamp value in the state.
     * @param state - The current state.
     * @param action - The Redux action containing the payload.
     */
    updateTime: (state, action: PayloadAction<number>) => {
      state.timestamp = action.payload;
    },
  },
});

export const { updateTime } = timeSlice.actions;

export default timeSlice.reducer;
