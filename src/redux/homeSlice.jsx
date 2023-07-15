import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getHome = createAsyncThunk(
  "/products",
  async(_, {rejectWithValue}) => {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
)

const initialState = {
  products: {},
  loading: false,
  error: null,
}

const homeSlice = createSlice(
  {
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getHome.pending, (state) => {
        state.loading = true
      })
      .addCase(getHome.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(getHome.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
    }
  }
)

export default homeSlice.reducer;