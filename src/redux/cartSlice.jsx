import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}
const cartSlice = createSlice(
  {
    name: "cart",
    initialState,
    reducers: {
      addItem: (state, payload) => {
        
      },
      getTotalItems: (state, payload) => {

      },
      getTotalPrice: (state) => {

      }, 
    }
  }
)

export const {addItem, getTotalItems, getTotalPrice} = cartSlice.actions;