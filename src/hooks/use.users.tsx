import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoUsers } from '../repo/api.repo.users';
import { User } from '../entities/user';
import { loginThunk, registerThunk } from '../slices/users/users.thunk';

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();

  const usersRepo = new ApiRepoUsers();

  const doLogin = (userToLogin: Partial<User>) => {
    dispatch(loginThunk({ repo: usersRepo, loginUser: userToLogin }));
    console.log('doLogin from hook ', userToLogin, usersRepo);
  };

  const doRegister = (userToRegister: FormData) => {
    console.log('Desde el hook userToRegister:', userToRegister);
    dispatch(registerThunk({ repo: usersRepo, registerUser: userToRegister }));
  };

  return {
    doLogin,
    doRegister,
  };
}
