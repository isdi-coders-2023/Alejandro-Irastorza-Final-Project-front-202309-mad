import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../entities/product';
import { ApiRepoProducts } from '../../repo/api.repo.products';
import { User } from '../../entities/user';

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
  { repo: ApiRepoProducts; productToAdd: FormData; id: User['id'] }
>('product/add', async ({ repo, productToAdd, id }) => {
  const addProduct = await repo.createProduct(productToAdd, id);
  return addProduct;
});

export const updateCurrentProductThunk = createAsyncThunk<
  Product,
  { repo: ApiRepoProducts; id: Product['id']; productToUpdate: FormData }
>('product/update', async ({ repo, id, productToUpdate }) => {
  const updateProduct = await repo.updateProduct(id, productToUpdate);
  return updateProduct;
});

export const getByCategoryThunk = createAsyncThunk<
  Product[],
  { repo: ApiRepoProducts; category: string }
>('product/getCategory', async ({ repo, category }) => {
  const getProductsByCategory = await repo.getProductByCategory(category);
  return getProductsByCategory;
});
