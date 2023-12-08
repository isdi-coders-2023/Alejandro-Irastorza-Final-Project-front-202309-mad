import { User } from '../../entities/user';
import { ApiRepoUsers } from '../../repo/api.repo.users';
import { store } from '../../store/store';
import { LoginAnswer } from '../../types/login.answer';
import { loginThunk, registerThunk } from './users.thunk';

describe('Given loginThunk', () => {
  describe('When we dispatch succesfully', () => {
    const mockedRepo = {
      userLogin: jest.fn().mockReturnValue({} as LoginAnswer),
      userRegister: jest.fn().mockReturnValue({} as User),
    } as unknown as ApiRepoUsers;

    test('Then it should dispatch', async () => {
      await store.dispatch(
        loginThunk({ repo: mockedRepo, loginUser: {} as Partial<User> })
      );
      expect(mockedRepo.userLogin).toHaveBeenCalled();
    });
    test('Then it should dispatch', async () => {
      await store.dispatch(
        registerThunk({ repo: mockedRepo, registerUser: {} as Partial<User> })
      );
      expect(mockedRepo.userLogin).toHaveBeenCalled();
    });
  });
});
