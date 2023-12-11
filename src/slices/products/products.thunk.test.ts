import { Product } from '../../entities/product';
import { ApiRepoProducts } from '../../repo/api.repo.products';
import { store } from '../../store/store';
import { loadProductsThunk } from './products.thunk';

describe('Given loadProductsThunk', () => {
  describe('When we dispatch succesfully', () => {
    const mockedRepo = {
      getAllProducts: jest.fn().mockReturnValue([] as Product[]),
    } as unknown as ApiRepoProducts;

    test('Then it should dispatch', async () => {
      await store.dispatch(loadProductsThunk(mockedRepo));
      expect(mockedRepo.getAllProducts).toHaveBeenCalled();
    });
  });

  describe('When we dispatch unsuccesfully', () => {
    const mockedRepo = {
      getAllProducts: jest.fn().mockRejectedValue([] as Product[]),
    } as unknown as ApiRepoProducts;

    test('Then it should dispatch', async () => {
      await store.dispatch(loadProductsThunk(mockedRepo));
      expect(mockedRepo.getAllProducts).toHaveBeenCalled();
    });
  });
});
