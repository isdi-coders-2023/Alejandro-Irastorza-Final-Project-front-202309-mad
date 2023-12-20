import { render, screen } from '@testing-library/react';
import RegisterPage from './register.page';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    doLogin: jest.fn(),
  }),
}));

describe('Given Register Page', () => {
  describe('When we render it', () => {
    render(
      <Router>
        <Provider store={store}>
          <RegisterPage></RegisterPage>
        </Provider>
      </Router>
    );
    test('Then it should print a form element', async () => {
      const fromElement = screen.getByRole('form');

      expect(fromElement).toBeInTheDocument();
    });
  });
});
