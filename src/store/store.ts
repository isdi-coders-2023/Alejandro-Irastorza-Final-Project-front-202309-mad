import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/users/users.slice.js';
import productsReducer from '../slices/products/products.slice.js';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
