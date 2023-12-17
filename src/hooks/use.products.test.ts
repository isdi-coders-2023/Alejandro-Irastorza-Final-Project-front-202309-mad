import { useProducts } from './use.products';
import { renderHook } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../entities/user';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe('Given useUsers hook', () => {
  const dispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatch);
  (useSelector as jest.Mock).mockImplementation((mockStateSelector) =>
    mockStateSelector({
      users: {
        userToken: '',
      },
    })
  );
  describe('when we execute doLogin', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { loadAllProducts } = result.current;

      loadAllProducts();

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('when we execute loadOneProduct', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { loadOneProduct } = result.current;

      loadOneProduct('');

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute deleteProduct', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { deleteProduct } = result.current;

      deleteProduct('');

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute addNewProduct', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { addNewProduct } = result.current;

      addNewProduct({} as FormData, '' as User['id']);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute updateCurrentProduct', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { updateCurrentProduct } = result.current;

      updateCurrentProduct('', {} as FormData);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute getByCategory', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { getByCategory } = result.current;

      getByCategory('');

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute closeProductPopUp', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { closeProductPopUp } = result.current;

      closeProductPopUp();

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute openProductPopUp', () => {
    test('then dispatch should be called ', () => {
      const { result } = renderHook(() => useProducts());
      const { openProductPopUp } = result.current;

      openProductPopUp();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
