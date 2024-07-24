import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Represents the state of a user.
 */
type UserState = {
  username: string;
  email: string;
};

/**
 * Represents the initial state for the user slice.
 */
const initialState: UserState = {
  username: "",
  email: "",
};

/**
 * Represents a Redux slice for managing user state.
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Sets the user information in the state.
     *
     * @param state - The current user state.
     * @param action - The Redux action containing the payload with user information.
     */
    setUser: (state, action: PayloadAction<UserState>) => {
      const { username, email } = action.payload;
      // Simple regex for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        // Handle invalid email, e.g., by setting an error message in the state
        console.error("Invalid email format");
        return; // Exit without updating state
      }
      // If email is valid, update the state
      state.username = username;
      state.email = email;
    },
  },
});

/**
 * Sets the user data.
 * @param payload - The user data to be set.
 */
export const { setUser } = userSlice.actions;

/**
 * The reducer function for the user slice.
 * @returns The updated state after applying the corresponding action.
 */
export default userSlice.reducer;
