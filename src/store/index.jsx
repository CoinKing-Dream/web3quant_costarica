// Import the configureStore utility from Redux Toolkit and individual reducers.
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import generalReducer from "./generalSlice"; // Reducer for user-related state

// Configure the Redux store
const store = configureStore({
  reducer: {
    general: generalReducer
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Export the configured Redux store
export default store;
