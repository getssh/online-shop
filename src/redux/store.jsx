import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';

const store = configureStore({
  reducer: {
      products: homeReducer,
    }
  }
)

export default store;