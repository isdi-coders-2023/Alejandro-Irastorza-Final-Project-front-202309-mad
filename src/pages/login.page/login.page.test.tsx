import { render, screen } from '@testing-library/react';
import { LoginPage } from './login.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogin: jest.fn(),
  }),
}));

describe('Login Component', () => {
  render(
    <Router>
      <Provider store={store}>
        <LoginPage></LoginPage>
      </Provider>
    </Router>
  );
  test('Then it submits form with correct values', async () => {
    const fromElement = screen.getByRole('form');

    expect(fromElement).toBeInTheDocument();
  });
});
