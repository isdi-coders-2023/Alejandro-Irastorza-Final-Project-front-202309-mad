import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import {
  addNewProductThunk,
  deleteProductThunk,
  loadOneProductThunk,
  loadProductsThunk,
} from './products.thunk';

export type ProductsState = {
  currentProduct: Product | null;
  products: Product[] | null;
  productState: 'idle' | 'loading' | 'loaded' | 'error';
  productFilter:
    | 'Todos los productos'
    | 'Litros 1.0'
    | 'Sueritos'
    | 'Litros 2.0'
    | 'Shots';
};

const initialState: ProductsState = {
  currentProduct: null,
  products: null,
  productState: 'idle',
  productFilter: 'Todos los productos',
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

    builder.addCase(
      loadProductsThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product[]>) => {
        state.productState = 'loaded';
        state.products = payload;
        return state;
      }
    );

    builder.addCase(loadProductsThunk.rejected, (state: ProductsState) => {
      state.productState = 'error';
      return state;
    });

    builder.addCase(loadOneProductThunk.pending, (state: ProductsState) => {
      state.productState = 'loading';
      return state;
    });

    builder.addCase(
      loadOneProductThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product>) => {
        state.productState = 'loaded';
        state.currentProduct = payload;
        return state;
      }
    );

    builder.addCase(loadOneProductThunk.rejected, (state: ProductsState) => {
      state.productState = 'error';
      return state;
    });

    builder.addCase(
      deleteProductThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product[]>) => {
        state.products = payload;
      }
    );

    builder.addCase(addNewProductThunk.fulfilled, (state: ProductsState) => {
      console.log('product added', state.products);
    });
  },
});

export default productsSlice.reducer;
