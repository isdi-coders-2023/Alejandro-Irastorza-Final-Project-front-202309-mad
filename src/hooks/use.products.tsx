import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoProducts } from '../repo/api.repo.products';
import { loadProductsThunk } from '../slices/products/products.thunk';

export function useProducts() {
  const dispatch = useDispatch<AppDispatch>();

  const productsRepo = new ApiRepoProducts();

  const loadAllProducts = () => {
    dispatch(loadProductsThunk(productsRepo));
  };

  return { loadAllProducts };
}
