import { useProducts } from './use.products';
import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
describe('Given useUsers hook', () => {
  const dispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatch);
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
});
