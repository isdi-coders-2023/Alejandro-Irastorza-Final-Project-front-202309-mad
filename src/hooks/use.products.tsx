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

  const addNewProduct = (newProduct: FormData) => {
    dispatch(
      addNewProductThunk({ repo: productsRepo, productToAdd: newProduct })
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

  return {
    loadAllProducts,
    loadOneProduct,
    deleteProduct,
    addNewProduct,
    updateCurrentProduct,
    getByCategory,
  };
}
