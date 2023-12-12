import { createSlice } from '@reduxjs/toolkit';

export const CartProductSlice = createSlice({
  name: 'CartObject',
  initialState:{},
  reducers: {
    ChangeProcuctObject: (state,actions) => {
      console.log('change product object')
      state = actions.payload[0];
     
      return state;
    }   
  },
});

export const { ChangeProcuctObject } = CartProductSlice.actions;
export const selectCount = (state) => state.CartObject.value;

export default CartProductSlice.reducer;
