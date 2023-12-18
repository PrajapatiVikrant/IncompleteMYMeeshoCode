import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const addSlice = createSlice({
  name: 'addedSlice',
  initialState:[],
  reducers: {
    getCartData: (state,actions)=>{
    
      state = actions.payload;
      return state
    },
  
    UpdateCartarray: (state,actions)=>{
    
      state = actions.payload;
      return state;
    }   
  },
});

export const { getCartData ,ChangeProcuctCartArray, UpdateCartarray } = addSlice.actions;
export const cartarray = (state) => state.addedSlice.value;

export default addSlice.reducer;