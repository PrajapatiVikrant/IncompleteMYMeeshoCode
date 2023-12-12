
import { configureStore } from '@reduxjs/toolkit';
import addSlice from './Slice/addSlice';
import Counter from './Slice/Cartno';
import CartProduct from './Slice/CartProduct';
import Product from './Slice/Product';

export const store = configureStore({
  reducer: {
    counter: Counter,
    product:CartProduct,
    productlist:Product,
    cartarray:addSlice,
  },
});
