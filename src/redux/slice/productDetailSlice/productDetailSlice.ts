import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const productDetailFetch = createAsyncThunk(
  'productDetails/fetch',
  async id => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  },
);

export type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: string;
  brand: string;
  discountPercentage: string;
  rating: string;
  stock: number;
  warrantyInformation: string;
  returnPolicy: string;
};

interface ProductDetailState {
  product: Product | null;
  loading: boolean;
  isFavourite: boolean;
  error: string | undefined;
}

const initialState: ProductDetailState = {
  product: null,
  loading: false,
  isFavourite: false,
  error: undefined,
};

const productDetailSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setFavourite: (state, action) => {
      state.isFavourite = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(productDetailFetch.pending, state => {
        state.loading = true;
      })
      .addCase(productDetailFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(productDetailFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {setFavourite} = productDetailSlice.actions;
export default productDetailSlice.reducer;
