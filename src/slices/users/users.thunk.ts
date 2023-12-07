import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepoUsers } from '../../repo/api.repo.users';
import { User } from '../../entities/user';

export const loginThunk = createAsyncThunk<
  User,
  {
    repo: ApiRepoUsers;
    user: Partial<User>;
  }
>('users/login', async ({ repo, user }) => {
  console.log('Arrived to usersThunk');
  const loginResponse = await repo.userLogin(user);
  console.log('Login Response ', loginResponse);
  return loginResponse;
});
