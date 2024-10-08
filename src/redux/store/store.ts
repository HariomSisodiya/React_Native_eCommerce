import {combineReducers, configureStore} from '@reduxjs/toolkit';
import categoryReducer from '../slice/categorySlice/categorySlice';
import fetchCategoryReducer from '../slice/fetchCategorySlice/fetchCategorySlice';
import productDetailReducer from '../slice/productDetailSlice/productDetailSlice';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import {persistReducer, persistStore} from 'reduxjs-toolkit-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  category: categoryReducer,
  fetchCategory: fetchCategoryReducer,
  productDetails: productDetailReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST'],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};
