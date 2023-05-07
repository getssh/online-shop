import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const getProduct = createAsyncThunk(
  '/products/id',
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

