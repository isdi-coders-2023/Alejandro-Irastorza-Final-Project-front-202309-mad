import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepoUsers } from '../../repo/api.repo.users';
import { User } from '../../entities/user';
import { LoginAnswer } from '../../types/login.answer';

export const loginThunk = createAsyncThunk<
  LoginAnswer,
  {
    repo: ApiRepoUsers;
    loginUser: Partial<User>;
  }
>('users/login', async ({ repo, loginUser }) => {
  console.log('Arrived to usersThunk');
  const loginResponse = await repo.userLogin(loginUser);
  console.log('Login Response ', loginResponse);

  return loginResponse;
});
