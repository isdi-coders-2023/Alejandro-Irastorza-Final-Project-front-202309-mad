import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoProducts } from '../repo/api.repo.products';
import {
  addNewProductThunk,
  deleteProductThunk,
  getByCategoryThunk,
  loadOneProductThunk,
  loadProductsThunk,
  updateCurrentProductThunk,
} from '../slices/products/products.thunk';
import { User } from '../entities/user';
import * as ac from '../slices/products/products.slice';

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

  const addNewProduct = (newProduct: FormData, userId: User['id']) => {
    dispatch(
      addNewProductThunk({
        repo: productsRepo,
        productToAdd: newProduct,
        id: userId,
      })
    );
  };

  const updateCurrentProduct = (id: string, productToUpdate: FormData) => {
    dispatch(
      updateCurrentProductThunk({ repo: productsRepo, id, productToUpdate })
    );
  };

  const getByCategory = (category: string) => {
    dispatch(getByCategoryThunk({ repo: productsRepo, category: category }));
  };

  const closeProductPopUp = () => {
    dispatch(ac.setOffPopUp());
  };

  const openProductPopUp = () => {
    dispatch(ac.setOnPopUp());
  };

  return {
    loadAllProducts,
    loadOneProduct,
    deleteProduct,
    addNewProduct,
    updateCurrentProduct,
    getByCategory,
    closeProductPopUp,
    openProductPopUp,
  };
}
