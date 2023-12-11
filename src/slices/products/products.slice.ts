import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import { loadProductsThunk } from './products.thunk';

export type ProductsState = {
  currentProduct: Product | null;
  products: Product[] | null;
  productState: 'idle' | 'loading' | 'loaded' | 'error';
};

const initialState: ProductsState = {
  currentProduct: null,
  products: null,
  productState: 'idle',
};

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProductsThunk.pending, (state: ProductsState) => {
      console.log('Loaded products rejected');
      state.productState = 'loading';
      return state;
    });

    builder.addCase(loadProductsThunk.rejected, (state: ProductsState) => {
      state.productState = 'error';
      return state;
    });

    builder.addCase(
      loadProductsThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product[]>) => {
        state.productState = 'loaded';
        state.products = payload;
        return state;
      }
    );
  },
});

export default productsSlice.reducer;
