import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const addSlice = createSlice({
  name: 'addedSlice',
  initialState:[],
  reducers: {
    getCartData: (state,actions)=>{
      console.log('getCartdata function has run')
      console.log(actions.payload)
      state = actions.payload;
      return state
    },
  
    UpdateCartarray: (state,actions)=>{
      console.log('UpdateCartarray has run')
      state = actions.payload;
      return state;
    }   
  },
});

export const { getCartData ,ChangeProcuctCartArray, UpdateCartarray } = addSlice.actions;
export const cartarray = (state) => state.addedSlice.value;

export default addSlice.reducer;