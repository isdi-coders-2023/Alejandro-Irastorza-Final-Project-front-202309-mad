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
  { repo: ApiRepoProducts; id: Product['id']; token: string }
>('product/delete', async ({ repo, id, token }) => {
  const deleteProduct = await repo.deleteProduct(id, token);
  return deleteProduct;
});

export const addNewProductThunk = createAsyncThunk<
  Product,
  {
    repo: ApiRepoProducts;
    productToAdd: FormData;
    id: User['id'];
    token: string;
  }
>('product/add', async ({ repo, productToAdd, id, token }) => {
  const addProduct = await repo.createProduct(productToAdd, id, token);
  return addProduct;
});

export const updateCurrentProductThunk = createAsyncThunk<
  Product,
  {
    repo: ApiRepoProducts;
    id: Product['id'];
    productToUpdate: FormData;
    token: string;
  }
>('product/update', async ({ repo, id, productToUpdate, token }) => {
  const updateProduct = await repo.updateProduct(id, productToUpdate, token);
  return updateProduct;
});

export const getByCategoryThunk = createAsyncThunk<
  Product[],
  { repo: ApiRepoProducts; category: string }
>('product/getCategory', async ({ repo, category }) => {
  const getProductsByCategory = await repo.getProductByCategory(category);
  return getProductsByCategory;
});
