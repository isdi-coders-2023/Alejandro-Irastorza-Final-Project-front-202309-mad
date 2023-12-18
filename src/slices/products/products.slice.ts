import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import {
  addNewProductThunk,
  deleteProductThunk,
  getByCategoryThunk,
  loadOneProductThunk,
  loadProductsThunk,
  updateCurrentProductThunk,
} from './products.thunk';

export type ProductsState = {
  currentProduct: Product | null;
  products: Product[] | null;
  productState: 'idle' | 'loading' | 'loaded' | 'error';
  productUpdateState: 'idle' | 'loading';
  productsOneloadState: 'idle' | 'loading' | 'error';
  popUpState: true | false;
  addProductState: 'idle' | 'loading' | 'error';
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
  productUpdateState: 'idle',
  productsOneloadState: 'idle',
  addProductState: 'idle',
  productFilter: 'Todos los productos',
  popUpState: true,
};

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setOffPopUp: (state: ProductsState) => {
      state.popUpState = false;
      return state;
    },

    setOnPopUp: (state: ProductsState) => {
      state.popUpState = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadProductsThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product[]>) => {
        state.productState = 'loaded';
        state.products = payload;
        return state;
      }
    );

    builder.addCase(
      getByCategoryThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product[]>) => {
        state.products = payload;
        state.productState = 'loaded';
        return state;
      }
    );

    builder.addCase(loadProductsThunk.rejected, (state: ProductsState) => {
      state.productState = 'error';
      return state;
    });

    builder.addCase(
      loadOneProductThunk.fulfilled,
      (state: ProductsState, { payload }: PayloadAction<Product>) => {
        state.productsOneloadState = 'idle';
        state.currentProduct = payload;
        return state;
      }
    );

    builder.addCase(loadOneProductThunk.rejected, (state: ProductsState) => {
      state.productState = 'error';
      return state;
    });

    builder.addCase(deleteProductThunk.fulfilled, (state: ProductsState) => {
      state.productState = 'idle';
    });

    builder.addCase(deleteProductThunk.pending, (state: ProductsState) => {
      state.productState = 'loading';
    });

    builder.addCase(addNewProductThunk.fulfilled, (state: ProductsState) => {
      state.addProductState = 'idle';
    });

    builder.addCase(addNewProductThunk.pending, (state: ProductsState) => {
      state.addProductState = 'loading';
    });

    builder.addCase(
      updateCurrentProductThunk.fulfilled,
      (state: ProductsState) => {
        state.productUpdateState = 'idle';
      }
    );
  },
});

export default productsSlice.reducer;
export const { setOffPopUp, setOnPopUp } = productsSlice.actions;
