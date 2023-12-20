import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../entities/user.js';
import { loginThunk, registerThunk } from './users.thunk.js';
import { LoginAnswer } from '../../types/login.answer.js';

export type UsersState = {
  loggedUser: User | null;
  loginState: 'logout' | 'logging' | 'logged' | 'rejected';
  userToken: string | null;
};

const initialState: UsersState = {
  loggedUser: null,
  loginState: 'logout',
  userToken: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.loginState = 'logout';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      state.loginState = 'logging';
      state.loggedUser = null;
      state.userToken = null;
      return state;
    });
    builder.addCase(loginThunk.rejected, (state: UsersState) => {
      state.loginState = 'rejected';
      state.loggedUser = null;
      state.userToken = null;

      return state;
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<LoginAnswer>) => {
        state.loggedUser = payload.user;
        state.loginState = 'logged';
        state.userToken = payload.token;
        return state;
      }
    );
    builder.addCase(registerThunk.fulfilled, () => {});
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
