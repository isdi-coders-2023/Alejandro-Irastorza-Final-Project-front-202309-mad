import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import { ApiRepoProducts } from '../../repo/api.repo.products';

export const loadProductsThunk = createAsyncThunk<Product[], ApiRepoProducts>(
  'products/load',
  async (repo) => {
    const products = repo.getAllProducts();
    return products;
  }
);
