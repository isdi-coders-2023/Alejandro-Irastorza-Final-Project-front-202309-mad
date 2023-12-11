import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoProducts } from '../repo/api.repo.products';
import {
  deleteProductThunk,
  loadOneProductThunk,
  loadProductsThunk,
} from '../slices/products/products.thunk';

export function useProducts() {
  const dispatch = useDispatch<AppDispatch>();

  const productsRepo = new ApiRepoProducts();

  const loadAllProducts = () => {
    dispatch(loadProductsThunk(productsRepo));
  };

  const loadOneProduct = (id: string) => {
    dispatch(loadOneProductThunk({ repo: productsRepo, id: id }));
  };

  const deleteProduct = (id: string) => {
    dispatch(deleteProductThunk({ repo: productsRepo, id: id }));
  };

  return { loadAllProducts, loadOneProduct, deleteProduct };
}
