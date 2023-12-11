import { useProducts } from './use.products';
import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
describe('Given useUsers hook', () => {
  describe('when we execure doLogin', () => {
    test('then dispatch should be called ', () => {
      const dispatch = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(dispatch);

      const { result } = renderHook(() => useProducts());

      const { loadAllProducts } = result.current;

      loadAllProducts();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
