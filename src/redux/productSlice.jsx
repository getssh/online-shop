import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProduct = createAsyncThunk(
  '/id',
  async(productId, {rejectWithValue}) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`)
      const data = res.json()

      return data;
    } catch (error) {
      return rejectWithValue({message: error.message})
    }
  }
)

const initialState = {
  loading: false,
  product: {},
  error: null
}

const productSlice = createSlice(
  {
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
    }
  }
)

export default productSlice.reducer;