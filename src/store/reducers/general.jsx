/* eslint-disable @typescript-eslint/no-explicit-any */
// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import { dispatch } from '../index';

// types
// ----------------------------------------------------------------------
const initialState = {
  flagHeadNotify: true
};

const general = createSlice({
  name: 'general',
  initialState,
  reducers: {
   
    updateHeadNotify(state, action) {
      return {
        ...state, // Spread the existing state to maintain immutability
        flagHeadNotify: action.payload, // Replace the user property with the new payload
      };
    }, 
  }
});

// Reducer
export default general.reducer;

// ----------------------------------------------------------------------


export function updateHeadNotify(val) {
    dispatch(general.actions.updateHeadNotify(val));
}


