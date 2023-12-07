import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { ApiRepoUsers } from '../repo/api.repo.users';
import { User } from '../entities/user';
import { loginThunk } from '../slices/users/users.thunk';

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();

  const usersRepo = new ApiRepoUsers();

  const doLogin = (userToLogin: Partial<User>) => {
    dispatch(loginThunk({ repo: usersRepo, user: userToLogin }));
    console.log('doLogin from hook ', userToLogin, usersRepo);
  };

  return {
    doLogin,
  };
}
