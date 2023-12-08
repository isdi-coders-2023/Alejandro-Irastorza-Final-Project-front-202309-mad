import { UsersState } from './users.slice';
import { usersSlice } from '../../slices/users/users.slice';
import { User } from '../../entities/user';

const { reducer, actions } = usersSlice;

describe('Given userSlice', () => {
  describe('When we call reducer with logout action', () => {
    test('then it should set loggedUser to null ', () => {
      const currentState = {
        loggedUser: {} as User,
        loginState: 'logged',
        userToken: '',
      } as UsersState;

      const newState = reducer(currentState, actions.logout());

      expect(newState.loggedUser).toBe(null);
    });
  });
});
