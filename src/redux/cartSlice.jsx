import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItems: 0,
  totalPrice: 0
}
const cartSlice = createSlice(
  {
    name: "cart",
    initialState,
    reducers: {

    }
  }
)

