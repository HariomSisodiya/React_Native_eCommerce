import {combineReducers, configureStore} from '@reduxjs/toolkit';
import categoryReducer from '../slice/categorySlice/categorySlice';
import fetchCategoryReducer from '../slice/fetchCategorySlice/fetchCategorySlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  fetchCategory: fetchCategoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
