import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import { ApiRepoProducts } from '../../repo/api.repo.products';

export const loadProductsThunk = createAsyncThunk<Product[], ApiRepoProducts>(
  'products/load',
  async (repo) => {
    const products = await repo.getAllProducts();
    return products;
  }
);

export const loadOneProductThunk = createAsyncThunk<
  Product,
  { repo: ApiRepoProducts; id: Product['id'] }
>('product/load', async ({ repo, id }) => {
  const product = await repo.getProductById(id);
  return product;
});

export const deleteProductThunk = createAsyncThunk<
  Product[],
  { repo: ApiRepoProducts; id: Product['id'] }
>('product/delete', async ({ repo, id }) => {
  const deleteProduct = await repo.deleteProduct(id);
  return deleteProduct;
});
