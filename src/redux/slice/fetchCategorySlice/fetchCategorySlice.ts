import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryData = createAsyncThunk(
  'fetchCategoryData/fetch',
  async (slug: string) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${slug}`,
    );
    return response.data.products;
  },
);

type Product = {
  id: string;
  title: string;
  thumbnail: string;
};

interface fetchCategoryState {
  data: Product[];
  loading: boolean;
  error: string | undefined;
}

const initialState: fetchCategoryState = {
  data: [],
  loading: false,
  error: undefined,
};

const fetchCategory = createSlice({
  name: 'fetchCategory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategoryData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchCategory.reducer;
