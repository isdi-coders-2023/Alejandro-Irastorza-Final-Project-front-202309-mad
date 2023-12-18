import { User } from '../entities/user';
import { useUsers } from './use.users';
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

      const { result } = renderHook(() => useUsers());

      const { doLogin } = result.current;

      doLogin({} as Partial<User>);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute doRegister', () => {
    test('then dispatch should be called ', () => {
      const dispatch = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(dispatch);

      const { result } = renderHook(() => useUsers());

      const { doRegister } = result.current;

      doRegister({} as FormData);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('when we execute doLogout', () => {
    test('then dispatch should be called ', () => {
      const dispatch = jest.fn();
      (useDispatch as jest.Mock).mockReturnValue(dispatch);

      const { result } = renderHook(() => useUsers());

      const { doLogout } = result.current;

      doLogout();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
