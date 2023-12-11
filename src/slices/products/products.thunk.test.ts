import { Product } from '../../entities/product';
import { ApiRepoProducts } from '../../repo/api.repo.products';
import { store } from '../../store/store';
import {
  deleteProductThunk,
  loadOneProductThunk,
  loadProductsThunk,
} from './products.thunk';

describe('Given loadProductsThunk', () => {
  describe('When we dispatch succesfully', () => {
    const mockedRepo = {
      getAllProducts: jest.fn().mockReturnValue([] as Product[]),
      getProductById: jest.fn().mockReturnValue({} as Product),
      deleteProduct: jest.fn().mockReturnValue([] as Product[]),
    } as unknown as ApiRepoProducts;

    test('Then it should dispatch', async () => {
      await store.dispatch(loadProductsThunk(mockedRepo));
      expect(mockedRepo.getAllProducts).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await store.dispatch(loadOneProductThunk({ repo: mockedRepo, id: '' }));
      expect(mockedRepo.getProductById).toHaveBeenCalled();
    });

    test('Then it should dispatch', async () => {
      await store.dispatch(deleteProductThunk({ repo: mockedRepo, id: '' }));
      expect(mockedRepo.deleteProduct).toHaveBeenCalled();
    });
  });
});

describe('When we dispatch unsuccesfully', () => {
  const mockedRepo = {
    getAllProducts: jest.fn().mockRejectedValue([] as Product[]),
    getProductById: jest.fn().mockRejectedValue({} as Product),
  } as unknown as ApiRepoProducts;

  test('Then it should dispatch', async () => {
    await store.dispatch(loadProductsThunk(mockedRepo));
    expect(mockedRepo.getAllProducts).toHaveBeenCalled();
  });

  test('Then it should dispatch', async () => {
    await store.dispatch(loadOneProductThunk({ repo: mockedRepo, id: '' }));
    expect(mockedRepo.getProductById).toHaveBeenCalled();
  });
});
