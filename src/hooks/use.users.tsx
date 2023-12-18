import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoUsers } from '../repo/api.repo.users';
import { User } from '../entities/user';
import { loginThunk, registerThunk } from '../slices/users/users.thunk';
import { logout } from '../slices/users/users.slice';

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();

  const usersRepo = new ApiRepoUsers();

  const doLogin = (userToLogin: Partial<User>) => {
    dispatch(loginThunk({ repo: usersRepo, loginUser: userToLogin }));
  };

  const doRegister = (userToRegister: FormData) => {
    dispatch(registerThunk({ repo: usersRepo, registerUser: userToRegister }));
  };

  const doLogout = () => {
    dispatch(logout());
  };

  return {
    doLogin,
    doRegister,
    doLogout,
  };
}
