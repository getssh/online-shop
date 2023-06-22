import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}
const cartSlice = createSlice(
  {
    name: "cart",
    initialState,
    reducers: {
      addItem: (state, action) => {
        state.items = [...state.items, action.payload]
      },
      getTotalItems: (state) => {
        const itemLength = state.items;
        state.totalItems = itemLength.length;
      },
      getTotalPrice: (state) => {
        let total = state.items.reduce((tot, crr) => tot += crr, 0);
        state.totalPrice = total;
      },
      removeItem: (state, action) => {
	      //fix the logic
        state.items = state.items.filter((item) => {
          return item.id == action.payload;
        })
      }
    }
  }
)

export const {addItem, getTotalItems, getTotalPrice} = cartSlice.actions;
