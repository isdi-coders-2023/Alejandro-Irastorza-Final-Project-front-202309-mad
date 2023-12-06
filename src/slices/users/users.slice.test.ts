import { User } from '../../entities/user';
import usersReducer, { login, logout, UsersState } from './users.slice';
import { LoginAnswer } from '../../types/login.answer';

describe('User slice/login reducer', () => {
  it('should turn state into User', () => {
    const initialState: UsersState = {
      loggedUser: null,
    };

    const loginPayload: LoginAnswer = {
      loggedUser: {} as User,
    };

    const action = login(loginPayload);

    const newState = usersReducer(initialState, action);

    expect(newState.loggedUser).toEqual(loginPayload.loggedUser);
  });
});

describe('User slice/register reducer', () => {
  it('should turn state into null', () => {
    const initialState: UsersState = {
      loggedUser: {} as User,
    };

    const action = logout();

    const newState = usersReducer(initialState, action);

    expect(newState.loggedUser).toEqual(null);
  });
});
