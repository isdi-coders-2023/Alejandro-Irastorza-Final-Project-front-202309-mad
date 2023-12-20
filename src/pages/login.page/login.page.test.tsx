import { render, screen } from '@testing-library/react';
import LoginPage from './login.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import configureStore from 'redux-mock-store';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogin: jest.fn(),
  }),
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Given Login Component', () => {
  describe('when loginState isnt logged', () => {
    test('Then it should be a form element', async () => {
      render(
        <Router>
          <Provider store={store}>
            <LoginPage></LoginPage>
          </Provider>
        </Router>
      );
      const fromElement = screen.getByRole('form');

      expect(fromElement).toBeInTheDocument();
    });
  });

  describe('when login state is logged', () => {
    const mockStore = configureStore([]);

    const initialState = {
      users: {
        loginState: 'logged',
      },
    };

    const mockedStore = mockStore(initialState);

    test('then navigate should be called', () => {
      render(
        <Router>
          <Provider store={mockedStore}>
            <LoginPage></LoginPage>
          </Provider>
        </Router>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
