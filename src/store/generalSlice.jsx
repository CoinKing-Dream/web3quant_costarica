import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the user's slice of the store.
const initialState = {
  flagHeadNotify: true, // Token to authenticate API requests
  flagSubscribeModal: false   // Show Subscribe Modal
};

// Create a "slice" of the state with three reducers to handle user actions.
const generalSlice = createSlice({
  name: "user", // The name of the slice used in action types
  initialState, // The initial state defined above
  reducers: {
    // Reducer to handle login action
    updateHeadNotify: (state, action) => {
      state.flagHeadNotify = action.payload;
    },
    updateSubscribeModal: (state, action) => {
      state.flagSubscribeModal = action.payload;
    }
  },
});

// Export actions to be used with dispatch in React components
export const { updateHeadNotify, updateSubscribeModal } = generalSlice.actions;

// Export the reducer to be included when creating the Redux store
export default generalSlice.reducer;
