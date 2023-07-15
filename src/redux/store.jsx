import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import productReducer from './productSlice'

const store = configureStore({
  reducer: {
      cart: cartReducer,
      products: homeReducer,
      product: productReducer,
    }
  }
)

export default store;
