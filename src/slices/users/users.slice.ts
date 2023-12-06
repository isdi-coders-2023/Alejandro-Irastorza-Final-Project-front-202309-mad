import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../entities/user.js';
import { LoginAnswer } from '../../types/login.answer.js';

export type UsersState = {
  loggedUser: User | null;
};

const initialState: UsersState = {
  loggedUser: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UsersState, { payload }: PayloadAction<LoginAnswer>) => {
      state.loggedUser = payload.loggedUser;
    },
    logout: (state: UsersState) => {
      state.loggedUser = null;
    },
  },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
