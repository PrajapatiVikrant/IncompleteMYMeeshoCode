// /src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';


export const ProductSlice = createSlice({
  name: 'Productlist',
  initialState:[],
  reducers: {
    ChangeProductlist: (state,action) => {
      
      state = action.payload;
      console.log(state)
      return state;
    }
   
  },
});

export const { ChangeProductlist } = ProductSlice.actions;
export const selectList = (state) => state.Productlist;

export default ProductSlice.reducer;
