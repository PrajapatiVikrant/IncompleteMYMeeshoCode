// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state,actions) => {
      console.log(actions.payload)
      state += actions.payload;
      return state
    },
    decrement: (state,actions) => {
      console.log(actions.payload)
      state -= actions.payload;
      return state
    }
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
