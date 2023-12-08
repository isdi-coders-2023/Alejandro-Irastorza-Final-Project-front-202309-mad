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
  const loginResponse = await repo.userLogin(loginUser);

  return loginResponse;
});

export const registerThunk = createAsyncThunk<
  User,
  { repo: ApiRepoUsers; registerUser: Partial<User> }
>('users/register', async ({ repo, registerUser }) => {
  const registerResponse = await repo.userRegister(registerUser);

  return registerResponse;
});
