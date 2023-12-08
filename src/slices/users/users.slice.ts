import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../entities/user.js';
// import { LoginAnswer } from '../../types/login.answer.js';
import { loginThunk, registerThunk } from './users.thunk.js';
import { LoginAnswer } from '../../types/login.answer.js';

export type UsersState = {
  loggedUser: User | null;
  loginState: 'logout' | 'logging' | 'logged';
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      console.log('Loading');
      state.loginState = 'logging';
      state.loggedUser = null;
      state.userToken = null;
      return state;
    });
    builder.addCase(loginThunk.rejected, (state: UsersState) => {
      console.log('Login rejected', state);
      state.loginState = 'logout';
      state.loggedUser = null;
      state.userToken = null;

      return state;
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<LoginAnswer>) => {
        console.log('From loginReducer', payload);
        state.loggedUser = payload.user;
        state.loginState = 'logged';
        state.userToken = payload.token;
        console.log('state:', state);
        return state;
      }
    );
    builder.addCase(registerThunk.fulfilled, () => {
      console.log('Registered');
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
