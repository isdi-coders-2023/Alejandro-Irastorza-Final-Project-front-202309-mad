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
  Product,
  { repo: ApiRepoProducts; id: Product['id'] }
>('product/delete', async ({ repo, id }) => {
  const deleteProduct = await repo.deleteProduct(id);
  return deleteProduct;
});

export const addNewProductThunk = createAsyncThunk<
  Product,
  { repo: ApiRepoProducts; productToAdd: FormData }
>('product/add', async ({ repo, productToAdd }) => {
  const addProduct = await repo.createProduct(productToAdd);
  return addProduct;
});

export const updateCurrentProductThunk = createAsyncThunk<
  Product,
  { repo: ApiRepoProducts; id: Product['id']; productToUpdate: FormData }
>('product/update', async ({ repo, id, productToUpdate }) => {
  const updateProduct = await repo.updateProduct(id, productToUpdate);
  return updateProduct;
});
